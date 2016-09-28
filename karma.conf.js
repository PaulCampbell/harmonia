module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/browser/**/*Spec.js',
    ],
    exclude: [
      'test/**/*.sw?'
    ],
    preprocessors: {
      'test/**/*Spec.js': ['browserify'],
      'browser/*': ['browserify']
    },
    browserify: {
      debug: true,
      extensions: ['.jsx'],
      transform: ['babelify', 'brfs'],
    },
    urlRoot: '/karma/',
    browserNoActivityTimeout: 180000,
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true
    },
    client: {
      mocha: {
        timeout: 0
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    electronOpts: {
      show: false,
      windowName: 'my-window',
      webPreferences: {
        webSecurityEnabled: false
      },
    },
    customLaunchers: browsers
  });
};

var browsers = {
  'electron-debug': {
    base: 'Electron',
    debug: true
  },
};
