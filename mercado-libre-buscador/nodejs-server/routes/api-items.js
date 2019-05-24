let express = require('express');
let router = express.Router();
let Item = require('../models/item.js');
let request = require('request');

const urlBase = 'https://api.mercadolibre.com';
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


/* GET ALL ITEMS */
router.get('/items', function (req, res, next) {
  //const path = '/sites/MLA/search'
  //let urlComplete = urlBase.concat(path).concat('?q=').concat(req.query.q);
  //let urlComplete = urlBase + path + '?q=' + req.query.q;
  let theUrl = "https://api.mercadolibre.com/sites/MLA/search?q=:mesa";
  //let theUrl = "https://api.mercadolibre.com/sites/MLA/search?q=:mesa";
             //"https://api.mercadolibre.com/sites/MLA/search?q=​:mesa"
            //"https://api.mercadolibre.com/sites/MLA/search?q=​:mesa"
  //let theUrl = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q;

  //var theUrl = "https://api.mercadolibre.com/items/MLA670899102";
  // Para obtener las categorias https://api.mercadolibre.com/sites/MLA/
  /*
/categories X
  */
 // https://developers.mercadolibre.com.ar/es_ar/usuarios-y-aplicaciones/

  request(theUrl, function (error, response, body) {
    res.json(
      {
        body: JSON.parse(body)
        //query: req.query.q,
        //url: urlComplete
      }
      
    );
  });
/*
  res.json(
  {
    test: 'test'
  });
*/
});

/* GET SINGLE ITEM BY ID */
router.get('/:id', function (req, res, next) {

  //req.params.id



  Item.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;