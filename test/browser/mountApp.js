const createTestDiv = require('./createTestDiv');
const App = require('../../browser/app');
const plastiq = require('plastiq');
const router = require('plastiq-router');

var plastiqAttachment;

class MountApp {
  andVisitUrl(options){
    options = options || this.options;

    var url = options && options.href?
      options.href:
      this.api? this.api.appUrl().href : undefined;

    setUrl(url);

    var div = createTestDiv();

    if (plastiqAttachment) {
      plastiqAttachment.remove();
    }

    router.stop();
    router.start({history: router.hash});
    plastiqAttachment = plastiq.append(div, new App({
      sellingCompany: this.config
    }), {requestRender: setTimeout});

    return this;
  }
}

function setUrl(url) {
  if (url) {
    location.hash = url.replace(/^\//, '');
  }
}

module.exports = function mountApp(api, options) {
  const mount = new MountApp(api, options);
  mount.andVisitUrl();
}

