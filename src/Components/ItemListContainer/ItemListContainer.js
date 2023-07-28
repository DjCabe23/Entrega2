import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../config/firebase";


const ItemListContainer = ( greeting ) => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('categoty', '==',categoryId))
            : collection(db, 'products')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className='margin-menu'>  
         <ItemList products={products}/>
        </div>
        )

}

export default ItemListContainer;