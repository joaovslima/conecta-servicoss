# Conecta Serviços

Projeto acadêmico de Desenvolvimento Mobile — Análise e Desenvolvimento de Sistemas, 4º semestre. Aplicativo Android em JavaScript e React Native para conectar moradores de Fortaleza a prestadores de serviços. Nome provisório.

**Entrega parcial:** 26/10/2026. **Apresentação final:** 23/11/2026. Desenvolvimento individual.

## Problema e proposta

Hoje as pessoas dependem de indicações, WhatsApp e redes sociais para encontrar profissionais e obter orçamentos. A proposta é reunir pedidos e propostas de preço fechado. Depois do consentimento, as partes negociam pelo WhatsApp. Pagamentos são feitos diretamente entre elas.

Categorias: eletricista, encanador, pedreiro e montador de móveis. A mesma conta poderá contratar e oferecer serviços.

## O que já funciona

Este é o **esboço funcional da entrega parcial**, não o MVP final completo:

- Lista de serviços com exemplos fictícios.
- Publicação com título, categoria, descrição, bairro e opção de atendimento em até 24 horas.
- Detalhes de um serviço.
- Envio de proposta simulada com preço fechado e mensagem.
- Validação dos campos e bloqueio de proposta no próprio serviço.

Os dados ficam em memória e são perdidos ao reiniciar. Não existem usuários autenticados, servidor, contatos reais, fotos, contratação, pagamento ou avaliação implementados. A lista de propostas é apenas demonstrativa; não representa permissões entre usuários reais.

## Executar

Pré-requisitos: Node.js LTS e npm. A base foi gerada com o template JavaScript `blank` do Expo. Consulte a compatibilidade do SDK em [Expo: criar projeto](https://docs.expo.dev/get-started/create-a-project/) e a configuração em [Expo: ambiente](https://docs.expo.dev/get-started/set-up-your-environment/).

```bash
cd conecta-servicos
npm install
npm start
```

Com um emulador Android configurado, execute `npm run android`. Em celular físico, use Expo Go **se a versão instalada for compatível com o SDK do projeto**; caso contrário, será necessário um development build ou alinhar a versão do SDK antes da apresentação. A execução em aparelho ainda precisa ser validada.

Para testar a mesma demonstração no navegador, execute `npm run web`. A configuração de publicação automática no GitHub Pages está em `.github/workflows/pages.yml`; veja o [passo a passo de publicação](docs/PUBLICACAO.md). Nenhum link público foi criado ainda.

## Organização e conceitos

```text
App.js                 Telas, componentes pequenos, estado e ações
src/dados.js           Categorias e serviços fictícios
docs/DISCOVERY.md      Problema, regras, requisitos e modelo de dados
docs/PLANO.md          Etapas até a entrega final
docs/APRESENTACAO.md   Guia de estudo e roteiro de demonstração
package.json           Comandos e dependências
package-lock.json      Versões resolvidas das dependências
```

Começamos com poucos arquivos para facilitar a leitura. Conforme as telas crescerem, elas serão separadas em `src/telas`. Não utilizamos TypeScript, Redux ou arquitetura complexa.

## Documentação

- [Publicar no GitHub e disponibilizar uma demonstração por link](docs/PUBLICACAO.md)
- [Discovery e requisitos](docs/DISCOVERY.md)
- [Plano de desenvolvimento](docs/PLANO.md)
- [Guia para estudar, testar e apresentar](docs/APRESENTACAO.md)

## Publicar no GitHub

Crie um repositório vazio e, dentro desta pasta, execute com o Git instalado:

```bash
git init
git add .
git commit -m "Adiciona esboço React Native e documentação inicial"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Substitua `URL_DO_SEU_REPOSITORIO` pela URL fornecida pelo GitHub. Publique somente a pasta `conecta-servicos`; as pastas de análise do aplicativo antigo estão fora dela. Não há repositório remoto publicado automaticamente.
