const express = require('express');
const trie = require('./trie/citiesTrie.json');
var cors = require('cors');
const {listNames} = require('./trie/trieMethods.js');
const app = express();
const port = process.env.PORT || 5000;
//const API_ID = process.env.API_ID;
// This displays message that the server running and listening to specified port

app.use(cors())
// create a GET route
app.get('/listcities', (req, res)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*")
    res.send({data: listNames(trie, req.query.prefix)});
});

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.listen(port, () => console.log(`Listening on port ${port}`));

