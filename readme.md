

## Running it

`node web/server.js`


## Testing it

`npm run test-browser`


## API

# Clone a repo

curl http://localhost:4000/clone-repository -d '{ "gitRemote": "https://github.com/PaulCampbell/harmonia-data"}' --header "Content-Type:application/json"


# Now read the repo

curl http://localhost:4000/contents
