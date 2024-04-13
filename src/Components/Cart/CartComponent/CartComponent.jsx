import { useEffect, useState } from 'react';
import ProductCard from '../../Products/ProductsCard/ProductsCard';
import styles from './CartComponent.module.css';
import axios from 'axios';
import { useCartValues } from '../../../Context/CartContext';
import CartCard from '../CartCard/CartCard';

function CartComponent() {
  const { cartItems } = useCartValues();

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
            <p>19,300</p>
          </div>
          <div>
            <p>Discount on MRP</p>
            <p>-5000</p>
          </div>
          <div>
            <p>Platform Fee</p>
            <p>Free</p>
          </div>
          <div>
            <p>Shipping fee</p>
            <p>60</p>
          </div>
        </div>
        <div className={styles.cart_items_total_price}>
          <p>Total amount</p>
          <p>2,300</p>
        </div>
        <button className={styles.place_order_btn}>Place Order</button>
      </div>
    </div>
  );
}

export default CartComponent;
