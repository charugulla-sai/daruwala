import styles from './Header.module.css';
import Navbar from './Navbar/Navbar';

function Header() {
  return (
    <div className={styles.header_component}>
      <div className={styles.header_section}>
        <h1>Daruwala</h1>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
