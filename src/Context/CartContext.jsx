import axios, { all } from 'axios';
import { useState, createContext, useContext, useEffect, useMemo } from 'react';
import { useUserContextValues } from './UserContext';
import { useAlertContextValues } from './AlertContext/AlertContext';

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
  const { setAlertMessage, setDisplayalert, setAlertColor } =
    useAlertContextValues();

  const totalMRP = useMemo(() => {
    const totalPrice = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
      0
    );
    return totalPrice;
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
      setDisplayalert(false);
      setAlertColor(true);
      await axios.post(
        `${import.meta.env.VITE_BACKEND_SERVER}/api/cart/`,
        { productId: productId },
        {
          headers: {
            Authorization: localStorage.getItem('auth-token'),
          },
        }
      );
      setAlertMessage('Product Added successfully');
      setDisplayalert(true);
      setClickedOnAddOrRemoveToCart(!clickedOnAddOrRemoveToCart);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItemFromCart = async (productId) => {
    try {
      setDisplayalert(false);
      setAlertColor(false);
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_SERVER}/api/cart/${productId}`,
        {
          headers: {
            Authorization: localStorage.getItem('auth-token'),
          },
        }
      );
      setAlertMessage('Product Deleted successfully');
      setDisplayalert(true);
      setClickedOnAddOrRemoveToCart(!clickedOnAddOrRemoveToCart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <cartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemFromCart, totalMRP }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { useCartValues };
export default CartContext;
