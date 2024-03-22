import styles from "./CauseSection.module.scss";
import shore from "../../assets/img/shore.jpg";
import age from "../../assets/img/age.jpg";
import blink from "../../assets/img/blink.jpg";
import computer from "../../assets/img/computer.jpg";
import hydration from "../../assets/img/hydration.jpg";
import environment from "../../assets/img/environment.jpg";
import disease from "../../assets/img/disease.jpg";
import contacts from "../../assets/img/contacts.jpg";
import medication from "../../assets/img/medication.jpg";
import surgery from "../../assets/img/surgery.jpg";

function CauseSection() {
  return (
    <section className={styles.container}>
      <img src={shore} className={styles.shore} />
      <h1 className={styles.header}>Common causes of dry eyes include</h1>
      <div className={styles["cause-container"]}>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={age} />
          <p className={styles.text}>Age & gender</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={blink} />
          <p className={styles.text}>Poor blinking</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={computer} />
          <p className={styles.text}>Computer/Device usage</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={hydration} />
          <p className={styles.text}>Insufficient hydration</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={environment} />
          <p className={styles.text}>Climate & environment</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={disease} />
          <p className={styles.text}>Systemic diseases</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={contacts} />
          <p className={styles.text}>Contact lens wear</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={medication} />
          <p className={styles.text}>Medications</p>
        </div>
        <div className={styles["cause-item"]}>
          <img className={styles.picture} src={surgery} />
          <p className={styles.text}>Eye surgery</p>
        </div>
      </div>
    </section>
  );
}

export default CauseSection;
