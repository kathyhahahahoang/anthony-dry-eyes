import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const scrolledContainer = isScrolled
    ? `${styles["scrolled-container"]}`
    : `${styles.container}`;

  const scrolledAnthony = isScrolled
    ? `${styles["scrolled-anthony"]}`
    : `${styles.anthony}`;

  const scrolledNavLinksContainer = isScrolled
    ? `${styles["scrolled-nav-links-container"]}`
    : `${styles["nav-links-container"]}`;
  return (
    <div className={scrolledContainer}>
      <nav className={styles["nav-container"]}>
        <p className={scrolledAnthony}>Anthony</p>
        <ul className={scrolledNavLinksContainer}>
          <li>Blog</li>
          <li>Products</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
