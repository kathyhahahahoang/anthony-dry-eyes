import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles["nav-container"]}>
        <p className={styles.anthony}>Anthony</p>
        <ul className={styles["nav-links-container"]}>
          <li>Blog</li>
          <li>Products</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
