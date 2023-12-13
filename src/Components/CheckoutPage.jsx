import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";
import CustomButton from "./CustomButton";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const {cartItems, setCartItems} = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setCartItems([]);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          No items found
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={styles.product}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}€</p>
            <p>Quantity: {item.qty}</p>
          </div>
        ))
      )}

      {showModal && (
        <div className={styles.modal}>
          Your order is on the way!
          <CustomButton onClick={() => setShowModal(false)} name="Close" className={styles.modal}></CustomButton>
        </div>
      )}
  
      {cartItems.length > 0 && (
        <div>
          <div className={styles.total}>
            Total: {cartItems.reduce((total, item) => total + item.price * item.qty, 0)}€
          </div>
          <CustomButton onClick={handleCheckout} name="Checkout" className={styles.customButton}></CustomButton>
        </div>
      )}
    </div>
  );
      };

export default CheckoutPage;
