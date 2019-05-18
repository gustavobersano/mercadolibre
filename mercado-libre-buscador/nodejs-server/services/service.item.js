const ItemModel = require("../models/model.item");

/* static item service class */
class ItemService {
    static create(data) {
        //TODO
        return item;
    }

    static retrieve(id) {
        if (id != null) {
            //TODO
            return item;
        }
        else {
            throw new Error('Unable to retrieve item by (id:' + id + ')');
        }
    }

    static update(id, data) {
        if (uid != null) {
            //TODO
        }
        else {
            throw new Error('Unable to update item by (uid:' + id + ')');
        }
    }

    static delete(id) {
        if (id != null) {
            //TODO
        }
        else {
            throw new Error('Unable to delete item by (id:' + cuid + ')');
        }
    }
}

module.exports = ItemService;