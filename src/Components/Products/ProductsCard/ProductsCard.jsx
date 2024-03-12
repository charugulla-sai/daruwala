import { useCartValues } from '../../../Context/CartContext';
import styles from './ProductsCard.module.css';

function ProductCard({
  productId,
  productImage,
  productTitle,
  productPrice,
  productSize,
  productType,
}) {
  const { addItemToCart } = useCartValues();

  return (
    <div className={styles.product_card}>
      <div className={styles.product_section}>
        <div className={styles.product_image_box}>
          <img src={productImage} alt="image" />
        </div>
        <div className={styles.text_box}>
          <h1 className={styles.product_title}>{productTitle}</h1>
          <p className={styles.product_type}>{productType}</p>
          <p className={styles.product_size}>{productSize}ML</p>
          <div className={styles.price_and_cart_box}>
            <p className={styles.product_price}>&#x20B9;{productPrice}</p>
            <button
              onClick={() => {
                addItemToCart(productId);
              }}
              className={styles.add_to_cart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
