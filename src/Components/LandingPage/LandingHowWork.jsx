import style from "./LandingHowWork.module.css";
import HowWorkLogo from "../../assets/landing/landing-work/work-veloop-logo.webp";
import doTaskImg from "../../assets/landing/landing-work/task-v3.webp";
import getPaidImg from "../../assets/landing/landing-work/get-paid.webp";

const LandingHowWork = () => {
  const howWorkCards = [
    {
      id: 1,
      class: "signupImg",
      icon: HowWorkLogo,
      alt: "Sign up now to start earning rewards instantly by joining our free and trusted online platform",
      step: "Step 1.",
      title: "Sign up",
      para: "Create an account easily with Google, Facebook, Apple, or a secure crypto wallet for rewards.",
    },
    {
      id: 2,
      class: "taskImg",
      icon: doTaskImg,
      alt: "Complete simple online tasks to earn real rewards instantly from your phone or computer",
      step: "Step 2.",
      title: "Complete Tasks",
      para: "Browse a wide range of tasks, from games to surveys, and pick the easiest way to earn online.",
    },
    {
      id: 3,
      class: "paidImg",
      icon: getPaidImg,
      alt: "Get paid online for completing tasks, watching ads, and participating in simple reward programs",
      step: "Step 3.",
      title: "Get paid",
      para: "Follow the task guidelines, complete tasks, and get rewarded. Easily transfer your earnings to your crypto wallet.",
    },
  ];
  return (
    <div className="container-fluid p-0">
      <div className={style.landingWorkWraper}>
        <div className={style.landingCont}>
          <h2 className={style.landingWorkHds}>How it Works ?</h2>

          <div className={`row p-0 pb-5 m-0 ${style.sliderWrapper}`}>
            {howWorkCards.map((card) => (
              <div key={card.id} className="col-12 col-sm-6 col-lg-4 pb-5 ">
                <div className={`${style.sliderTrack} ${style[card.class]}`}>
                  <div className={style.card}>
                    <img
                      src={card.icon}
                      loading="lazy"
                      alt={card.alt}
                      style={{ borderRadius: "7px" }}
                      className={`${style.landingCardImg} `}
                    />
                    <div className={style.cardContent}>
                      <p className={style.cardStepPara}>{card.step}</p>
                      <h3 className={style.cardsHds}>{card.title}</h3>
                      <p className={style.cardPara}>{card.para}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingHowWork;
