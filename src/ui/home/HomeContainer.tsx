import HomeNavBar from "../HomeNavBar.tsx";
import CauseSection from "./CauseSection";
import ConsultationSection from "./ConsultationSection";
import Heading from "./Heading";
import Hero from "./Hero";
import styles from "./HomeContainer.module.scss";
import HowSection from "./HowSection";
import Carousel from "../../components/Carousel.tsx";
import Footer from "../../components/Footer.tsx";

function HomeContainer() {
  return (
    <div className={styles.container}>
      <HomeNavBar />
      <Hero />
      <HowSection />
      <Heading />
      <ConsultationSection />
      <CauseSection />
      <section style={{ padding: "8rem" }}>
        <Carousel />
      </section>
      <Footer />
    </div>
  );
}

export default HomeContainer;
