import { Link } from 'react-router-dom';
import Cart from './Cart';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Cart className={styles.navLink}/>
            </div>
        </nav>
    );
};

export default Nav;
