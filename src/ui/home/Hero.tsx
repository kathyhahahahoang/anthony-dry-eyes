import { NavLink } from "react-router-dom";
import styles from "./Hero.module.scss";
import desert from "../../assets/img/desert.jpg";

function Hero() {
  return (
    <div className={styles.blur}>
      <div className={styles.container}>
        <img src={desert} className={styles.hero} />
        <div className={styles.box}>
          <h1 className={styles.title}>Is that better?</h1>
          <p className={styles.description}>
            We know that dry eyes can negatively affect your quality of life.
            That's why we're here to help
          </p>
          <NavLink to="/blog" className={styles.button}>
            Click
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
