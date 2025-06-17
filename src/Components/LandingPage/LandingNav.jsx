import style from "./LandingNav.module.css";
import VeLoopLogoAni from "../../assets/Animation-VELoop.gif";

const LandingNav = () => {
  return (
    <div className={`container-fluid p-0 ${style.landingNav}`}>
      <div>
        <nav>
          <div
            className={`container d-flex align-items-center justify-content-between ${style.landingNavBlur}`}
          >
            <div className="d-flex align-items-center ">
              <div className={style.VeLoopLogo}>
                <img
                  src={VeLoopLogoAni}
                  alt="Watch Ads & Earn Real Cash Online – Only on VELoop"
                />
              </div>
              <h2 className={style.landingLogoTxt}>
                <span style={{ color: "#ffd700", marginRight: "3px" }}>VE</span>
                Loop
              </h2>
            </div>
            <div>
              <button className={style.landingLoginBtn}>Login / Signup</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default LandingNav;
