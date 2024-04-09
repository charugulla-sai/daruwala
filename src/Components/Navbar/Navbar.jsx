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
      {userLoggedIn ? (
        <>
          <h3>
            <Link className={styles.router_link} to="/cart">
              Cart <span>{cartItems.length}</span>
            </Link>
          </h3>
          <h3
            className="router_link"
            onClick={() => {
              localStorage.removeItem('auth-token');
              setUserLoggedIn(localStorage.getItem('auth-token'));
            }}
          >
            Logout
          </h3>
        </>
      ) : (
        <h3>
          <Link
            className="router_link"
            to={pathTracker == 'signin' ? 'signup' : 'signin'}
          >
            {pathTracker == 'signin' ? 'SignUp' : 'SignIn'}
          </Link>
        </h3>
      )}
    </div>
  );
}

export default Navbar;
