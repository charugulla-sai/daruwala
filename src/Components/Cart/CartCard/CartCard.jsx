import { useCartValues } from '../../../Context/CartContext';
import { useUserContextValues } from '../../../Context/UserContext';
import styles from './CartCard.module.css';
import { useNavigate } from 'react-router-dom';

function CartCard({
  productId,
  productImage,
  productTitle,
  productPrice,
  productSize,
  productType,
  productQuantity,
  inCartPage,
}) {
  const { addItemToCart, deleteItemFromCart } = useCartValues();
  const { verify } = useUserContextValues();

  return (
    <div className={styles.cart_card}>
      <div className={styles.cart_section}>
        {/* {deleteItemFromCart && <p className={styles.delete_button}>X</p>} */}
        <div className={styles.cart_image_box}>
          <img src={productImage} alt="image" />
        </div>
        <div className={styles.cart_text_box}>
          <h1 className={styles.cart_product_title}>{productTitle}</h1>
          <p className={styles.cart_product_type}>{productType}</p>
          <p className={styles.cart_product_size}>{productSize}ML</p>
          {productQuantity && <p>qty:{productQuantity}</p>}
          <div className={styles.price_and_delete_box}>
            <p className={styles.cart_product_price}>&#x20B9;{productPrice}</p>

            <button
              onClick={() => {
                if (verify()) {
                  if (inCartPage) {
                    deleteItemFromCart(productId);
                  } else {
                    addItemToCart(productId);
                  }
                }
              }}
              className={styles.add_to_cart}
            >
              {inCartPage == true ? 'Remove' : 'Add to order again'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
