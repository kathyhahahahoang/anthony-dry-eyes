import styles from "./BlogContainer.module.scss";
import felix from "../../assets/img/felix.jpg";
import felix2 from "../../assets/img/felix2.jpg";
import felix3 from "../../assets/img/felix3.jpg";
import felix4 from "../../assets/img/felix4.jpg";
import felix5 from "../../assets/img/felix5.jpg";
import felix6 from "../../assets/img/felix6.jpg";

function BlogContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["new-container"]}>
        <div className={styles["new-container-text"]}>
          <h2>Are dry eyes genetic?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            magnam corporis similique nulla.
          </p>
          <p>March 20, 2024</p>
        </div>
        <div className={styles["new-container-picture"]}>
          <img src={felix5} />
        </div>
      </div>
      <div className={styles["articles-container"]}>
        <div className={styles.article}>
          <img src={felix4} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>How you can improve dry eyes</h3>
        </div>
        <div className={styles.article}>
          <img src={felix2} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Signs to look out for</h3>
        </div>
        <div className={styles.article}>
          <img src={felix3} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Foods that can help improve your dry eyes</h3>
        </div>
        <div className={styles.article}>
          <img src={felix6} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Should you seek medical help?</h3>
        </div>
        <div className={styles.article}>
          <img src={felix} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Tips for preventing your dry eyes from worsening</h3>
        </div>
        <div className={styles.article}>
          <img src={felix4} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>How you can improve dry eyes</h3>
        </div>
        <div className={styles.article}>
          <img src={felix2} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Signs to look out for</h3>
        </div>
        <div className={styles.article}>
          <img src={felix5} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Foods that can help improve your dry eyes</h3>
        </div>
        <div className={styles.article}>
          <img src={felix6} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Should you seek medical help?</h3>
        </div>
        <div className={styles.article}>
          <img src={felix} className={styles.picture} />
          <p className={styles.date}>March 9, 2024</p>
          <h3>Tips for preventing your dry eyes from worsening</h3>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;
