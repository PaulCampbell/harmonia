/** @jsx plastiq.jsx */
const plastiq = require('plastiq');

class HarmoniaApp {
  render() {
    return <div>
      <h1>Now then</h1>
        <ul class='contentList'>
          <li class='contentList-directory'>some directory</li>
          <li class='contentList-file'>some file</li>
        </ul>
    </div>
  }
}

module.exports = HarmoniaApp;

