import styles from './Card.module.css';

function Card({ imageUrl, imageTitle }) {
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
        <p>{imageTitle}</p>
      </div>
    </div>
  );
}

export default Card;
