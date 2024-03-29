import styles from "./CTA.module.scss";
import cta from "../assets/img/cta.jpg";

function CTA() {
  return (
    <div className={styles.container}>
      <div className={styles["cta-container"]}>
        <h2>Ready to get started?</h2>
        <button className={styles.button}> Sign me up!</button>
      </div>
      <img src={cta} className={styles.background} />
    </div>
  );
}

export default CTA;
