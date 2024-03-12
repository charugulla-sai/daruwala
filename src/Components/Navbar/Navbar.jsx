import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCartValues } from '../../Context/CartContext';

function Navbar() {
  const { cartItems } = useCartValues();

  return (
    <div className={styles.nav_section}>
      <h3>
        <Link className="router_link" to="/signin">
          Signin
        </Link>
      </h3>
      <h3>
        Cart <span>{cartItems.length}</span>
      </h3>
    </div>
  );
}

export default Navbar;
