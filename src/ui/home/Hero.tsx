import styles from "./Hero.module.scss";
import doctor from "../../assets/img/doctor.jpg";
import { RiCheckFill } from "@remixicon/react";
// import { useEffect, useState } from "react";

function Hero() {
  // const [isScrolled, setScrolled] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 150) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // }, []);

  // const updateMedia = () => {
  //   setIsMobile(window.innerWidth < 650);
  // };

  // const scrolledAnthony = isScrolled
  //   ? `${styles["scrolled-Anthony"]}`
  //   : `${styles.anthony}`;

  return (
    <div className={styles.container}>
      <div className={styles["hero-container"]}>
        {/* <p className={scrolledAnthony}>Anthony</p> */}
        <div className={styles["hero-contents"]}>
          <div className={styles["hero-text"]}>
            <div className={styles["hero-text-contents"]}>
              <h1>Are dry eyes affecting your quality of life?</h1>
              <h3>We can help you find solutions to improve your eye health</h3>
              <ul className={styles["list-container"]}>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 1</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 2</p>
                </li>
                <li className={styles["list-item"]}>
                  <RiCheckFill />
                  <p>Reason 3</p>
                </li>
              </ul>
              <button className={styles.button}>Click</button>
            </div>
          </div>
          <div className={styles["hero-picture"]}>
            <img src={doctor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
