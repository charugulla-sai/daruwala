import { useCartValues } from '../../../Context/CartContext';
import { useUserContextValues } from '../../../Context/UserContext';
import styles from './ProductsCard.module.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({
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
    <div className={styles.product_card}>
      <div className={styles.product_section}>
        {/* {deleteItemFromCart && <p className={styles.delete_button}>X</p>} */}
        <div className={styles.product_image_box}>
          <img src={productImage} alt="image" loading='lazy' />
        </div>
        <div className={styles.text_box}>
          <h1 className={styles.product_title}>{productTitle}</h1>
          <p className={styles.product_type}>{productType}</p>
          <p className={styles.product_size}>{productSize}ML</p>
          {productQuantity && <p>qty:{productQuantity}</p>}
          <div className={styles.price_and_cart_box}>
            <p className={styles.product_price}>&#x20B9;{productPrice}</p>
            
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
              {inCartPage == true ? 'Remove' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
