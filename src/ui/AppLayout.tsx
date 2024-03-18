import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import NavBar from "./NavBar.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import Footer from "../components/Footer.tsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.container}>
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
