import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <h2>Otra Forma || Tienda de Diseño</h2>
                </Link>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> HOME </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> PRODUCTS </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> ABOUT </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> CONTACT </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> CART </NavLink>
                <CartWidget />
            </nav>
        </div>
    );
};

export default NavBar