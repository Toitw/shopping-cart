import { useContext } from "react";
import { CartContext } from "./CartContext";

const CheckoutPage = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Resume</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}€</p>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
