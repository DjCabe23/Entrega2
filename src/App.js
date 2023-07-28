import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Itemlistcontainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart"
import { CartProvider } from "./context/CartContext";
import Checkout from "./Components/CheckOut/"

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
                        <Route path="/category/:categoryId" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
                        <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                        <Route path="/cart" element={<Cart></Cart>}></Route>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>


        </div>
    )
}

export default App;

