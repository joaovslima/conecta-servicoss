import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { categorias, servicosIniciais } from './src/dados';

function Botao({ texto, onPress }) {
  return <TouchableOpacity accessibilityRole="button" style={styles.botao} onPress={onPress}><Text style={styles.textoBotao}>{texto}</Text></TouchableOpacity>;
}

function Campo({ rotulo, ...propriedades }) {
  return <><Text style={styles.rotulo}>{rotulo}</Text><TextInput accessibilityLabel={rotulo} style={styles.campo} {...propriedades} /></>;
}

export default function App() {
  // O estado guarda os dados temporariamente. Reiniciar o app restaura os exemplos.
  const [tela, setTela] = useState('lista');
  const [servicos, setServicos] = useState(servicosIniciais);
  const [selecionado, setSelecionado] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [bairro, setBairro] = useState('');
  const [categoria, setCategoria] = useState(categorias[0]);
  const [urgente, setUrgente] = useState(false);
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [aviso, setAviso] = useState('');

  // Mensagem na própria tela funciona tanto no Android quanto no navegador.
  function avisar(tituloAviso, textoAviso) {
    setAviso(`${tituloAviso}: ${textoAviso}`);
  }

  function publicar() {
    if (!titulo.trim() || !descricao.trim() || !bairro.trim()) {
      avisar('Campos obrigatórios', 'Preencha título, descrição e bairro.');
      return;
    }
    const novo = { id: Date.now().toString(), clienteId: 'aluno', titulo: titulo.trim(), descricao: descricao.trim(), bairro: bairro.trim(), categoria, urgente, propostas: [] };
    setServicos([novo, ...servicos]);
    setTitulo(''); setDescricao(''); setBairro(''); setUrgente(false);
    setTela('lista');
    setAviso('Serviço publicado na demonstração.');
  }

  function enviarProposta() {
    const preco = Number(valor.trim().replace(',', '.'));
    if (!Number.isFinite(preco) || preco <= 0 || !mensagem.trim()) {
      avisar('Confira a proposta', 'Informe um valor positivo, como 150,00, e uma mensagem.');
      return;
    }
    if (selecionado.propostas.length > 0) {
      avisar('Proposta já enviada', 'Na demonstração você pode enviar uma proposta por serviço.');
      return;
    }
    const proposta = { id: Date.now().toString(), valor: preco, mensagem: mensagem.trim() };
    const atualizado = { ...selecionado, propostas: [...selecionado.propostas, proposta] };
    setServicos(servicos.map((item) => item.id === atualizado.id ? atualizado : item));
    setSelecionado(atualizado); setValor(''); setMensagem('');
    avisar('Proposta simulada enviada', 'O aceite do cliente e a liberação do contato serão implementados depois.');
  }

  return <View style={styles.pagina}>
    <StatusBar style="light" />
    <View style={styles.cabecalho}><Text style={styles.marca}>Conecta Serviços</Text><Text style={styles.subtitulo}>Fortaleza • Projeto acadêmico</Text></View>
    <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
      <Text style={styles.aviso}>Protótipo: sem login, com dados fictícios em memória.</Text>
      {aviso !== '' && <TouchableOpacity accessibilityRole="button" accessibilityLabel="Dispensar mensagem" onPress={() => setAviso('')}><Text accessibilityLiveRegion="polite" style={styles.aviso}>{aviso} (toque para fechar)</Text></TouchableOpacity>}
      {tela === 'lista' && <>
        <Text style={styles.titulo}>Serviços disponíveis</Text>
        <Text style={styles.texto}>Encontre uma oportunidade ou publique o serviço de que você precisa.</Text>
        <Botao texto="+ Publicar serviço" onPress={() => setTela('publicar')} />
        {servicos.map((item) => <TouchableOpacity accessibilityRole="button" key={item.id} style={styles.cartao} onPress={() => {
          setSelecionado(item); setValor(''); setMensagem(''); setTela('detalhes');
        }}>
          <Text style={styles.categoria}>{item.categoria}</Text>
          <Text style={styles.tituloCartao}>{item.titulo}</Text>
          <Text style={styles.texto}>{item.bairro} • Fortaleza</Text>
          <Text style={styles.texto}>{item.urgente ? 'Solicita atendimento em até 24h' : 'Prazo a combinar'}</Text>
          <Text style={styles.categoria}>{item.propostas.length} proposta(s) • Ver detalhes →</Text>
        </TouchableOpacity>)}
      </>}
      {tela === 'publicar' && <>
        <Botao texto="← Voltar" onPress={() => setTela('lista')} />
        <Text style={styles.titulo}>Publicar serviço</Text>
        <Campo rotulo="Título" value={titulo} onChangeText={setTitulo} maxLength={100} placeholder="Ex.: Instalar uma torneira" />
        <Text style={styles.rotulo}>Categoria</Text>
        <View style={styles.opcoes}>{categorias.map((item) => <TouchableOpacity accessibilityRole="button" accessibilityState={{ selected: categoria === item }} key={item} onPress={() => setCategoria(item)} style={[styles.opcao, categoria === item && styles.ativa]}>
          <Text style={{ color: categoria === item ? '#fff' : '#173c50' }}>{item}</Text>
        </TouchableOpacity>)}</View>
        <Campo rotulo="Descrição" value={descricao} onChangeText={setDescricao} multiline maxLength={1500} placeholder="Explique o que precisa ser feito" />
        <Campo rotulo="Bairro de Fortaleza" value={bairro} onChangeText={setBairro} maxLength={80} placeholder="Ex.: Benfica" />
        <View style={styles.linha}><Text style={styles.flex}>Preciso de atendimento em até 24h</Text><Switch accessibilityLabel="Atendimento em até 24 horas" value={urgente} onValueChange={setUrgente} /></View>
        <Text style={styles.texto}>A urgência não garante disponibilidade. Fotos serão adicionadas em uma próxima etapa.</Text>
        <Botao texto="Publicar" onPress={publicar} />
      </>}
      {tela === 'detalhes' && selecionado && <>
        <Botao texto="← Voltar" onPress={() => setTela('lista')} />
        <Text style={styles.categoria}>{selecionado.categoria}</Text>
        <Text style={styles.titulo}>{selecionado.titulo}</Text>
        <Text style={styles.texto}>{selecionado.bairro} • Fortaleza</Text>
        <Text style={styles.texto}>{selecionado.descricao}</Text>
        <Text style={styles.texto}>{selecionado.urgente ? 'Atendimento solicitado em até 24 horas.' : 'Prazo a combinar.'}</Text>
        {selecionado.clienteId === 'aluno' ? <Text style={styles.aviso}>Este serviço é seu. Você não pode se candidatar a ele.</Text> : <>
          <Text style={styles.tituloCartao}>Enviar proposta</Text>
          <Campo rotulo="Preço fechado (R$)" keyboardType="decimal-pad" value={valor} onChangeText={setValor} placeholder="150,00" />
          <Campo rotulo="Mensagem e disponibilidade" multiline maxLength={1000} value={mensagem} onChangeText={setMensagem} placeholder="Informe o que está incluído no preço" />
          <Text style={styles.texto}>Na versão final, enviar a proposta autoriza liberar seu telefone quando o cliente aceitar conversar. Este protótipo não coleta nem compartilha telefones.</Text>
          <Botao texto="Enviar proposta simulada" onPress={enviarProposta} />
        </>}
        <Text style={styles.tituloCartao}>Propostas da demonstração</Text>
        {selecionado.propostas.length === 0 && <Text style={styles.texto}>Nenhuma proposta enviada.</Text>}
        {selecionado.propostas.map((item) => <View key={item.id} style={styles.cartao}>
          <Text style={styles.tituloCartao}>{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
          <Text style={styles.texto}>{item.mensagem}</Text>
        </View>)}
      </>}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: '#f3f6fa' },
  cabecalho: { backgroundColor: '#173c50', padding: 24, paddingTop: 58 },
  marca: { color: '#fff', fontSize: 25, fontWeight: 'bold' }, subtitulo: { color: '#c9e5ed', marginTop: 6 },
  conteudo: { padding: 20, paddingBottom: 48 },
  aviso: { backgroundColor: '#fff0cc', padding: 12, borderRadius: 8, color: '#604708', marginBottom: 18, lineHeight: 21 },
  titulo: { fontSize: 25, fontWeight: 'bold', color: '#173c50', marginBottom: 12 },
  texto: { color: '#526171', lineHeight: 23, marginBottom: 12 },
  botao: { backgroundColor: '#176b60', padding: 16, borderRadius: 10, alignItems: 'center', marginBottom: 18 },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cartao: { padding: 18, backgroundColor: '#fff', borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#dce4eb' },
  categoria: { color: '#176b60', fontWeight: 'bold', marginBottom: 8 },
  tituloCartao: { fontSize: 19, fontWeight: 'bold', color: '#173c50', marginBottom: 10 },
  rotulo: { fontWeight: 'bold', marginBottom: 8, color: '#173c50' },
  campo: { backgroundColor: '#fff', borderColor: '#b8c7d4', borderWidth: 1, borderRadius: 8, padding: 14, marginBottom: 18, fontSize: 16, color: '#203343' },
  opcoes: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 18 },
  opcao: { padding: 12, backgroundColor: '#e3ebf0', borderRadius: 8 }, ativa: { backgroundColor: '#176b60' },
  linha: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 }, flex: { flex: 1, color: '#173c50' },
});
