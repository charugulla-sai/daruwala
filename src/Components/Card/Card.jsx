import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ imageUrl, imageTitle }) {
  return (
    <Link to="new_arrival" className={styles.card}>
      <div className={styles.image_box}>
        <img
          className={styles.card_image}
          src={imageUrl}
          alt="category image"
        />
      </div>
      <div className={styles.card_title}>
        <p>{imageTitle}</p>
      </div>
    </Link>
  );
}

export default Card;
