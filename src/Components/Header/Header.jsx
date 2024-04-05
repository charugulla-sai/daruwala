import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useUserContextValues } from '../../Context/UserContext';

function Header() {
  const { userLoggedIn } = useUserContextValues();
  return (
    <div className={styles.header_component}>
      <div className={styles.header_section}>
        <h1>
          <Link className="router_link" to={userLoggedIn ? '/' : '/signin'}>
            Daruwala
          </Link>
        </h1>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
