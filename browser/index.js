const App = require('./app');
const plastiq = require('plastiq');
const router = require('plastiq-router');
router.querystring = require('qs');

plastiq.append(document.body, new App({}));
