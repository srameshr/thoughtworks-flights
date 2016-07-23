module.exports = (() => {
  const clientApp = 'app/';
  const root = './';
  const config = {
    allJS: [
      clientApp + "*.js",
      clientApp + "**/*.js",
      clientApp + "**/**/*.js"
    ],
    allScss: [
      'scss/app.scss'
    ],
    cssOP: 'all.css',
    cssDest: 'styles/',
    karma: {
      exclude: [],
      files: []
    }
  }

  return config;
});
