# Publicar código e demonstração

O Git registra versões no computador. O GitHub guarda o repositório online. O GitHub Pages pode hospedar a versão para navegador do mesmo código React Native. Isso não gera um APK.

## Repositório

1. Entre na sua conta do GitHub e crie um repositório, por exemplo `conecta-servicos`.
2. Para uma demonstração pública com o plano gratuito, escolha público. Todo o código e a documentação ficarão visíveis.
3. Não adicione README, licença nem `.gitignore` pelo site, pois esses arquivos já existem localmente.
4. Copie a URL HTTPS do repositório.

Na pasta `conecta-servicos`, execute os comandos abaixo com os seus dados:

```bash
git config user.name "SEU NOME"
git config user.email "SEU EMAIL OU EMAIL NOREPLY DO GITHUB"
git add .
git commit -m "Adiciona esboço e documentação do Conecta Serviços"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

O repositório local já foi iniciado na branch `main`. Faça a autenticação pelo navegador quando o Git solicitar. Não coloque senha ou token no código ou no chat. O e-mail de autoria ficará nos commits; o GitHub oferece um e-mail `noreply` nas configurações da conta.

## Demonstração por link

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **GitHub Actions**.
3. Abra **Actions → Publicar demonstração web → Run workflow**. Se a primeira execução ocorreu antes de habilitar Pages, rode novamente.
4. Aguarde a execução terminar com sucesso. O link aparecerá na publicação e em **Settings → Pages**.
5. Teste lista, publicação e proposta no link e envie ao professor tanto o repositório quanto a demonstração.

O workflow lê o caminho do Pages e configura os endereços dos arquivos automaticamente. Não é necessário alterar o nome do repositório no código.

## Executar antes de publicar

```bash
npm ci
npm run web
```

Para gerar os arquivos estáticos: `npx expo export --platform web`. Esses arquivos ficam em `dist`, que não precisa ser enviado ao Git: o workflow faz a geração no GitHub.

A demonstração continua sem login e sem banco. Atualizar ou fechar a página restaura os exemplos. Os dados não são compartilhados entre visitantes.

## Atualizar

```bash
git add .
git commit -m "Descreve a alteração realizada"
git push
```

Cada envio para `main` inicia uma nova publicação, desde que o Pages já esteja habilitado.

Referências: [Expo: publicar web](https://docs.expo.dev/guides/publishing-websites/), [GitHub: workflows para Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
