var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./build'));

app.use('/', function(req, res) {
  console.log('Site visited by URL: ' + req.url);
  res.sendFile(path.resolve('build/index.html'));
});

var port = 5000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Express server listening on port', port);
});