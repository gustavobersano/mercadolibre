interface Author {
    name: String,
    lastname: String
}

interface ItemList {
    id: String,
    title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean
    state_name: String
}

interface List {
    author: Author,
    categories: Array<String>,
    items: Array<ItemList>
}

interface Item {
    id: String,
    title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
}

interface ItemSearch {
    author: Author,
    item: Item
}

export {
    Author,
    ItemList,
    List,
    Item,
    ItemSearch
}