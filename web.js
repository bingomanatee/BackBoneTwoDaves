var express = require('express');

/*
app.get('/', function(request, response) {
  response.send('Hello World!');
}); */
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
