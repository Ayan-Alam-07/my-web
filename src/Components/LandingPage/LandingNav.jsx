import style from "./LandingNav.module.css";
import VeLoopLogoAni from "../../assets/Animation-VELoop.gif";

const LandingNav = () => {
  return (
    <div className={`container-fluid p-0 ${style.landingNav}`}>
      <div>
        <nav>
          <div
            className={`container d-flex align-items-center ${style.landingNavBlur}`}
          >
            <div className={style.VeLoopLogo}>
              <img
                src={VeLoopLogoAni}
                alt="Watch Ads & Earn Real Cash Online – Only on VELoop"
              />
            </div>
            <h2 className={style.landingLogoTxt}>
              <strong>
                <span style={{ color: "#ffd700", marginRight: "3px" }}>VE</span>
                Loop
              </strong>
            </h2>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default LandingNav;
