import Nav from './Nav';
import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const MainPage = () => {

  const {cartItems, setCartItems} = useContext(CartContext);

  const addToCart = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
      if (productInCart) {
          setCartItems(
              cartItems.map((item) =>
                  item.id === product.id
                      ? { ...productInCart, qty: productInCart.qty + 1 }
                      : item
              )
          );
      } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
  };

  return (
      <CartContext.Provider value={{cartItems, addToCart}}>
        <Nav />
        <Outlet />
      </CartContext.Provider>
  );
};

export default MainPage;
