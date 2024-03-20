import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import NavBar from "./NavBar.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";

function AppLayout() {
  const [blur, setBlur] = useState(true);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    setTimeout(() => setBlur(false), 3000);
  }, []);

  return (
    <div className={styles.container}>
      {blur ? (
        <div className={styles.blur} />
      ) : (
        <div className={styles["blur-end"]}></div>
      )}
      <ScrollRestoration />
      {isLoading && <LoadingSpinner />}
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
