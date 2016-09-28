const app = require('./app');
const port = process.env.PORT || 4000;
const webUrl = process.env.WEB_URL  || `http://localhost:${port}`;

app({
  webUrl: webUrl,
  environment: process.env.ENV
}).listen(port, function () {
  console.log(`web app: ${webUrl}/`);
});
