import styles from "./HowSection.module.scss";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";

function HowSection() {
  return (
    <section className={styles.container}>
      <p className={styles["section-header"]}>How does it work?</p>
      <div className={styles["how-container"]}>
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work1} />
          <p className={styles.title}>1. Meet with Anthony</p>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          </p>
        </div>
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work2} />
          <p className={styles.title}>2. Discuss details</p>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, perferendis. Adipisci nulla incidunt nihil nam a
          </p>
        </div>{" "}
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work3} />
          <p className={styles.title}>3. Come in for a consultation</p>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, perferendis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowSection;
