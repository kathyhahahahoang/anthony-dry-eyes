import styles from "./ConsultationSection.module.scss";
import work4 from "../../assets/img/work4.jpg";
import { RiArrowRightLine } from "@remixicon/react";

function ConsultationSection() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={work4} />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-box"]}>
          <h1 className={styles.header}>Not sure if you have dry eyes?</h1>
          <h3 className={styles.subheader}>
            Here is a list of symptoms commonly associated with dry eyes:
          </h3>
          <ul className={styles["list-container"]}>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Achy</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Irritation</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Burning</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Dryness</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Grittiness</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Stinging</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Itchiness</p>
            </li>
            <li className={styles["list-item"]}>
              <RiArrowRightLine />
              <p>Feeling of something in your eye</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConsultationSection;
