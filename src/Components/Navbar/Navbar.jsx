import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCartValues } from '../../Context/CartContext';
import { useUserContextValues } from '../../Context/UserContext';

function Navbar() {
  const { cartItems } = useCartValues();
  const { userLoggedIn, setUserLoggedIn } = useUserContextValues();
  const pathTracker = useLocation().pathname.slice(1);

  return (
    <div className={styles.nav_section}>
      <h3>
        <Link
          className="router_link"
          to={pathTracker == 'signin' ? 'signup' : 'signin'}
        >
          {pathTracker == 'signin' ? 'SignUp' : 'SignIn'}
        </Link>
      </h3>
      {userLoggedIn && (
        <h3>
          <Link className="router_link" to="/cart">
            Cart <span>{cartItems.length}</span>
          </Link>
          <p
            className="router_link"
            onClick={() => {
              setUserLoggedIn(false);
            }}
          >
            Logout
          </p>
        </h3>
      )}
    </div>
  );
}

export default Navbar;
