import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return (
        <nav className="menu"> 
            <Link to= '/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/category/Camas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Camas</NavLink>
                
                
                <NavLink to={`/category/Accecsorios`}className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Accecsorios</NavLink>
                <NavLink to={`/category/Camas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Sommier</NavLink>

            </div>

            <CartWidget></CartWidget>

            
        </nav>
    )
}

export default NavBar;