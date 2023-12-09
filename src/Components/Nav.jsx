import { Link } from 'react-router-dom';
import Cart from './Cart';

const Nav = () => {
    return (
        <nav>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <Cart />
        </nav>
    );
};

export default Nav;
