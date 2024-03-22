import styles from "./AboutContainer.module.scss";
import daddy from "../../assets/img/daddy.jpg";

function AboutContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h3>
          Dr. Anthony Mac
          <br /> OD, MPH, FAAO
          <br />
          Doctor of Optometry
        </h3>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
          labore, quaerat amet reiciendis libero quas sequi eius velit incidunt
          cum reprehenderit sint natus odit, mollitia qui exercitationem nemo
          aspernatur. Soluta ad labore, quaerat amet reiciendis libero quas
          sequi eius velit incidunt cum reprehenderit sint natus odit, mollitia
          qui exercitationem nemo aspernatur.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo
          sapiente nihil, dolor harum ea non? Sequi error sapiente nihil rem et
          perspiciatis harum voluptatem eveniet, fugit quam, rerum dolorem.
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <img src={daddy} className={styles.picture} />
      </div>
    </div>
  );
}

export default AboutContainer;

{
  /* <h3>
Dr. Anthony Mac
<br /> OD, MPH, FAAO
<br />
Doctor of Optometry
</h3> */
}
