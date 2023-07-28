import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart"
import { CartProvider } from "./context/CartContext";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
                        <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
                        <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                        <Route path="/cart" element={<Cart></Cart>}></Route>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>


        </div>
    )
}

export default App;

