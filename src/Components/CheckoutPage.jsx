import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

const CheckoutPage = () => {
  const {cartItems, setCartItems} = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setCartItems([]);
    setShowModal(true);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          No items found
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            {/* <img src={item.image} alt={item.title} /> */}
            <h3>{item.title}</h3>
            <p>{item.price}€</p>
            <p>Quantity: {item.qty}</p>
          </div>
        ))
      )}
  
      {cartItems.length > 0 && (
        <button onClick={handleCheckout}>Checkout</button>
      )}
  
      {showModal && (
        <div>
          Your order is on the way!
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
