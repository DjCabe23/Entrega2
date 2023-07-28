const products = [
        {
            id:1,
            name: 'Cama',
            price: 2000,
            category: 'Camas',
            img: "https://www.espacity.com/w/wp-content/uploads/01347001000028_1.jpg",
            stock:10,
            description: 'Descripcion de cama'
        },
        {
            id:2,
            name: 'Almohada ',
            price: 1500,
            category: 'Accecsorios',
            img: "https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/r/e/relleno_50x70_1_1.jpg",
            stock:20,
            description: 'Descripcion de almohadas'
        },
        {
            id:3,
            name: 'Sommier ',
            price: 1500,
            category: 'Camas',
            img:"https://www.colchoncity.com.ar/wp-content/uploads/compacfirm2022-sommier-2plazas.jpg ",
            stock:5,
            description: 'Descripcion de camas'
        },
        

  

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    } )
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === productCategory))
        },500)
    })
}
 