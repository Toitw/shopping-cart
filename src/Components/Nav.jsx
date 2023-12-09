import { Link } from 'react-router-dom';

import cart from '../assets/shopping-cart.png'; 

const Nav = () => {
    return (
        <nav>
            <div className="nav-links">
                <h1>Shop</h1>
                {/* <Link to="/" className="nav-link">Home</Link> */}
            </div>
            <div className="cart-icon">
                <img src={cart} alt="Logo" /> 
                <i className="fas fa-shopping-cart"></i>
                <span className="item-counter">0</span>
            </div>
        </nav>
    );
};

export default Nav;
