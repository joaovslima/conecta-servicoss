// No GitHub Pages os arquivos ficam sob o caminho do repositório.
// No desenvolvimento local, usamos o caminho padrão.
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    baseUrl: process.env.PAGES_BASE_PATH || '',
  },
});
