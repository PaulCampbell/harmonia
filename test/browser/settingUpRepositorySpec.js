const mountApp = require('./mountApp');
const pageModel = require('./pageModel');

describe('setting up repository', () => {
  context('no git repo directory exists', () => {
    it.only('lets you add a git remote and clones that remote', () => {
      mountApp();
      var setupPanel =  pageModel.setupPanel();
      return setupPanel.gitRemoteInput().typeIn('some remote').then(() => {
        setupPanel.addRemote().click()
      })
    });
  })
})
