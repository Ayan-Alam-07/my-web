import { useEffect, useState, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { flushSync } from "react-dom";
import style from "./LandingEarnAbout.module.css";
import LandingCommonBtn from "./LandingCommon/LandingCommonBtn";

import watchAdImg from "../../assets/watch-ad.png";
import appTaskImg from "../../assets/app-task.png";
import playGameImg from "../../assets/play-game.png";
import socialMediaImg from "../../assets/social-media.png";
import surveyImg from "../../assets/survey.png";
import captchaImg from "../../assets/captcha.png";
import bonusImg from "../../assets/bonus.png";
import promoCodeImg from "../../assets/promo-code-3.png";

const LandingEarnAbout = () => {
  const sectionRef = useRef(null);
  const initialCards = [
    {
      id: 1,
      icon: watchAdImg,
      title: "Watch Ad & Earn",
      para: "Watch ads and earn real rewards instantly. Get paid online easily by viewing simple video ads!",
    },
    {
      id: 2,
      icon: appTaskImg,
      title: "App Task",
      para: "Earn real money by completing app tasks like installs, signups, and usage—quick and easy!",
    },
    {
      id: 3,
      icon: playGameImg,
      title: "Play & Earn",
      para: "Play fun mobile games and earn real rewards instantly—no investment, just pure entertainment!",
    },
    {
      id: 4,
      icon: bonusImg,
      title: "Bonus Income",
      para: "Unlock bonus income by completing tasks and challenges—extra rewards every day!",
    },
    {
      id: 5,
      icon: socialMediaImg,
      title: "Social Rewards",
      para: "Earn social rewards by sharing, referring, and engaging—get paid for your social media activity!",
    },
    {
      id: 6,
      icon: captchaImg,
      title: "Captcha & Earn",
      para: "Solve simple captchas and earn real money online—fast, easy, and available anytime!",
    },
    {
      id: 7,
      icon: promoCodeImg,
      title: "Promo Code",
      para: "Redeem promo codes to earn instant rewards—exclusive deals for extra income every day!",
    },
    {
      id: 8,
      icon: surveyImg,
      title: "Take Survey",
      para: "Take surveys and earn real rewards—share your opinion and get paid instantly!",
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const shuffleCards = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const timeoutRef = useRef(null);

  useEffect(() => {
    const shuffleWithRandomDelay = () => {
      const scrollY = window.scrollY;

      // flushSync forces React to update DOM before continuing
      flushSync(() => {
        setCards((prev) => shuffleCards(prev));
      });

      window.scrollTo({ top: scrollY, behavior: "auto" });

      const nextDelay = Math.floor(Math.random() * 5000) + 9000;
      timeoutRef.current = setTimeout(shuffleWithRandomDelay, nextDelay);
    };

    shuffleWithRandomDelay();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className={style.LandingEarnWraper} ref={sectionRef}>
        <h2 className={style.LandingEarnHds}>
          Start Earning Instantly with Simple Tasks
        </h2>

        <Flipper
          flipKey={cards.map((card) => card.id).join("-")}
          spring="stiff"
          decisionData={cards}
        >
          <div
            className={`row justify-content-center p-0 m-0 ${style.sliderWrapper}`}
          >
            {cards.map((detail) => (
              <Flipped key={detail.id} flipId={detail.id}>
                <div className="col-12 col-sm-6 col-lg-3 pb-sm-3 pb-lg-5">
                  <div className={`${style.sliderTrack}`}>
                    <div className={style.card}>
                      <img
                        src={detail.icon}
                        alt=""
                        style={{ borderRadius: "7px" }}
                        className={style.landingCardImg}
                      />
                      <div className={style.cardContent}>
                        <h3 className={style.cardsHds}>{detail.title}</h3>
                        <p className="m-0">{detail.para}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
        <div className="d-flex justify-content-center align-items-center">
          <LandingCommonBtn btnText={"Explore More"}></LandingCommonBtn>
        </div>
      </div>
    </div>
  );
};

export default LandingEarnAbout;
