import CauseSection from "./CauseSection";
import ConsultationSection from "./ConsultationSection";
import Heading from "./Heading";
import Hero from "./Hero";
import styles from "./HomeContainer.module.scss";
import HowSection from "./HowSection";
import Carousel from "../../components/Carousel.tsx";
import CTA from "../../components/CTA.tsx";

function HomeContainer() {
  return (
    <div className={styles.container}>
      <Hero />
      <HowSection />
      <Heading />
      <ConsultationSection />
      <CauseSection />
      <section style={{ padding: "8rem" }}>
        <Carousel />
      </section>
      <CTA />
    </div>
  );
}

export default HomeContainer;
