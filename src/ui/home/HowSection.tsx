import styles from "./HowSection.module.scss";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";

function HowSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles["section-header"]}>How does it work?</h1>
      <div className={styles["how-container"]}>
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work1} />
          <h4 className={styles.title}>1. Meet with Anthony</h4>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          </p>
        </div>
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work2} />
          <h4 className={styles.title}>2. Discuss details</h4>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, perferendis. Adipisci nulla incidunt nihil nam a
          </p>
        </div>{" "}
        <div className={styles["how-card"]}>
          <img className={styles.picture} src={work3} />
          <h4 className={styles.title}>3. Come in for a consultation</h4>
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
