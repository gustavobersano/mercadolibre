var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API Works! ' + new Date().getTime()); //TODO: Esto es temporal para que cambie la respuesta.
});

module.exports = router;