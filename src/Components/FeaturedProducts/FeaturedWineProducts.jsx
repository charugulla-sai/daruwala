import styles from './FeaturedProducts.module.css';
import wineImage from '../../Images/Featured/wine.jpg';

function FeaturedWineProducts() {
  return (
    <div
      className={styles.featured_products_component}
      style={{
        backgroundImage: `linear-gradient(to left, #000000 40%, #00000000),url(${wineImage})`,
      }}
    >
      <div className={styles.featured_products_section}>
        <div className={styles.text_box}>
          <div className={styles.heading}>
            <h2>Love for the wines</h2>
            <p>Experience the taste of the fruit</p>
          </div>
          <div className={styles.types}>
            <h4>Wines by region</h4>
            <h4>Wines by country</h4>
            <h4>Wines by grapes</h4>
            <h4>Wines by style</h4>
            <h4>Wines by type</h4>
            <h4>Wines by brand</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWineProducts;
