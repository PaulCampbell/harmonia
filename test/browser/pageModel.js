const browser = require('browser-monkey');
browser.set({
  visibleOnly: false,
  document: window.document,
  timeout: 10000
});

function finder() {
  var args = Array.prototype.slice.call(arguments);
  return function () { return this.find.apply(this, args); };
}

module.exports = browser.component({
  repositoryContents: function() {
    return this.find('.contentList').component({
      files: finder('.contentList-file'),
      directories: finder('.contentList-directory')
    })
  },

  setupPanel: function() {
    return this.find('.setupPanel').component({
      gitRemoteInput: finder('.setupPanel-gitRemote'),
      addRemote: finder('setupPanel-addRemote')
    })
  }
})
