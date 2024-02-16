import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer_component}>
      <div className={styles.footer_section}>
        <div className={styles.main_footer_section}>
          <div className={styles.about_section}>
            <h3>About Us</h3>
            <p>
              Thousands of brands from across the globe with their unique
              experience and flavors, all under one name - Daruwala. Founded in
              the year 1970, we are now the leading and one of the foremost
              family-owned brands in the country that provides alcohol delivery.
            </p>
          </div>
          <div className={styles.follow_us_section}>
            <h3>Follow Us</h3>
            <p>Follow here only....!</p>
          </div>
        </div>
        <div className={styles.service_section}>
          <h3>Daruwala</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Bulk Order</li>
            <li>Store Locator</li>
            <li>Important Links</li>
          </ul>
        </div>
        <div className={styles.useful_links_section}>
          <h3>Useful Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Terms of use</li>
            <li>Return policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright_component}>

      <div className={styles.copyright_section}>
        <p className={styles.copyright}>
          &copy;DARUWALA, 2024. ALL RIGHTS RESERVED.
        </p>
        <p className={styles.developed_by}>DEVELOPED BY <span>CHARUGULLA SAI</span></p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
