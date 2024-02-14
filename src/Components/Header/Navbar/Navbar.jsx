import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.nav_section}>
      <h3>Signin</h3>
      <h3>Cart</h3>
    </div>
  );
}

export default Navbar;
