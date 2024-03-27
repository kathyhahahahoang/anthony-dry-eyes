import styles from "./ReviewsSection.module.scss";
import { useState } from "react";
import Slider from "react-slick";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import ocean from "../../assets/img/ocean.jpg";

const reviews = [
  {
    name: "Felix",
    review: `Yo, there's no way because it's my first time
Yo, I was daring because it's my first time
Yo, that it was my first time became a weapon
It's my first time, my first time, all of them
Poison, trap, toadstool you can set them up
I'll survive in the end, whatever it takes
I know your traps, you set them up
And I stomp on them tougher
There's only one answer, you just have to open it`,
  },
  {
    name: "Jungkook",
    review: `Take my hands now
    You are the 'cause of my euphoria
    Euphoria
    Take my hands now
    You are the 'cause of my euphoria
    Yeah-yeah, hey-yeah, yeah-yeah (ooh-ooh)
    Oh, yeah-yeah, hey-yeah, yeah-yeah
    Euphoria
    Yeah-yeah, hey-yeah, yeah-yeah
    Close the door now
    When I'm with you, I'm in utopia`,
  },
  {
    name: "Jungwon",
    review: `Come here and get some (some), 남겨줘 on my neck
    네 거란 증거 (거), just come over and bite me
    Come here and get some (some), 널 찬미할 sidekick
    그게 내 숙명 (명), just come over and bite me
    It's you and me in this world, 내게로 다시 와, tie me
    날 구원할 거라면, just come kiss me and bite me (oh, babe)
    It's you and me in this world, 이 어둠 속에서 light me (ooh, ooh-ooh)
    기회를 줄 거라면, just come kiss me and bite me, yeah-eh-eh`,
  },
  {
    name: "HueningKai",
    review: `내 숙명아, come and kiss me
    I just keep on chasing that feeling
    망가진 나여도 leave me
    I just keep on chasing
    Chasing that feeling
    Chasing that feeling
    Chasing that feeling
    It's all I know, it's all I know`,
  },
  {
    name: "Hanbin",
    review: `So into you
  Girl you got me in circles circles
  I don't wanna waste none
  'Cause I know that time is of the virtue virtue
  I can barely sleep babe, need you with me
  그녀 눈빛이 나를 지배해
  우리들은 취해 분위기에
  So whenever I'm home don't you ever sleep`,
  },
];

function ReviewsSection() {
  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <RiArrowRightLine
          className={`${styles["arrow-right"]} ${styles.arrow}`}
        />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <RiArrowLeftLine
          className={`${styles["arrow-left"]} ${styles.arrow}`}
        />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    draggable: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className={styles.container}>
      <img src={ocean} className={styles.background} />
      <h1 className={styles.header}>Testimonials</h1>
      <div className={styles["slider-container"]}>
        <Slider {...settings}>
          {reviews.map((el, index) => (
            <div
              className={
                index === imageIndex
                  ? `${styles["active-slide"]} ${styles.slide}`
                  : `${styles.slide}`
              }
            >
              <div className={styles["review-container"]}>
                <p className={styles.review}>{el.review}</p>
                <p className={styles.name}>{el.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewsSection;

{
  /* <section className={styles.container}>
<div className={styles["picture-container"]}>
  <img src={patient} className={styles.picture} />
</div>
<div className={styles["reviews-container"]}>
  <h1 className={styles.header}>Testimonials</h1>
  <Carousel />
</div>
</section> */
}
