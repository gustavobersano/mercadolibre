const axios = require('axios');
const urlBase = 'https://api.mercadolibre.com';

module.exports = {

    currencyByIdPromise: (currencyId) => new Promise((resolve, error) => {
        axios.get(`${urlBase}/currencies/${currencyId}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }),

    itemsByIdPromise: (id) => new Promise((resolve, error) => {
        axios.get(`${urlBase}/items/${id}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }),

    descriptionitemsByIdPromise: (id) => new Promise((resolve, error) => {
        axios.get(`${urlBase}/items/${id}/description`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }),

}
