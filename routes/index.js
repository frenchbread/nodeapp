var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {title: 'Express App'});
});

module.exports = router;