import style from "./LandingHowWork.module.css";
import HowWorkLogo from "../../assets/work-veloop-logo.png";
import doTaskImg from "../../assets/do-task.png";
import getPaidImg from "../../assets/get-paid.png";

const LandingHowWork = () => {
  const howWorkCards = [
    {
      id: 1,
      icon: "",

      //   icon: HowWorkLogo,
      title: "",
      para: "",
    },
    {
      id: 2,
      icon: "",

      //   icon: doTaskImg,
      title: "",
      para: "",
    },
    {
      id: 3,
      icon: "",
      //   icon: getPaidImg,
      title: "",
      para: "",
    },
  ];
  return (
    <div className="container-fluid p-0">
      <div className={style.landingWorkWraper}>
        <div className={style.landingCont}>
          <h2 className={style.landingWorkHds}>How it Works ?</h2>

          <div
            className={`row justify-content-center p-0 m-0 ${style.sliderWrapper}`}
          >
            {howWorkCards.map((card) => (
              <div className="col-12 col-sm-6 col-lg-3 pb-5 ">
                <div className={`${style.sliderTrack}`}>
                  <div className={style.card}>
                    <img
                      src={card.icon}
                      alt=""
                      style={{ borderRadius: "7px" }}
                      className={style.landingCardImg}
                    />
                    <div className={style.cardContent}>
                      <h3 className={style.cardsHds}>{card.title}</h3>
                      <p className={`m-0 ${style.cardPara}`}>{card.para}</p>
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
