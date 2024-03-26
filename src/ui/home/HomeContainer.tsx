import CauseSection from "./CauseSection";
import ConsultationSection from "./ConsultationSection";
import Hero from "./Hero";
import styles from "./HomeContainer.module.scss";
import CTA from "../../components/CTA.tsx";
import How from "./How.tsx";
import ReviewsSection from "./ReviewsSection.tsx";
import BlogSection from "./BlogSection.tsx";

function HomeContainer() {
  return (
    <div className={styles.container}>
      <Hero />
      <How />
      {/* <Heading /> */}
      <CauseSection />
      <ConsultationSection />
      <BlogSection />
      <ReviewsSection />

      <CTA />
    </div>
  );
}

export default HomeContainer;
