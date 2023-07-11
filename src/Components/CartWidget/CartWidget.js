import cart from "./assets/cart.svg";
import "./CartWidget.css";


function CartWidget(){
    return(
        <div>
            <img className="carrito" src={cart} alt ="carrito " ></img>

            0

        </div>
        

    )
}

export default CartWidget;