import cart from '../assets/shopping-cart.png'; 
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
    return (
        <div className="cart-icon">
                <Link to="/checkout" className="nav-link">
                    <img className={styles.cartIcon} src={cart} alt="Logo" /> 
                    <i className="fas fa-shopping-cart"></i>
                    <span className="item-counter">0</span>
                </Link>
        </div>
    )
}

export default Cart