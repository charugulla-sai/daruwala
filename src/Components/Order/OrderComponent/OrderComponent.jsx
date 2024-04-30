import { useEffect, useState } from 'react';
import styles from './OrderComponent.module.css';
import axios from 'axios';
import OrderCard from '../OrderCard/OrderCard';

export default function OrderComponent() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    async function getAllOrderItems() {
      const allOrderItems = await axios.get(
        `${import.meta.env.VITE_BACKEND_SERVER}/order/`,
        {
          headers: {
            Authorization: localStorage.getItem('auth-token'),
          },
        }
      );
      // console.log(allOrderItems.data);
      setOrderItems([...allOrderItems.data]);
    }
    getAllOrderItems();
  }, []);

  return (
    <div className={styles.order_container}>
      <div className={styles.orders_section}>
        {orderItems.map((ordItem) => (
          <OrderCard
            orderId={ordItem.orderId}
            paymentId={ordItem.paymentId}
            products={ordItem.products}
            orderAmount={ordItem.orderAmount}
            orderDate={ordItem.orderDate}
          />
        ))}
      </div>
    </div>
  );
}
