import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles["nav-container"]}>
        <NavLink to="/" className={styles.anthony}>
          Anthony
        </NavLink>
        <ul className={styles["nav-links-container"]}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/tips">Tips</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
