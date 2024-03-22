import styles from "./CTA.module.scss";
import ocean from "../assets/img/ocean.jpg";

function CTA() {
  return (
    <div className={styles.container}>
      <img src={ocean} className={styles.background} />
      <div className={styles["cta-container"]}>
        <h2>Ready to get started?</h2>
        <button className={styles.button}> Sign me up!</button>
      </div>
    </div>
  );
}

export default CTA;
