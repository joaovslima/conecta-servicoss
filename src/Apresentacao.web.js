import './apresentacao.css';

// O Expo escolhe este arquivo .web.js somente para a versão de navegador.
// children é o próprio aplicativo interativo, não uma imagem da tela.
export default function Apresentacao({ children }) {
  return <div className="vitrine">
    <header className="vitrine-topo">
      <a className="assinatura" href="https://github.com/joaovslima/conecta-servicoss" aria-label="Repositório do Conecta Serviços">
        <span className="simbolo">cs<span>↗</span></span>
        <span>conecta<span className="assinatura-leve"> serviços</span></span>
      </a>
      <span className="etiqueta-topo">DESENVOLVIMENTO MOBILE <span> / </span> 2026</span>
    </header>

    <main className="vitrine-principal">
      <section className="demonstracao" aria-label="Demonstração interativa do aplicativo">
        <div className="legenda-demo"><span className="ponto" /> DEMONSTRAÇÃO INTERATIVA</div>
        <div className="celular">
          <div className="botao-lateral botao-lateral-um" aria-hidden="true" />
          <div className="botao-lateral botao-lateral-dois" aria-hidden="true" />
          <div className="camera" aria-hidden="true"><span /></div>
          <div className="tela-celular">{children}</div>
          <div className="barra-gesto" aria-hidden="true" />
        </div>
        <p className="dica-demo">Use o aplicativo aqui. Clique, publique e explore.</p>
      </section>

      <aside className="informacoes" aria-labelledby="titulo-projeto">
        <div className="localizacao"><span className="ponto" /> FORTALEZA, CE <span className="separador">/</span> MVP ACADÊMICO</div>
        <h1 id="titulo-projeto">Um serviço.<br />Uma oportunidade.<br /><span>Uma conexão.</span></h1>
        <p className="introducao">Quem precisa de uma mão encontra quem sabe fazer. Um aplicativo para aproximar clientes e profissionais de serviços em Fortaleza.</p>
        <div className="etiquetas" aria-label="Categorias atendidas">
          <span>Eletricista</span><span>Encanador</span><span>Pedreiro</span><span>Montador de móveis</span>
        </div>

        <div className="acoes-vitrine">
          <a className="link-repositorio" href="https://github.com/joaovslima/conecta-servicoss" target="_blank" rel="noreferrer">Ver código no GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <p className="nota-prototipo"><span aria-hidden="true">◌</span> Versão de demonstração com dados fictícios. Os dados são reiniciados ao atualizar a página. Login, contratação e avaliações estão planejados.</p>
      </aside>
    </main>

    <footer className="vitrine-rodape"><span>João Victor <span className="separador">/</span> Análise e Desenvolvimento de Sistemas · 4º semestre</span><span className="tecnologias">JavaScript <span>+</span> React Native <span>+</span> Expo</span></footer>
  </div>;
}
