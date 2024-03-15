import styles from "./Hero.module.scss";
import doctor from "../../assets/img/doctor.jpg";
import { RiCheckFill } from "@remixicon/react";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles["hero-container"]}>
        <p className={styles.anthony}>Anthony</p>
        <div className={styles["hero-contents"]}>
          <div className={styles["hero-text"]}>
            <div className={styles["hero-text-contents"]}>
              <p className={styles["text-header"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <p className={styles["text-subheader"]}>
                Eeserunt similique iure voluptatem consequuntur nemo obcaecati,
                ut dolorum assumenda. Quibusdam!
              </p>
              <ul className={styles["list-container"]}>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 1</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 1</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 1</p>
                </li>
              </ul>
              <button className={styles.button}>Click</button>
            </div>
          </div>
          <div className={styles["hero-picture"]}>
            <img src={doctor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
