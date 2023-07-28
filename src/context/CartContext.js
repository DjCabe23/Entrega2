
import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    const addItem = (item, quantity) => {
        const productStock = cart.find(prod => prod.item.id === item.id);

        if (!productStock(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        } else {
            const cartUpdate = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else {
                    return prod;
                }
            });
            setCart(cartUpdate);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity))

        }


    }

    const deleteProduct = (id) => {
        const productDelete = cart.find(prod => prod.item.id === id);
        const cartUpdate = cart.filter(prod => prod.item.id !== id);

        setCart(cartUpdate);
        setTotalQuantity(prev => prev - productDelete.quantity);
        setTotal(prev => prev(productDelete.item.price * productDelete.quantity));
    }

    const vaciarCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, deleteProduct, vaciarCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )




}
