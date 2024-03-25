import styles from "./How.module.scss";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";

function How() {
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <h1>
          We here at ____ have also suffered from dry eyes. That's why we've
          made it our mission to help you overcome it, just as we have.
        </h1>
        <h2>We've got you covered in 3 easy steps</h2>
      </div>
      <div className={styles["how-container"]}>
        <div className={styles["steps-container"]}>
          <img src={work1} className={styles.picture} />
          <div className={styles.step}>
            <h1>1. Meet with Anthony</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad,
              magni officia assumenda autem ducimus. Nobis amet voluptas sunt,
              velit aperiam ullam distinctio. Temporibus laudantium velit sequi
              qui magni iure.
            </p>
          </div>
        </div>
        <div className={styles["steps-container"]}>
          <img src={work2} className={styles.picture} />
          <div className={styles.step}>
            <h1>2. Discuss details</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad,
              magni officia assumenda autem ducimus. Nobis amet voluptas sunt,
              velit aperiam ullam distinctio. Temporibus laudantium velit sequi
              qui magni iure.
            </p>
          </div>
        </div>
        <div className={styles["steps-container"]}>
          <img src={work3} className={styles.picture} />
          <div className={styles.step}>
            <h1>3. Come in for a consultation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad,
              magni officia assumenda autem ducimus. Nobis amet voluptas sunt,
              velit aperiam ullam distinctio. Temporibus laudantium velit sequi
              qui magni iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
