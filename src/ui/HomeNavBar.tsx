import { NavLink } from "react-router-dom";
import styles from "./HomeNavBar.module.scss";
import { useEffect, useState } from "react";

function HomeNavBar() {
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

  const scrolledContainer =
    isScrolled && !isMobile
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
        <NavLink to="/" className={scrolledAnthony}>
          Anthony
        </NavLink>
        <ul className={scrolledNavLinksContainer}>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomeNavBar;
