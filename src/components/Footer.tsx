import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <nav className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        Anthony
      </NavLink>
      <div className={styles["content-container"]}>
        <ul className={styles["links-container"]}>
          <li>
            <NavLink to="/about">
              <p className={styles["footer-title"]}>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <p className={styles["footer-title"]}>Blog</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tips">
              <p className={styles["footer-title"]}>Tips</p>
            </NavLink>
          </li>
          <li>
            <p className={styles["footer-title"]}>Hours</p>
            <div className={styles["info-details"]}>
              <p>Monday - Friday: 9 - 5pm</p>
              <p>Weekends: closed</p>
            </div>
          </li>
          <li>
            <NavLink to="/contact">
              <p className={styles["footer-title"]}>Contact</p>
            </NavLink>
            <div className={styles["info-details"]}>
              <p>Practice Name</p>
              <p>1234 Address St.</p>
              <p>Fakesville McFakesTown USA</p>
              <p className={styles.telephone}>+1 234 567 8910</p>
              <p className={styles.telephone}>email@email.com</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
