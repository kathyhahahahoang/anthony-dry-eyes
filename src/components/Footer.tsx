import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Anthony</div>
      <div className={styles["content-container"]}>
        <p>Contact</p>
        <p>Products</p>
        <p>Blog</p>
      </div>
    </div>
  );
}

export default Footer;
