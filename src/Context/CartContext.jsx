import axios, { all } from 'axios';
import { useState, createContext, useContext, useEffect, useMemo } from 'react';
import { useUserContextValues } from './UserContext';

const cartContext = createContext();

function useCartValues() {
  const cartValues = useContext(cartContext);
  return cartValues;
}

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [clickedOnAddOrRemoveToCart, setClickedOnAddOrRemoveToCart] =
    useState(false);
  const { userLoggedIn } = useUserContextValues();

  const totalMRP = useMemo(() => {
    const totalPrice = cartItems.reduce((sum, cartItem) => sum + ((cartItem.price)* (cartItem.quantity)), 0);
    return totalPrice
  }, [cartItems]);

  useEffect(() => {
    if (userLoggedIn) {
      getAllCartItems();
    }
  }, [clickedOnAddOrRemoveToCart, userLoggedIn]);

  async function getAllCartItems() {
    const allCartItems = await axios.get(
      `${import.meta.env.VITE_BACKEND_SERVER}/api/cart/`,
      {
        headers: {
          Authorization: localStorage.getItem('auth-token'),
        },
      }
    );
    setCartItems([...allCartItems.data]);
  }

  const addItemToCart = async (productId) => {
    try {
      // add item to cart using the api
      await axios.post(
        `${import.meta.env.VITE_BACKEND_SERVER}/api/cart/`,
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
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_SERVER}/api/cart/${productId}`,
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

  return (
    <cartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemFromCart,totalMRP }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { useCartValues };
export default CartContext;
