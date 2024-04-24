import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import styles from './AlertContext.module.css';

const alertContext = createContext();

export function useAlertContextValues() {
  return useContext(alertContext);
}

function AlertContext({ children }) {
  const [alertMessage, setAlertMessage] = useState('');
  const [displayAlert, setDisplayalert] = useState(false);
  const [alertColor, setAlertColor] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayalert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [displayAlert]);

  return (
    <alertContext.Provider
      value={{ setAlertMessage, setDisplayalert, setAlertColor }}
    >
      <div
        className={`${styles.alert} ${displayAlert ? styles.show : ''}`}
        style={{ backgroundColor: alertColor ? 'green' : '#de1515c7' }}
      >
        <p>{alertMessage}</p>
        <span
          className={styles.cancel_alert}
          onClick={() => {
            setDisplayalert(false);
          }}
        >
          ✖
        </span>
      </div>
      {children}
    </alertContext.Provider>
  );
}

export default AlertContext;
