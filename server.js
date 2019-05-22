var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(path.join(__dirname, 'public'))); //set static path

//home page routing
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views', 'index.html'))
})

//server starting
app.listen(8080, function () {
  console.log('server started on port 8080')
})
