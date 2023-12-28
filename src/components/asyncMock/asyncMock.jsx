const products = [
    {
        id: 101, 
        nombre: "Agenda Portada Imagen", 
        categoria: "agendas", 
        stock: 8, 
        precio: 25000, 
        rutaImagen: "img-agenda-1.jpg"
    },

    {
        id: 102, 
        nombre: "Agenda Portada Letras", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-2.jpg"
    },

    {
        id: 103, 
        nombre: "Agenda Portada Letras", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-3.jpg"
    },
    
    {
        id: 104, 
        nombre: "Agenda Portada Imagen", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-4.jpg"
    },

    {
        id: 105, 
        nombre: "Agenda Portada Imagen", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-5.jpg"
    },

    {
        id: 106, 
        nombre: "Agenda Portada Imagen", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-6.jpg"},
    {
        id: 107, 
        nombre: "Agenda de Notas", 
        categoria: "agendas", 
        stock: 4, 
        precio: 20000, 
        rutaImagen: "img-agenda-7.jpg"
    },

    {
        id: 108, 
        nombre: "Agenda Personalizada", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-8.jpg"
    },

    {
        id: 109, 
        nombre: "Agenda Personalizada", 
        categoria: "agendas", 
        stock: 4, 
        precio: 25000, 
        rutaImagen: "img-agenda-9.jpg"
    },

    {
        id: 201, 
        nombre: "Caja de Sueños", 
        categoria: "cajas", 
        stock: 4, 
        precio: 30000, 
        rutaImagen: "img-caja-1.jpg"
    },

    {
        id: 202, 
        nombre: "Caja de Regalo", 
        categoria: "cajas", 
        stock: 4, 
        precio: 35000, 
        rutaImagen: "img-caja-2.jpg"
    },

    {
        id: 203, 
        nombre: "Caja de Regalo", 
        categoria: "cajas", 
        stock: 4, 
        precio: 35000, 
        rutaImagen: "img-caja-3.jpg"
    },

    {
        id: 204, 
        nombre: "Caja de Detalles", 
        categoria: "cajas", 
        stock: 4, 
        precio: 20000, 
        rutaImagen: "img-caja-4.jpg"
    },

    {
        id: 205, 
        nombre: "Caja de Vino", 
        categoria: "cajas", 
        stock: 4, 
        precio: 15000, 
        rutaImagen: "img-caja-5.jpg"
    },

    {
        id: 206, 
        nombre: "Caja de Vino y Rosas", 
        categoria: "cajas", 
        stock: 4, 
        precio: 20000, 
        rutaImagen: "img-caja-6.jpg"
    },

    {
        id: 207, 
        nombre: "Caja de Cumpleaños", 
        categoria: "cajas", 
        stock: 4, 
        precio: 18000, 
        rutaImagen: "img-caja-7.jpg"
    },

    {
        id: 208, 
        nombre: "Caja de Regalo para Mama", 
        categoria: "cajas", 
        stock: 4, 
        precio: 18000, 
        rutaImagen: "img-caja-8.jpg"
    },

    {
        id: 209, 
        nombre: "Caja de Detalles", 
        categoria: "cajas", 
        stock: 4, 
        precio: 40000, 
        rutaImagen: "img-caja-9.jpg"
    },

    {
        id: 210, 
        nombre: "Caja de Chocolares", 
        categoria: "cajas", 
        stock: 4, 
        precio: 12000, 
        rutaImagen: "img-caja-10.jpg"
    },

    {
        id: 211, 
        nombre: "Caja de Amor", 
        categoria: "cajas", 
        stock: 4, 
        precio: 40000, 
        rutaImagen: "img-caja-11.jpg"
    },
]

/* función que mostrará todos los produstos*/
export const getProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 1000)
    })
}

/* función que mostrará un solo producto por ID */
export const getProductById = (productId) => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(products.find(product => product.id === productId))
        }, 1000)
    })
}
/* función que mostrará la producto por categoría */
export const getProductByCategory = (productCategory) => {
    return new Promise ( (reolve) => {
        setTimeout( () => {
            resolve(product.filter(producto => producto.categoria === productCategory))
        })
    })
}