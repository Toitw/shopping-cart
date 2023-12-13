import cart from '../assets/shopping-cart.png'; 
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div className="cart-icon">
                <Link to="/checkout" className="nav-link">
                    <img className={styles.cartIcon} src={cart} alt="Logo" /> 
                    <i className="fas fa-shopping-cart"></i>
                    <span className="item-counter">{cartItems.length}</span>
                </Link>
        </div>
    )
}

export default Cart