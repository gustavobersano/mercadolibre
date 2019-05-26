const categoriesTools = require('../tools/categories');

module.exports = {
    newItemList: (data) => {
        let list = [];

        // Se limita la respuesta a los primeros 4 aciertos
        data.results = data.results.slice(0, 4);

        // Se consideran unicamente los primeros 4 resultados
        let categories = categoriesTools.getCategories(data);

        // Se inicializa una lista de Items vacia
        let items = [];
        // Se recorren los resultados y se genera la lista de items
        data.results.forEach(item => {
            items.push(
                {
                    id: item.id || '',
                    title: item.title || '',
                    price: {
                        currency: item.currency_id || '',
                        amount: item.price || 0,
                        decimals: 0 // TODO: Pendiente recuperar a partir de la moneda
                    },
                    picture: item.thumbnail || '',
                    condition: item.condition || '',
                    free_shipping: item.shipping.free_shipping || '',
                    state_name: item.address.state_name || ''
                }
            );
        });

        return {
            author: {
                name: 'Gustavo',
                lastname: 'Bersano'
            },
            categories: categories,
            items: items
        }
    }
}