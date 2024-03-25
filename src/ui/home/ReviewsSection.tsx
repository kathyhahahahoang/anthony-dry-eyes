import Carousel from "../../components/Carousel";
import styles from "./ReviewsSection.module.scss";
import ocean from "../../assets/img/ocean.jpg";

function ReviewsSection() {
  return (
    <section className={styles.container}>
      <img src={ocean} className={styles.background} />
      <div className={styles.overlay} />
      <h1 className={styles.header}>See what our customers love about us!</h1>
      <div>
        <Carousel />
      </div>
    </section>
  );
}

export default ReviewsSection;
