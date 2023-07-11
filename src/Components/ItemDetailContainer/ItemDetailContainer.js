import { useState, useEffect } from "react";
import { getProductById, getProductByCategory } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;