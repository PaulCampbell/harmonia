const express = require('express');
const path = require('path');
const browserify = require('browserify-middleware');

module.exports = (options) => {
  const app = express();
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, 'views'));
  app.use('/', express.static(__dirname + '/../browser/dist'));

  const serveBrowserFiles = browserify(__dirname + '/../browser', {
    transform: ['babelify'],
    extensions: ['.jsx'],
    fullPaths: true
  });

  app.use('/browser', serveBrowserFiles);

  app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

  return app;
}
