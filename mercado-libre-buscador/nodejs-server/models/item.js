var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    author: {
        name: String,
        lastname: String
    },
    item: {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number,
        },
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Number,
        description: String
    }
});

module.exports = mongoose.model('item', ItemSchema);