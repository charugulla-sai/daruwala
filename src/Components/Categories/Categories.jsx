import styles from './Categories.module.css';
import categories from '../../Images/Categories/images.js';
import Card from '../Card/Card.jsx';

function Categories() {
  return (
    <div className={styles.categories_component}>
      <div className={styles.categories_heading}>
        <h2>CATEGORIES</h2>
      </div>
      <div className={styles.categories_section}>
        {categories.map((imageData) => (
          <Card key={imageData.image} imageUrl={imageData.image} imageTitle={imageData.title}/>
        ))}
      </div>
    </div>
  );
}

export default Categories;
