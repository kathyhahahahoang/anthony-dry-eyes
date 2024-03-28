import { NavLink } from "react-router-dom";
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
    if (window.scrollY > 150) {
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

  const scrolledNav =
    isScrolled && !isMobile
      ? `${styles.container} ${styles["container-scrolled"]}`
      : `${styles.container}`;

  return (
    <div className={scrolledNav}>
      <nav className={styles["nav-container"]}>
        <NavLink to="/" className={styles.logo}>
          Anthony
        </NavLink>
        <ul className={styles["nav-links-container"]}>
          <li>
            <NavLink to="/about" className={styles.link}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={styles.link}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/tips" className={styles.link}>
              Tips
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
