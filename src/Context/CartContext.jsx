import { useState, createContext, useContext } from 'react';

const cartContext = createContext();

function useCartValues() {
  const cartValues = useContext(cartContext);
  return cartValues;
}

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addCartItems = () => {
    setCartItems([...cartItems, cartItems.length + 1]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addCartItems }}>
      {children}
    </cartContext.Provider>
  );
}

export { useCartValues };
export default CartContext;
