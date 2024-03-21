import styles from "./ContactContainer.module.scss";
import building from "../../assets/img/building.jpg";
import building2 from "../../assets/img/building2.jpg";
import map from "../../assets/img/map.jpg";

function ContactContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["contact-container"]}>
        <div className={styles.contact}>
          <h3>Contact us</h3>
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
              <label>Question</label>
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
          <div className={styles["address-container"]}>
            <h4>Address</h4>
            <p>Practice Name</p>
            <p>1234 Address St.</p>
            <p>Fakesville McFakesTown USA</p>
          </div>
          <div className={styles["hours-container"]}>
            <h4>Hours of operation</h4>
            <p>Monday - Friday: 9 - 5pm</p>
            <p>Weekends: closed</p>
          </div>
          <div className={styles["phone-container"]}>
            <h4>Phone</h4>
            <p>+1 234 567 8910</p>
          </div>
          <div className={styles["email-container"]}>
            <h4>Email</h4>
            <p>email@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;

{
  /* <div className={styles.container}>
<img src={ocean} className={styles.background} />
<div className={styles["contact-container"]}>
  <h2>Can't find what you're looking for?</h2>
  <h4>Feel free to give us a call or send an email</h4>
  <div className={styles["contact-methods"]}>
    <div className={styles["contact"]}>
      <RiPhoneFill />
      <p>+1 234 567 8910</p>
    </div>
    <div className={styles["contact"]}>
      <RiMailLine />
      <p>Anthony@anthony.com</p>
    </div>
  </div>
</div>
</div> */
}

{
  /* <div className={styles["centered-container"]}>
<div className={styles["contact-container"]}>
  <h1>Contact us</h1>
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
      <label>Question</label>
      <textarea rows={8} />
    </div>
  </form>
</div>
<div className={styles["info-container"]}>
  <div>
    <h4>Opening hours</h4>
    <p>Monday - Friday 9 - 5pm</p>
    <p>Saturday 11 - 3pm</p>
    <p>Sunday closed</p>
  </div>
  <div>
    <h4>Address</h4>
    <p>123 Fake St.</p>
    <p>Fake town, Fake world 23456</p>
  </div>
  <div>
    <h4>Contact us</h4>
    <p>+1 234 567 8910</p>
    <p>Email@email.com</p>
  </div>
  <div className={styles["map-container"]}>
    <img src={map} />
  </div>
</div>
</div> */
}
