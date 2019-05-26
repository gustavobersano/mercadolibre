module.exports = {

    getCategories: (data) => {
        let categories = [];
        const categoriesAvailables = data.available_filters.find((filter) => {
            return filter.id == 'category';
        });
        if (categoriesAvailables) {
            // Se consideran unicamente los primeros 4 resultados
            for (let index = 0; index < categoriesAvailables.values.length && index < 4; index++) {
                const element = categoriesAvailables.values[index];
                categories.push(element.name);
            }
        } else {
            // Se obtienen las categorías filtradas
            const categoriesFilter = data.filters.find((filter) => {
                return filter.id == 'category';
            });
            if (categoriesFilter) {
                // Se consideran unicamente los primeros 4 resultados
                for (let index = 0; index < categoriesFilter.values.length && index < 4; index++) {
                    const element = categoriesFilter.values[index];
                    categories.push(element.name);
                } 
            }
        }
        return categories;
    }
    
}