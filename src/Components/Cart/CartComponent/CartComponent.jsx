import { useEffect, useRef, useState } from 'react';
import ProductCard from '../../Products/ProductsCard/ProductsCard';
import styles from './CartComponent.module.css';
import axios from 'axios';
import { useCartValues } from '../../../Context/CartContext';
import CartCard from '../CartCard/CartCard';
import LoadingBar from 'react-top-loading-bar';

function CartComponent() {
  const { cartItems, totalMRP } = useCartValues();
  const [discount, setDiscount] = useState(totalMRP * 0.1);
  const [shippingFee, setShippingFee] = useState(60);
  const [clickOnOrder, setClickOnOrder] = useState(false);
  const topLoadRef = useRef(null);
  const amount = totalMRP - discount + shippingFee;

  useEffect(() => {
    if (clickOnOrder) {
      topLoadRef.current.staticStart();
      handleOrderClick();
    }
  }, [clickOnOrder]);

  async function handleOrderClick() {
    const orderApiResponse = await axios.post(
      `${import.meta.env.VITE_BACKEND_SERVER}/order`,
      {
        amount: amount * 100,
        currency: 'INR',
        receipt: `${new Date().getTime()}`,
      },
      {
        headers: {
          Authorization: localStorage.getItem('auth-token'),
        },
      }
    );
    const orderId = orderApiResponse.data.id;
    const options = {
      key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}qO`, // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Daruwalas',
      description: 'Test Transaction',
      image:
        'https://png.pngtree.com/png-clipart/20200727/original/pngtree-wine-logo-design-vector-png-image_5286637.jpg',
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        try {
          const validateResponse = await axios.post(
            `${import.meta.env.VITE_BACKEND_SERVER}/order/validate`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderAmount: amount,
            },
            {
              headers: {
                Authorization: localStorage.getItem('auth-token'),
              },
            }
          );
          alert('Pyment successful..');
        } catch (err) {
          console.log(err);
        }
        setClickOnOrder(false);
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '8919389188',
      },
      notes: {
        address: 'Hi-Tech city, Hyderabad',
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: function () {
          setClickOnOrder(false);
          console.log('Checkout form closed');
        },
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Payment Failed...Please try again.');
      console.error(response.error.description);
      setClickOnOrder(false);
    });
    await rzp1.open();
    topLoadRef.current.complete();
  }

  return (
    <>
      <LoadingBar color="#fa0404" height={5} ref={topLoadRef} />
      <div className={styles.cart_component}>
        {clickOnOrder && <div className={styles.cart_mask_component}></div>}
        <div className={styles.cart_section}>
          {cartItems.map((cartProduct,index) => (
            <CartCard
              key={index}
              productId={cartProduct._id}
              productImage={cartProduct.imageUrl}
              productTitle={cartProduct.title}
              productPrice={cartProduct.price}
              productSize={cartProduct.size}
              productType={cartProduct.type}
              productQuantity={cartProduct.quantity}
              inCartPage={true}
            />
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.order_box}>
            <div className={styles.order_text_box}>
              <div>
                <p>Total MRP</p>
                <p>{totalMRP}</p>
              </div>
              <div>
                <p>10% Discount</p>
                <p>-{totalMRP * 0.1}</p>
              </div>
              <div>
                <p>Platform Fee</p>
                <p>Free</p>
              </div>
              <div>
                <p>Shipping fee</p>
                <p>{shippingFee}</p>
              </div>
            </div>
            <div className={styles.cart_items_total_price}>
              <p>Total amount</p>
              <p>{amount}</p>
            </div>
            <button
              className={styles.place_order_btn}
              onClick={(e) => {
                setClickOnOrder(true);
                e.preventDefault();
              }}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartComponent;
