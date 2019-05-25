module.exports = {

    newItem: (data) => {
        return {
            'author': {
                'name': 'Gustavo',
                'lastname': 'Bersano'
            },
            'item': {
                'id': data.item.id || '',
                'title': data.item.title || '',
                'price': {
                    'currency': data.currency.id || '',
                    'amount': data.item.price || 0,
                    'decimals': data.currency.decimal_places || 2
                },
                'picture': data.item.pictures[0].url || '',
                'condition': data.item.condition || '',
                'free_shipping': data.item.shipping.free_shipping || '',
                'sold_quantity': data.item.sold_quantity || 0,
                'description': data.description.plain_text
            }
        };
    }

}