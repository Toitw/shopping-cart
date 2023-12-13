import { getProducts } from '../Api/storeItems';
import { useEffect, useState } from 'react';
import styles from './ShopPage.module.css';
import { Link } from 'react-router-dom';


const ShopPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
        .then((products) => {
            setProducts(products);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []); 

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    return (
        <div className={styles.productGrid}>
            {products.map((product) => (
                <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
                    <div>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <div className={styles.productDetails}>
                            <p>{product.description.substring(0, 100)}...</p>
                            <p>{product.price}€</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ShopPage;