import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {
  return (
    <div className={styles.header_component}>
      <div className={styles.header_section}>
        <h1 className="min-w-[100px] font-extrabold">
          <Link className={styles.router_link} to="/">
            Daruwala
          </Link>
        </h1>
        <div className={styles.header_search_component}>
          <Search />
        </div>
        <div className="  max-w-[400px]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
