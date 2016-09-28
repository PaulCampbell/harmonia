const mountApp = require('./mountApp');
const pageModel = require('./pageModel');

describe('Browsing files', () => {
  it('lists the folders and files', () => {
    mountApp();
    return pageModel.repositoryContents().directories().shouldHave({text: 'some directory'});
  });
})
