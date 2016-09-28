const express = require('express');
const path = require('path');
const browserify = require('browserify-middleware');
const Git = require("nodegit");
const bodyParser = require('body-parser')

const repositoryDirectory = './data'

module.exports = () => {
  const app = express();
  app.use(bodyParser.json());
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, 'views'));
  app.use('/', express.static(__dirname + '/../browser/dist'));

  const serveBrowserFiles = browserify(__dirname + '/../browser', {
    transform: ['babelify'],
    extensions: ['.jsx'],
    fullPaths: true
  });

  app.use('/browser', serveBrowserFiles);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/contents', (req, res) => {
    var repository, contents = [];
    Git.Repository.open(repositoryDirectory).then((repo) => {
      repository = repo
      return repository.fetchAll();
    }).then(() => {
        return repository.mergeBranches("master", "origin/master");
    }).then(() => {
      return repository.getMasterCommit();
    }).then((firstCommitOnMaster) => {
      return firstCommitOnMaster.getTree();
    }).then(function(tree) {
      var walker = tree.walk();
      walker.on("entry", function(entry) {
        contents.push(entry.path());
      });
      walker.start();
    }).catch((err) => {
      res.status(500).send(err);
    }).done(() => {
      res.send(contents)
    })
  })

  app.post('/clone-repository', (req, res) => {
    var gitRemote = req.body.gitRemote;

    return Git.Clone(gitRemote, repositoryDirectory).then((repo)=> {
      console.log(JSON.stringify(repo));
      res.status(200).send(repo);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
  });

  return app;
}
