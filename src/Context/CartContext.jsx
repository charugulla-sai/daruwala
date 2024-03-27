import axios, { all } from 'axios';
import { useState, createContext, useContext, useEffect } from 'react';

const cartContext = createContext();

function useCartValues() {
  const cartValues = useContext(cartContext);
  return cartValues;
}

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [clickedOnAddOrRemoveToCart, setClickedOnAddOrRemoveToCart] = useState(false);

  useEffect(() => {
    async function getAllCartItems() {
      const allCartItems = await axios.get('http://localhost:3000/api/cart/', {
        headers: {
          Authorization: localStorage.getItem('auth-token'),
        },
      });
      setCartItems([...allCartItems.data]);
    }
    getAllCartItems();
  }, [clickedOnAddOrRemoveToCart]);

  const addItemToCart = async (productId) => {
    try {
      // add item to cart using the api
      await axios.post(
        `http://localhost:3000/api/cart/`,
        { productId: productId },
        {
          headers: {
            Authorization: localStorage.getItem('auth-token'),
          },
        }
      );

      setClickedOnAddOrRemoveToCart(!clickedOnAddOrRemoveToCart);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItemFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${productId}`, {
        headers: {
          Authorization: localStorage.getItem('auth-token'),
        },
      });
      setClickedOnAddOrRemoveToCart(!clickedOnAddOrRemoveToCart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <cartContext.Provider value={{ cartItems, addItemToCart,deleteItemFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export { useCartValues };
export default CartContext;
