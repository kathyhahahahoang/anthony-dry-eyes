import CauseSection from "./CauseSection";
import ConsultationSection from "./ConsultationSection";
import Heading from "./Heading";
import Hero from "./Hero";
import styles from "./HomeContainer.module.scss";
import Carousel from "../../components/Carousel.tsx";
import CTA from "../../components/CTA.tsx";
import How from "./How.tsx";

function HomeContainer() {
  return (
    <div className={styles.container}>
      <Hero />
      <How />
      {/* <Heading /> */}
      <CauseSection />
      <ConsultationSection />
      <section style={{ padding: "8rem" }}>
        <Carousel />
      </section>
      <CTA />
    </div>
  );
}

export default HomeContainer;
