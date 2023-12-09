import { Link } from 'react-router-dom';
import cart from '../assets/shopping-cart.png'; 

const Nav = () => {
    return (
        <nav>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="cart-icon">
                <Link to="/checkout" className="nav-link">
                    <img src={cart} alt="Logo" /> 
                    <i className="fas fa-shopping-cart"></i>
                    <span className="item-counter">0</span>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
