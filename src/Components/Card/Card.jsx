import styles from './Card.module.css';

function Card({ imageUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.image_box}>
        <img
          className={styles.card_image}
          src={imageUrl}
          alt="category image"
        />
      </div>
      <div className={styles.card_title}>
        <p>New Arrival</p>
      </div>
    </div>
  );
}

export default Card;
