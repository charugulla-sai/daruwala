import { useEffect, useState } from 'react';
import ProductCard from '../../Products/ProductsCard/ProductsCard';
import styles from './CartComponent.module.css';
import axios from 'axios';
import { useCartValues } from '../../../Context/CartContext';
import CartCard from '../CartCard/CartCard';

function CartComponent() {
  const { cartItems, totalMRP } = useCartValues();
  const [discount, setDiscount] = useState(5000);
  const [shippingFee, setShippingFee] = useState(60);
  const amount = totalMRP - discount + shippingFee;

  async function handleOrderClick() {
    const orderApiResponse = await axios.post(
      `${import.meta.env.VITE_BACKEND_SERVER}/order`,
      {
        amount: amount * 100,
        currency: 'INR',
        receipt: `${new Date().getTime()}`,
      }
    );
    const orderId = orderApiResponse.data.id;
    const options = {
      key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`, // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Daruwalas',
      description: 'Test Transaction',
      image:
        'https://png.pngtree.com/png-clipart/20200727/original/pngtree-wine-logo-design-vector-png-image_5286637.jpg',
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert('Payment successful');
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
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Payment Failed...Please try again.');
      console.error(response.error.description);
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    await rzp1.open();
  }

  return (
    <div className={styles.cart_component}>
      <div className={styles.cart_section}>
        {cartItems.map((cartProduct) => (
          <CartCard
            key={cartProduct.image}
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
      <div className={styles.order_box}>
        <div className={styles.order_text_box}>
          <div>
            <p>Total MRP</p>
            <p>{totalMRP}</p>
          </div>
          <div>
            <p>Discount on MRP</p>
            <p>-{discount}</p>
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
            handleOrderClick();
            e.preventDefault();
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartComponent;
