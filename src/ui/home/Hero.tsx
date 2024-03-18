import styles from "./Hero.module.scss";
import felix from "../../assets/img/felix.jpg";
import { RiCheckFill } from "@remixicon/react";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-contents"]}>
          <div className={styles["hero-text"]}>
            <div className={styles["hero-text-contents"]}>
              <h1>Are dry eyes affecting your quality of life?</h1>
              <h3>We can help you find solutions to improve your eye health</h3>
              <ul className={styles["list-container"]}>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 1</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 2</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 3</p>
                </li>
              </ul>
              <button className={styles.button}>Click</button>
            </div>
          </div>
          <div className={styles["hero-picture"]}>
            <img src={felix} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
