import { of, Observable } from 'rxjs';
import { List, ItemSearch } from '../../../models/models';

export class ItemServiceStub {

    getItems(query): Observable<List> {
        return of({
            author: {
                name: 'Gustavo',
                lastname: 'Bersano'
            },
            categories: [
                'Laptops y Accesorios',
                'Celulares y Teléfonos',
                'Componentes de PC',
                'Tablets y Accesorios'
            ],
            items: [{
                "id":"MLA715523767",
                "title":"Combo Actualizacion Asus Ryzen 3 2200g Vega 8 + A320 + 8gb",
                "price":{
                    "currency":"ARS",
                    "amount":12999,
                    "decimals":0
                },
                "picture":"http://mla-s2-p.mlstatic.com/642963-MLA27799380839_072018-I.jpg",
                "condition":"new",
                "free_shipping":true,
                "state_name":"Capital Federal"
            },{
                "id":"MLA665685961",
                "title":"Pc Armada Asus Core I3 8100 - 8gb Ddr4 - 1tb - Kit",
                "price":{
                    "currency":"ARS",
                    "amount":20981,
                    "decimals":0
                },
                "picture":"http://mla-s2-p.mlstatic.com/885859-MLA25878527915_082017-I.jpg",
                "condition":"new",
                "free_shipping":true,
                "state_name":"Capital Federal"
            },{
                "id":"MLA735446635",
                "title":"Notebook Asus Vivobook E406 Intel N4000 64gb 4gb 14 Win10",
                "price":{
                    "currency":"ARS",
                    "amount":16999,
                    "decimals":0
                },
                "picture":"http://mla-s2-p.mlstatic.com/924692-MLA29803361778_042019-I.jpg",
                "condition":"new",
                "free_shipping":true,
                "state_name":"Capital Federal"
            },{
                "id":"MLA594485993",
                "title":"Notebook Asus Intel Core I5 8250 15,6 1tb 8gb Gamer ",
                "price":{
                    "currency":"ARS",
                    "amount":34999,
                    "decimals":0
                },
                "picture":"http://mla-s2-p.mlstatic.com/739628-MLA30202654667_052019-I.jpg",
                "condition":"new",
                "free_shipping":true,
                "state_name":"Capital Federal"
            }]
          });
    }

    getItemById(id): Observable<ItemSearch> {

        return of({
            "author":{
                "name":"Gustavo",
                "lastname":"Bersano"
            },
            "item":{
                "id":"MLA715523767",
                "title":"Combo Actualizacion Asus Ryzen 3 2200g Vega 8 + A320 + 8gb",
                "price":{
                    "currency":"ARS",
                    "amount":12999,
                    "decimals":2
                },
                "picture":"http://mla-s2-p.mlstatic.com/642963-MLA27799380839_072018-O.jpg",
                "condition":"new",
                "free_shipping":true,
                "sold_quantity":25,
                "description":"ASUS - TIENDA OFICIAL ARGENTINA\n--------------------------------------------------------------------------\nCOMBO ACTUALIZACION ASUS RYZEN 3 2200G Vega 8\n\n-Procesador: AMD Ryzen 3 - 2200G 4 Nucleos y 4 Hilos - 3.5Ghz Base, 3.7Ghz Boost - Gráficos Integrados Vega 8 \n-Motherboard ASUS PRIME A320M-K - Hasta 32GB DDR4 2666 - USB 3.1 - M.2 - SATA 6Gbps - HDMI / VGA\n-Memoria RAM 8GB DDR4 2400MHz (Según stock)\n--------------------------------------------------------------------------\nNOSOTROS\nASUS es una compañía enfocada a la tecnología, con una plantilla global por encima de los diez mil trabajadores y uno de los mejores equipos de investigación y desarrollo a nivel mundial, ofrece un completo portafolio para competir en el nuevo milenio. \nSólo durante 2008, ASUS fue galardonada con 3056 premios. El beneficio total del mismo año fue de 8.1billones de dólares americanos, y ha sido reconocida como el fabricante de hardware de TI nº 1 en la liga anual de las 10 marcas más importantes de Taiwán, con un valor de 1.324 billones de dólares americanos. Cabe también destacar que ASUS lleva 11 años consecutivos apareciendo entre las 10 principales compañías de TI de BusinessWeek's \"InfoTech 100\". \n--------------------------------------------------------------------------\nFORMAS DE Envío / RETIRO\n-A todo el país a través del sistema Mercado Envíos de Mercado Libre. \n-Moto Privada: Contamos con motos propias, realizamos envíos a CBA y GBA. Consulte tarifas.\n-Realizamos envíos a Tierra del Fuego - Consulte \n-También puede retirar personalmente en nuestra tienda ubicada en microcentro\n--------------------------------------------------------------------------\nUBICACIÓN \n-Estamos ubicados cerca de las estaciones de Subte: A (Est. Perú), B (Est. Florida), C (Est. Diagonal Norte), D (Est. Catedral). \n-Líneas de colectivo: Estamos a 7 cuadras del Metrobus ¿ Obelisco (Lineas 9-10-17-45-59-67-70-91-98-100-129) \n--------------------------------------------------------------------------\nHORARIOS DE ATENCIÓN \nLunes a Viernes de 10 a 19 hs / Sábados de 10 a 14 hs."
            }
        });
    }

}
