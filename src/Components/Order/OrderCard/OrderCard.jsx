import CartCard from '../../Cart/CartCard/CartCard';
import styles from './OrderCard.module.css';

export default function OrderCard({ orderId, paymentId, products,orderAmount,orderDate }) {
  return (
    <div className={styles.order_card}>
      <div className={styles.order_card_section}>
        <div className={styles.order_details}>
          <div>
            <p className={styles.order_date}>Order Placed: {orderDate}</p>
            <p className={styles.amount_paid}>Total amount paid: {orderAmount}</p>
          </div>
          <div className={styles.id_box}>
            <p className={styles.order_id}>Order Id: {orderId}</p>
            <p className={styles.payment_id}>Payment Id:{paymentId}</p>
          </div>
        </div>
        <div className={styles.products_container}>
          {products.map((product) => (
            <CartCard
              key={product.image}
              productId={product._id}
              productImage={product.imageUrl}
              productTitle={product.title}
              productPrice={product.price}
              productSize={product.size}
              productType={product.type}
              productQuantity={product.quantity}
              inCartPage={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
