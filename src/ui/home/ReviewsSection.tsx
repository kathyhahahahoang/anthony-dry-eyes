import Carousel from "../../components/Carousel";
import styles from "./ReviewsSection.module.scss";
import patient from "../../assets/img/patient.jpg";

function ReviewsSection() {
  return (
    <section className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={patient} className={styles.picture} />
      </div>
      <div className={styles["reviews-container"]}>
        <h1 className={styles.header}>Testimonials</h1>
        <Carousel />
      </div>
    </section>
  );
}

export default ReviewsSection;
