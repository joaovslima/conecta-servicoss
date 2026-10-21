import './apresentacao.css';

export default function Apresentacao({ children }) {
  return <div className="vitrine">
    <header className="vitrine-topo">
      <a className="assinatura" href="https://github.com/joaovslima/conecta-servicoss" aria-label="Repositório do Conecta Serviços">
        <span className="simbolo">cs<span>↗</span></span>
        <span>conecta<span className="assinatura-leve"> serviços</span></span>
      </a>
      
    </header>

    <main className="vitrine-principal">
      <section>
      
        <div className="celular">
          <div className="botao-lateral botao-lateral-um" aria-hidden="true" />
          <div className="botao-lateral botao-lateral-dois" aria-hidden="true" />
          <div className="camera" aria-hidden="true"><span /></div>
          <div className="tela-celular">{children}</div>
          <div className="barra-gesto" aria-hidden="true" />
        </div>
      </section>

      <aside className="informacoes" aria-labelledby="titulo-projeto">
        
        <h1 id="titulo-projeto">Um serviço.<br />Uma oportunidade.<br /><span>Uma conexão.</span></h1>
        <p className="introducao">Quem precisa de uma mão encontra quem sabe fazer. Um aplicativo para aproximar clientes e profissionais de serviços em Fortaleza.</p>
        <div className="etiquetas" aria-label="Categorias atendidas">
          <span>Eletricista</span><span>Encanador</span><span>Pedreiro</span><span>Montador de móveis</span>
        </div>

        <div className="acoes-vitrine">
          <a className="link-repositorio" href="https://github.com/joaovslima/conecta-servicoss" target="_blank" rel="noreferrer">Ver código no GitHub <span aria-hidden="true">↗</span></a>
        </div>

      </aside>
    </main>

  </div>;
}
