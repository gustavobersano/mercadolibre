module.exports = {

    getCategoriesIds: (data) => {
        // Se inicializa una lista de ID's vacia
        let categoriesId = [];
        // Se cargan todos los ID del resultado de la búsqueda
        data.results.forEach(element => {
            categoriesId.push(element.category_id);
        });
        // Se eliminan repetidos
        return categoriesId = [...new Set(categoriesId)];
    }
    
}