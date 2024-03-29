import styles from "./Carousel.module.scss";
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

const reviews = [
  { name: "Jungkook" },
  { name: "Hanbin" },
  { name: "Dongwoon" },
  { name: "Keanu" },
  { name: "Tablo" },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = reviews.length - 1;

  function prevSlide() {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  }

  function nextSlide() {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  }
  return (
    <div className={styles.container}>
      <button className={styles["button-left"]} onClick={prevSlide}>
        <RiArrowLeftLine className={styles.button} />
      </button>
      <button className={styles["button-right"]} onClick={nextSlide}>
        <RiArrowRightLine className={styles.button} />
      </button>
      <div className={styles.dots}>
        {reviews.map((_, i) => {
          return (
            <span
              key={i}
              className={
                activeIndex === i
                  ? `${styles.dot} ${styles["active-dot"]}`
                  : `${styles.dot}`
              }
              onClick={() => {
                setActiveIndex(i);
              }}
            ></span>
          );
        })}
      </div>
      <div className={styles["reviews-container"]}>
        {reviews.map((el, i) => (
          <div
            className={styles.reviews}
            key={i}
            style={{
              transform: `translateX(${100 * (i - activeIndex)}%)`,
            }}
          >
            <div className={styles["text-container"]}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                error fugiat aperiam temporibus non nobis vero earum! Sint
                beatae facilis perferendis vel voluptas optio aut molestias
                nostrum dolor, accusamus itaque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Earum quis neque vitae maxime
                consequuntur repellendus, voluptate eos veritatis harum quaerat
                beatae corporis modi ab dolore sapiente, ex eligendi quibusdam
                provident.
              </p>
              <p className={styles.name}>{el.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

{
  /* <div className={styles.container}>
<button className={styles["button-left"]} onClick={prevSlide}>
  <RiArrowLeftLine className={styles.button} />
</button>
<button className={styles["button-right"]} onClick={nextSlide}>
  <RiArrowRightLine className={styles.button} />
</button>
<div className={styles.dots}>
  {reviews.map((_, i) => {
    return (
      <span
        key={i}
        className={
          activeIndex === i
            ? `${styles.dot} ${styles["active-dot"]}`
            : `${styles.dot}`
        }
        onClick={() => {
          setActiveIndex(i);
        }}
      ></span>
    );
  })}
</div>
<div className={styles["picture-container"]}>
  <img src={felix} />
</div>
<div className={styles["reviews-container"]}>
  {reviews.map((el, i) => (
    <div
      className={styles.reviews}
      key={i}
      style={{
        transform: `translateX(${100 * (i - activeIndex)}%)`,
      }}
    >
      <div className={styles["text-container"]}>
        <h3 className={styles.tour}>{el.tour}</h3>
        <p className={styles.review}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          error fugiat aperiam temporibus non nobis vero earum! Sint
          beatae facilis perferendis vel voluptas optio aut molestias
          nostrum dolor, accusamus itaque.
        </p>
        <p className={styles.name}>{el.name}</p>
      </div>
    </div>
  ))}
</div>
</div> */
}
