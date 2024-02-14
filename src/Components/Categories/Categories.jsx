import styles from './Categories.module.css';
import categoryImages from '../../Images/Categories/images.js';
import Card from '../Card/Card.jsx';

function Categories() {
  return (
    <div className={styles.categories_component}>
      <div className={styles.categories_heading}>
        <h2>CATEGORIES</h2>
      </div>
      <div className={styles.categories_section}>
        {categoryImages.map((imageUrl) => (
          <Card key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
