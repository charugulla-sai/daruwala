import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav_section}>
      <h3>
        <Link className={styles.router_link} to="/signin">
          Signin
        </Link>
      </h3>
      <h3>Cart</h3>
    </div>
  );
}

export default Navbar;
