import style from "./LandingNav.module.css";
import VeLoopLogoAni from "../../assets/Animation-VELoop.gif";

const LandingNav = () => {
  return (
    <div className={`container-fluid p-0 ${style.landingNav}`}>
      <div>
        <nav className="d-flex">
          <div className={`container ${style.landingNavBlur}`}>
            <div className={style.VeLoopLogo}>
              <img
                src={VeLoopLogoAni}
                alt="Watch Ads & Earn Real Cash Online – Only on VELoop"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default LandingNav;
