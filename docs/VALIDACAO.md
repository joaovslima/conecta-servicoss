# Validação da entrega parcial

Verificações feitas em 20/10/2026 no Windows:

| Verificação | Resultado |
| --- | --- |
| Instalação com npm | Concluída |
| `npx expo install --check` | Dependências compatíveis com o SDK instalado |
| `npx expo export --platform android --output-dir dist` | Concluído: bundle Android gerado pelo Metro |
| Execução e interação no celular/emulador | Ainda não realizadas |
| Publicação no GitHub | Ainda não realizada; Git não foi encontrado neste ambiente |

A exportação confirma que o código pode ser processado pelo empacotador. Não é um APK e não comprova funcionamento visual ou interação no Android. O checklist de `APRESENTACAO.md` deve ser executado no aparelho antes da entrega parcial.

Versões geradas pelo template: Expo ~58.0.16, React 19.3.0 e React Native 0.88.0. A documentação oficial consultada informa uma transição de SDKs: conferir compatibilidade do Expo Go antes de escolher a forma de executar em celular físico. Referência: https://docs.expo.dev/get-started/create-a-project/.

`npm audit --omit=dev` apontou 22 alertas na árvore do template (7 moderados e 15 altos), incluindo dependências de ferramentas. O comando terminou com código 1. Não foi aplicado `audit fix --force`, pois as soluções sugeridas incluíam trocar versões principais por versões antigas e incompatíveis. A atualização compatível das dependências deve ser revisada antes de distribuição real. Esse resultado não constitui uma análise de explorabilidade do aplicativo.

As pastas `dist`, `node_modules` e `.expo` estão ignoradas pelo Git. Não foi criado teste automatizado para esta etapa de interface; existe um roteiro manual explícito.

## Preparação da publicação

- Git instalado e repositório local iniciado na branch `main`; sem commit ou remoto, pois ainda faltam identidade de autoria e URL do repositório.
- Dependências web instaladas pelo Expo e `npx expo export --platform web` executado com sucesso.
- Feedback de validação exibido dentro da tela para funcionar também no navegador.
- Workflow do Pages preparado, ainda sem execução no GitHub ou teste em URL pública.
- `npx eslint .` passou. O wrapper `expo lint` acusou incompatibilidade com a detecção da versão instalada, então o script `npm run lint` utiliza ESLint diretamente.
- `npx --no-install tsc --noEmit --allowJs --checkJs false --jsx react --skipLibCheck App.js src/dados.js` passou. Esta é uma verificação de processamento do JavaScript; com `checkJs false`, não representa tipagem estática completa.
- Interações no navegador e no Android ainda precisam de verificação manual.

## Apresentação com moldura de celular

- Exportação web e exportação Android concluídas após adicionar a apresentação por plataforma.
- Lint e processamento de JavaScript verificados.
- Navegador Chrome em modo headless: serviço publicado, bloqueio de candidatura no próprio serviço e proposta de R$ 150,00 verificados pela interface.
- Layout inspecionado em capturas de 1440 × 1000 e 375 × 812. Sem overflow horizontal na largura de 375 px.
- Nenhum erro JavaScript durante o teste de interação.
- O teste de navegador não substitui o teste no aparelho Android.
