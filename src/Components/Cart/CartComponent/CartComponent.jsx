import { useEffect, useState } from 'react';
import ProductCard from '../../Products/ProductsCard/ProductsCard';
import styles from './CartComponent.module.css';
import axios from 'axios';
import { useCartValues } from '../../../Context/CartContext';

function CartComponent() {
  const { cartItems } = useCartValues();

  return (
    <div className={styles.cart_component}>
      <div className={styles.cart_section}>
        {cartItems.map((cartProduct) => (
          <ProductCard
            key={cartProduct.image}
            productId={cartProduct._id}
            productImage={cartProduct.image}
            productTitle={cartProduct.title}
            productPrice={cartProduct.price}
            productSize={cartProduct.size}
            productType={cartProduct.type}
            productQuantity={cartProduct.quantity}
            inCartPage={true}
          />
        ))}
      </div>
    </div>
  );
}

export default CartComponent;
