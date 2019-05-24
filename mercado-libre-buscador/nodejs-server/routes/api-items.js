let express = require('express');
let router = express.Router();
let request = require('request');

const urlBase = 'https://api.mercadolibre.com/';

/* GET SINGLE ITEM BY ID */
router.get('/items/:id', function (req, res, next) {

  const myURL = new URL(urlBase + "items/" + req.params.id);

  request(myURL.toString(), function (error, response, body) {
    res.json({
      body: JSON.parse(body),
    });
  });
  //req.params.id
  //var theUrl = "https://api.mercadolibre.com/items/MLA670899102";

});

/* GET ITEMS BY QUERY */
router.get('/items', function (req, res, next) {

  const myURL = new URL(urlBase + "sites/MLA/search?q=" + req.query.q);

  request(myURL.toString(), function (error, response, body) {
    res.json({
      body: JSON.parse(body),
    });
  });
});



module.exports = router;

// Para obtener las categorias https://api.mercadolibre.com/sites/MLA/
  /*
/categories X
  */
  // https://developers.mercadolibre.com.ar/es_ar/usuarios-y-aplicaciones/