import Nav from './Nav';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { CartContext } from './CartContext';

const MainPage = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    const numQuantity = Number(quantity);
  
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, qty: productInCart.qty + numQuantity }
            : item
        )
      );
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: numQuantity }]);
    }
  };

  return (
      <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
        <Nav />
        <Outlet />
      </CartContext.Provider>
  );
};

export default MainPage;
