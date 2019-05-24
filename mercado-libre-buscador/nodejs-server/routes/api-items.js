let express = require('express');
let router = express.Router();
let Item = require('../models/item.js');
let request = require('request');

const urlBase = 'https://api.mercadolibre.com/';

/* GET ITEMS BY QUERY */
router.get('/items', function (req, res, next) {

  const myURL = new URL(urlBase + "sites/MLA/search?q=" + req.query.q);

  request(myURL.toString(), function (error, response, body) {
    res.json({
      body: JSON.parse(body),
    });
  });
});

/* GET SINGLE ITEM BY ID */
router.get('/:id', function (req, res, next) {

  //req.params.id
  //var theUrl = "https://api.mercadolibre.com/items/MLA670899102";

});

module.exports = router;

// Para obtener las categorias https://api.mercadolibre.com/sites/MLA/
  /*
/categories X
  */
  // https://developers.mercadolibre.com.ar/es_ar/usuarios-y-aplicaciones/
