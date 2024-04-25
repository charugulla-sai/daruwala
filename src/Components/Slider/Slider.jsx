import styles from './Slider.module.css';
import sliderImages from '../../Images/Slider/images.js';
import { useState, useEffect } from 'react';

function Slider() {
  const [currentSliderImageIndex, setCurrentSliderImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSliderImageIndex((prevValue) => {
        if (prevValue >= 4 && slideDirection === 1) {
          setSlideDirection(-1);
          return 4
        } else if (prevValue <= 1 && slideDirection === -1) {
          setSlideDirection(1);
          return 1
        }
        return prevValue + slideDirection;
      });
      console.log(currentSliderImageIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSliderImageIndex, slideDirection]);

  return (
    <div className={styles.slide_component}>
      <div className={styles.slide_section}>
        {sliderImages.map((image, index) => (
          <img
            key={index}
            style={{
              translate: `-${100 * currentSliderImageIndex}%`,
            }}
            src={image}
            alt="slider image"
          />
        ))}
      </div>
      <div
        className={styles.left_arrow}
        onClick={() => {
          setCurrentSliderImageIndex((prevValue) => {
            // Go to the first image and stop
            if (prevValue <= 1) {
              return 0;
            }
            return prevValue - 1;
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      {currentSliderImageIndex <= 4 && (
        <div
          className={styles.right_arrow}
          onClick={() => {
            setCurrentSliderImageIndex((prevValue) => {
              // Go to the last image and stop
              if (prevValue >= 4) {
                return 5;
              }
              return prevValue + 1;
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Slider;
