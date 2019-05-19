var express = require('express');
var router = express.Router();
var Item = require('../models/item.js');

/* GET ALL ITEMS */
router.get('/', function (req, res, next) {
  Item.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE ITEM BY ID */
router.get('/:id', function (req, res, next) {
  Item.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;