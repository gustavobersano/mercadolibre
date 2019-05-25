let express = require('express');
let router = express.Router();
let request = require('request');


const itemService = require('../services/item.service');
const item = require('../core/item');
const itemList = require('../core/itemList');


const urlBase = 'https://api.mercadolibre.com';

/* GET SINGLE ITEM BY ID */
router.get('/items/:id', function (req, res, next) {

  Promise.all([itemService.itemsByIdPromise(req.params.id), itemService.descriptionitemsByIdPromise(req.params.id)])
    .then(
      responseAll => {
        Promise.all([itemService.currencyByIdPromise(responseAll[0].currency_id)]).then(
          response => {
            res.json(
              item.newItem({
                item: responseAll[0],
                description: responseAll[1],
                currency: response[0]
              })
            )
          }
        );
      }
    );

});

/* GET ITEMS BY QUERY */
router.get('/items', function (req, res, next) {
  const url = new URL(`${urlBase}/sites/MLA/search?q=${req.query.q}`);
  request(url.toString(), function (error, response, bodyQuery) {
    res.json(
      itemList.newItemList(JSON.parse(bodyQuery))
    );
  });
});

module.exports = router;