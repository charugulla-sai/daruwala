import wineImage from '../../Images/MoreServices/wineImage.jpg';
import wineTypes from '../../Images/MoreServices/winetypes.jpg';
import whiskey from '../../Images/MoreServices/Whiskey.jpg';
import bartender from '../../Images/MoreServices/bartender.jpg';
import Card from '../Card/Card.jsx';
import styles from './MoreServices.module.css';

const images = [wineImage, wineTypes, whiskey, bartender];

function MoreServices() {
  return (
    <div className={styles.more_services_component}>
      <div className={styles.more_services_heading}>
        <h2>MORE SERVICES</h2>
      </div>
      <div className={styles.more_services_section}>
        {images.map((imageUrl) => (
          <Card key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}

// <div className={styles.more_services_container}>
// <div className={styles.more_services_section}>

//   {images.map((image) => (
//     <Card key={image} imageUrl={image} />
//   ))}
// </div>
// </div>
export default MoreServices;
