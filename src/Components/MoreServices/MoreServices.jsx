import wineImage from '../../Images/MoreServices/wineImage.jpg';
import wineTypes from '../../Images/MoreServices/winetypes.jpg';
import whiskey from '../../Images/MoreServices/Whiskey.jpg';
import bartender from '../../Images/MoreServices/bartender.jpg';
import Card from '../Card/Card.jsx';
import styles from './MoreServices.module.css';

const moreServicesData = [
  { title: 'Wine FAQs', image: wineImage },
  { title: 'Know Your Wine', image: wineTypes },
  { title: 'Whiskypedia', image: whiskey },
  { title: 'Book your bar tender', image: bartender },
];

function MoreServices() {
  return (
    <div className={styles.more_services_component}>
      <div className={styles.more_services_heading}>
        <h2>MORE SERVICES</h2>
      </div>
      <div className={styles.more_services_section}>
        {moreServicesData.map((imageData) => (
          <Card
            key={imageData.image}
            imageUrl={imageData.image}
            imageTitle={imageData.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MoreServices;
