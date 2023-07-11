import { useState, useEffect } from "react";
import {getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        asyncFunc(categoryId)
            .then(Response => {
            setProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return(
        <div>

            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )

}

export default Itemlistcontainer;