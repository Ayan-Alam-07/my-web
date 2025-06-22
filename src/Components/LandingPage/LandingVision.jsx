import style from "./LandingVision.module.css";
import VisionBackPaidImg from "../../assets/vision-back-paidout.png";
import VisionBackRegImg from "../../assets/vision-back-reg.png";
import VisionBackPayImg from "../../assets/vision-back-payout.png";

const LandingVision = () => {
  const visionCards = [
    {
      id: 1,
      background: VisionBackPaidImg,
      class: "visionCard1",
      alt: "",
      title: "Total Paid Out",
      detail: "1 500 470+",
    },
    {
      id: 2,
      background: VisionBackRegImg,
      class: "visionCard2",
      alt: "",
      title: "Registered Users",
      detail: "1 570 253+",
    },
    {
      id: 3,
      background: VisionBackPayImg,
      class: "visionCard3",
      alt: "",
      title: "Total Pay Out",
      detail: "150 745+",
    },
  ];
  return (
    <div className="container-fluid p-0">
      <div className={style.landingVisionWraper}>
        <div className={style.landingCont}>
          <h2 className={style.landingVisionHds}>Our Vision</h2>
          <p className={style.landingVisioinPara}>
            VELoop makes it easy for anyone to earn money online with quick and
            simple tasks. Whether you're at home or on the go, our platform
            gives you access to a variety of earning opportunities. You don’t
            need any special skills or experience — just sign up and start
            earning extra income in a way that fits your lifestyle.
          </p>

          <div className={`row pb-5 pb-lg-0 m-0 ${style.sliderWrapper}`}>
            {visionCards.map((card) => (
              <div
                key={card.id}
                className={`col-12 col-sm-6 col-lg-4 py-sm-3 my-sm-1 py-lg-0 my-lg-0 ${style.colLgCenter}`}
              >
                <div className={`${style.VisionCard} ${style[card.class]}`}>
                  <div className={style.VisionImgCont}>
                    <img
                      src={card.background}
                      alt=""
                      className={style.visionCardImg}
                    />
                  </div>
                  <div className={style.visionDetailCont}>
                    <h4 className={style.visionCardHds}>{card.title}</h4>
                    <h6 className={style.visionCardDetail}>{card.detail}</h6>
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
export default LandingVision;
