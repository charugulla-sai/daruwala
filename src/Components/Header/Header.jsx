import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header_component}>
      <div className={styles.header_section}>
        <h1>
          <Link className={styles.router_link} to='/'>
            Daruwala
          </Link>
        </h1>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
