var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(require('./routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
