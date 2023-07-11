import NavBar from "./Components/NavBar/NavBar";
import Itemlistcontainer from "./Components/ItemListContainer.js/ItemListContainer";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

function App () {

    return(
        <div className="App">
            <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path = "/" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
              <Route path="/category/:categoryId" element={<Itemlistcontainer></Itemlistcontainer>}></Route>  
              <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
            </Routes>
            </BrowserRouter>
            

        </div>
    )
}

export default App;