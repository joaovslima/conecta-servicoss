# Guia de estudo e apresentação

## Explicação curta do projeto

“O Conecta Serviços conecta moradores de Fortaleza a eletricistas, encanadores, pedreiros e montadores de móveis. O cliente publica uma necessidade e profissionais enviam propostas de preço fechado. Após consentimento, os contatos são liberados para negociação pelo WhatsApp. Esta primeira entrega demonstra publicação, consulta e proposta com dados fictícios em memória.”

## Como entender o código

1. Comece em `src/dados.js`: objetos representam serviços e um array representa a lista.
2. Leia `App.js`: `useState` guarda os dados que mudam e causa uma atualização da tela.
3. `tela` determina qual conteúdo aparece. Não há mudança de página de navegador.
4. `map` transforma cada serviço em um cartão. `key` identifica cada item para o React.
5. `TextInput` recebe um valor e `onChangeText` atualiza o estado.
6. `publicar` valida campos e cria um novo objeto. `[novo, ...servicos]` cria outro array sem alterar diretamente o anterior.
7. `enviarProposta` converte o valor digitado, valida e usa `map` para substituir somente o serviço atualizado.
8. `Botao` e `Campo` são componentes reutilizáveis. As propriedades, chamadas props, configuram cada uso.
9. `StyleSheet.create` reúne os estilos. `ScrollView` permite rolagem do conteúdo.

Não tente decorar tudo. Altere um texto, uma cor e um dado de exemplo, e observe o resultado antes de estudar as ações.

## Roteiro da entrega parcial

1. Apresentar o problema, a cidade e as quatro categorias.
2. Abrir um serviço fictício e explicar os campos.
3. Tentar enviar proposta vazia: deve aparecer validação.
4. Enviar valor `150,00` e uma mensagem; mostrar a proposta na tela.
5. Voltar e publicar outro serviço em qualquer uma das categorias.
6. Abrir o serviço recém-publicado e mostrar o bloqueio de candidatura ao próprio serviço.
7. Explicar que dados são temporários e mostrar o plano para banco, login e contratação.

## Checklist manual no Android

- [ ] Lista inicial apresenta três serviços fictícios.
- [ ] Todas as quatro categorias podem ser selecionadas na publicação.
- [ ] Campos obrigatórios vazios ou só com espaços impedem publicação.
- [ ] Alternar 24h muda a indicação no cartão e nos detalhes.
- [ ] Publicar adiciona um cartão e abre seus detalhes corretamente.
- [ ] Próprio serviço não permite enviar proposta.
- [ ] Valor zero, negativo, inválido ou mensagem vazia impedem proposta.
- [ ] Valor `150,00` gera proposta de R$ 150,00.
- [ ] Segunda proposta no mesmo serviço é bloqueada na demonstração.
- [ ] Proposta permanece ao voltar e reabrir o serviço durante a sessão.
- [ ] Formulários podem ser usados com teclado aberto; conferir tamanhos de fonte e rolagem no aparelho.
- [ ] Reiniciar restaura exemplos, conforme a limitação documentada.

Esses itens são um roteiro de teste, não resultados de testes já executados em celular.

## Validação técnica realizada

Consultar `VALIDACAO.md` para os comandos e limitações verificados no ambiente de desenvolvimento.
