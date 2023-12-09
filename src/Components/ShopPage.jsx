import { getProducts } from '../Api/storeItems';
import { useEffect, useState } from 'react';

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
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ShopPage;