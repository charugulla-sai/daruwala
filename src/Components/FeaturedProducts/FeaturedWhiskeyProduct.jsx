import styles from './FeaturedProducts.module.css';
import wineImage from '../../Images/Featured/wine.jpg';
import whiskeyBarrelsImage from '../../Images/Featured/whiskeybarrel.jpg';

function FeaturedWhiskeyProducts() {
  return (
    <div
      className={styles.featured_products_component}
      style={{
        marginBottom: '7.2rem',
        backgroundImage: `url(${whiskeyBarrelsImage})`,
      }}
    >
      <div className={styles.featured_products_section} style={{}}>
        <div className={styles.text_box}>
          <div className={styles.heading}>
            <h2>World of Whiskey</h2>
            <p>Elevate your palate with whiskey</p>
          </div>
          <div className={styles.types}>
            <h4>Indian Whiskey</h4>
            <h4>Single Malts</h4>
            <h4>International</h4>
            <h4>Scotch</h4>
            <h4>Whiskey</h4>
            <h4>Bourbon</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWhiskeyProducts;
