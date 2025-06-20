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
      alt: "Watch ads online and earn real rewards instantly by viewing simple video advertisements",
      title: "Watch Ad & Earn",
      para: "Watch ads online and earn real rewards instantly. Get paid daily by viewing simple video ads!",
    },
    {
      id: 2,
      icon: appTaskImg,
      alt: "Complete app tasks like installs and signups to earn real money online instantly",
      title: "App Task",
      para: "Earn real money by completing app tasks like installs, signups, and usage—quick and easy!",
    },
    {
      id: 3,
      icon: playGameImg,
      alt: "Play fun mobile games and earn real money online instantly with engaging game tasks",
      title: "Play & Earn",
      para: "Play fun mobile games and earn real rewards instantly—no investment, just pure entertainment!",
    },
    {
      id: 4,
      icon: bonusImg,
      alt: "Earn daily bonus income by completing simple online tasks and challenges for extra rewards",
      title: "Bonus Income",
      para: "Unlock bonus income by completing tasks and challenges—extra rewards every day!",
    },
    {
      id: 5,
      icon: socialMediaImg,
      alt: "Earn social rewards by sharing content, referring friends, and engaging on social media platforms",
      title: "Social Rewards",
      para: "Earn social rewards by sharing, referring, and engaging—get paid for your social media activity!",
    },
    {
      id: 6,
      icon: captchaImg,
      alt: "Solve simple captchas online to earn real money easily with instant rewards for every task",
      title: "Captcha & Earn",
      para: "Solve simple captchas and earn real money online—fast, easy, and available anytime!",
    },
    {
      id: 7,
      icon: promoCodeImg,
      alt: "Redeem promo codes to earn instant rewards, cashback, or bonus income online effortlessly",
      title: "Promo Code",
      para: "Redeem promo codes to earn instant rewards—exclusive deals for extra income every day!",
    },
    {
      id: 8,
      icon: surveyImg,
      alt: "Take online surveys to earn real rewards by sharing your opinions on products and services",
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
      flushSync(() => {
        setCards((prev) => shuffleCards(prev));
      });

      const nextDelay = Math.floor(Math.random() * 7500) + 12000;
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
                <div className="col-12 col-sm-6 col-lg-3 pb-5 ">
                  <div className={`${style.sliderTrack}`}>
                    <div className={style.card}>
                      <img
                        src={detail.icon}
                        alt={detail.alt}
                        style={{ borderRadius: "7px" }}
                        className={style.landingCardImg}
                      />
                      <div className={style.cardContent}>
                        <h3 className={style.cardsHds}>{detail.title}</h3>
                        <p className={`m-0 ${style.cardPara}`}>{detail.para}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
        <div className="d-flex justify-content-center align-items-center pb-4 pb-lg-3">
          <LandingCommonBtn btnText={"Start Earning Now"}></LandingCommonBtn>
        </div>
      </div>
    </div>
  );
};

export default LandingEarnAbout;
