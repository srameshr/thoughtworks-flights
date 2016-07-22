module.exports = (() => {
  const client = './src/client/';
  const clientApp = client + 'app/';
  const root = './';
  const config = {
    allJS: [
      clientApp + "*.js",
      clientApp + "*.js",
      clientApp + "*.js"
    ],
    allScss: [
      'scss/app.scss'
    ],
    cssOP: 'all.css',
    cssDest: 'styles/'
  }

  return config;
});
