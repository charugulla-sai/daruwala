import styles from './Slider.module.css';
import sliderImages from '../../Images/Slider/images.js';
import { useState, useEffect } from 'react';

function Slider() {
  const [currentSliderImageIndex, setCurrentSliderImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSliderImageIndex((prevValue) => {
        if (prevValue == 4) {
          setSlideDirection(-1);
        } else if (prevValue == 1) {
          setSlideDirection(1);
        }
        return currentSliderImageIndex + slideDirection;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSliderImageIndex]);

  return (
    <div className={styles.slide_component}>
      <div className={styles.slide_section}>
        {sliderImages.map((image, index) => (
          <img
            key={index}
            style={{
              translate: `-${
                100 * currentSliderImageIndex
              }%`,
            }}
            src={image}
            alt="slider image"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
