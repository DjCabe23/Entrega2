import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="menu">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <NavLink to={`/category/Camas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camas</NavLink>
                    </div>
                    <div className="col">
                        <NavLink to={`/category/Accecsorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accecsorios</NavLink>
                    </div>
                    <div className="col">
                        <NavLink to={`/category/Camas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Sommier</NavLink>
                    </div>
                </div>
            </div>
            <CartWidget></CartWidget>


        </nav>
    )
}

export default NavBar;