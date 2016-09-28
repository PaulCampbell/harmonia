/** @jsx plastiq.jsx */
const plastiq = require('plastiq');

const tabs =  [
  { name: 'Setup', renderMethod: 'renderSetupRepository', id: 'setup' },
  { name: 'BrowseRepository', renderMethod: 'renderBrowseRepository', id: 'browse-repository' }
]

class HarmoniaApp {
  constructor() {
    this.currentTab = this.findTabById('setup');
  }

  findTabById(tabId) {
    return tabs.filter((tab) => tab.id === tabId)[0]
  }

  renderSetupRepository() {
    return <div class='setupPanel'>
      <input type='text'  class='setupPanel-gitRemote' />
      <button class='setupPanel-addRemote'>Add remote</button>
    </div>
  }

  renderBrowseRepository() {
    return <div>
      <h1>Now then</h1>
        <ul class='contentList'>
          <li class='contentList-directory'>some directory</li>
          <li class='contentList-file'>some file</li>
        </ul>
    </div>
  }

  renderPage(currentTab) {
    return <div>
      { this[currentTab.renderMethod]() }
    </div>
  }

  render() {
    return this.renderPage(this.currentTab);
  }
}

module.exports = HarmoniaApp;

