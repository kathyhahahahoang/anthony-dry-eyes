import styles from "./BlogSection.module.scss";
import felix4 from "../../assets/img/felix4.jpg";
import felix2 from "../../assets/img/felix2.jpg";
import felix3 from "../../assets/img/felix3.jpg";
import felix5 from "../../assets/img/felix5.jpg";

function BlogSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Newest articles from our blog</h1>
      <div className={styles["articles-container"]}>
        <div className={styles.article}>
          <img src={felix4} className={styles.picture} />
          <div className={styles["text-container"]}>
            <p className={styles.date}>March 9, 2024</p>
            <h3>How you can improve dry eyes</h3>
          </div>
        </div>
        <div className={styles.article}>
          <img src={felix2} className={styles.picture} />
          <div className={styles["text-container"]}>
            <p className={styles.date}>March 9, 2024</p>
            <h3>Signs to look out for</h3>
          </div>
        </div>
        <div className={styles.article}>
          <img src={felix3} className={styles.picture} />
          <div className={styles["text-container"]}>
            <p className={styles.date}>March 9, 2024</p>
            <h3>Foods that can help improve your dry eyes</h3>
          </div>
        </div>
        <div className={styles.article}>
          <img src={felix5} className={styles.picture} />
          <div className={styles["text-container"]}>
            <p className={styles.date}>March 9, 2024</p>
            <h3>Are dry eyes genetic?</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
