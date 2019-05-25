const categoriesTools = require('../tools/categories');

module.exports = {
    newItemList: (data, dataCategories) => {
        let list = [];
        console.log(dataCategories);
        // Se consideran unicamente los primeros 4 resultados
        data.results  = data.results.slice(0, 4);

        //let categoriesId = categoriesTools.getCategoriesIds(data.results);
        
        /*
        // Se inicializa una lista de ID's vacia
        let categoriesId = [];
        // Se cargan todos los ID del resultado de la búsqueda
        data.results.forEach(element => {
            categoriesId.push(element.category_id);
        });
        // Se eliminan repetidos
        categoriesId = [...new Set(categoriesId)];
        */
        // Se inicializa una lista de nombres de categorias vacía
        let categories = [];
        categoriesId.forEach(categoryId => {
            // Se busca el nombre en la tabla de filtros habilitados
            const categotiesAvailable = data.available_filters.find((filter) => {
                return filter.id == 'category';
            });
            const category = categotiesAvailable.values.find((catFilter) => {
                return catFilter.id == categoryId;
            });
            categories.push(category.name);
        });

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
                        decimals: 0 // Pendiente recuperar a partir de la moneda
                    },
                    picture: item.thumbnail || '',
                    condition: item.condition || '',
                    free_shipping: item.shipping.free_shipping || '',
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