
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="rightContainer"> {/* Added div with class name "rightContainer" */}
          <div className={styles.infoContainer}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}€</p>
          </div>
          <div className={styles.productQuantity}>
            <input type="number" id={`quantity-${product.id}`} name={`quantity-${product.id}`} value={quantity} onChange={handleQuantityChange} min="1" max="100" aria-label="Quantity" />   
          </div>
          <div className={styles.buttonContainer}>
          <button type="button" onClick={() => addToCart(product, quantity)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
