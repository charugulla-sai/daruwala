import styles from './Explore.module.css';
import exploreImages from '../../Images/Explore/images.js';

export default function Explore() {
  return (
    <div className={styles.explore_component}>
      <div className={styles.explore_title}>
        <h2>EXPLORE</h2>
      </div>
      <div className={styles.explore_section}>
        {exploreImages.map((image) => (
          <div className={styles.image_box}>
            <img src={image} alt="explore image" />
          </div>
        ))}
      </div>
    </div>
  );
}
