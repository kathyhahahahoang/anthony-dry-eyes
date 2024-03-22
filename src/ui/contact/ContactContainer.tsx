import styles from "./ContactContainer.module.scss";
import building from "../../assets/img/building.jpg";
import building2 from "../../assets/img/building2.jpg";
import map from "../../assets/img/map.jpg";

function ContactContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["contact-container"]}>
        <div className={styles.contact}>
          <h2>Contact us</h2>
          <form className={styles.form}>
            <div className={styles["form-field"]}>
              <label>Name</label>
              <input type="text" />
            </div>
            <div className={styles["form-field"]}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={styles["form-field"]}>
              <label>How can we help?</label>
              <textarea rows={8} />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className={styles["picture-container"]}>
          <img src={building} className={styles.building} />
          <img src={building2} className={styles.office} />
        </div>
      </div>
      <div className={styles["location-container"]}>
        <div className={styles["map-container"]}>
          <img src={map} />
        </div>
        <div className={styles["info-container"]}>
          <div className={styles["content-container"]}>
            <h4>Address</h4>
            <p>Practice Name</p>
            <p>1234 Address St.</p>
            <p>Fakesville McFakesTown USA</p>
          </div>
          <div className={styles["content-container"]}>
            <h4>Hours of operation</h4>
            <p>Monday - Friday: 9 - 5pm</p>
            <p>Weekends: closed</p>
          </div>
          <div className={styles["content-container"]}>
            <h4>Phone</h4>
            <p>+1 234 567 8910</p>
          </div>
          <div className={styles["content-container"]}>
            <h4>Email</h4>
            <p>email@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
