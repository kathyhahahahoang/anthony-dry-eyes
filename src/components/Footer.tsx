import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <nav className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        Anthony
      </NavLink>
      <ul className={styles["content-container"]}>
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
  );
}

export default Footer;
