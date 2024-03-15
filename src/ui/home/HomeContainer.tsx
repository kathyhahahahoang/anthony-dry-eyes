import CauseSection from "./CauseSection";
import ConsultationSection from "./ConsultationSection";
import Heading from "./Heading";
import Hero from "./Hero";
import styles from "./HomeContainer.module.scss";
import HowSection from "./HowSection";

function HomeContainer() {
  return (
    <div className={styles.container}>
      <Hero />
      <HowSection />
      <Heading />
      <ConsultationSection />
      <CauseSection />
    </div>
  );
}

export default HomeContainer;
