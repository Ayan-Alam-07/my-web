import style from "./LandingHero.module.css";
import LandingCommonBtn from "../LandingPage/LandingCommon/LandingCommonBtn";

const LandingHero = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className={style.landingHeroWraper}>
        <div className={`col-11 col-lg-7 p-md-1 ${style.landingHeroContent}`}>
          <h1 className={style.landingHeroHds}>
            Earn Real Money Online – Watch Ads,{" "}
            <span className="d-none d-md-inline-block">Play Games,</span>{" "}
            Complete Tasks & More
          </h1>
          <p className={style.landingHeroPara}>
            Turn your free time into real income by joining the easiest and most
            trusted way to earn money online.
            <span className="d-none d-md-inline-block">
              Get paid for watching ads, completing app tasks, solving captchas,
              and referring friends, Etc.{" "}
            </span>
            <div className="mt-2 mt-md-3 d-flex justify-content-center">
              <LandingCommonBtn
                btnText={"Starting Making Money Now"}
              ></LandingCommonBtn>
            </div>
            <span className={style.landingParaHideMob}>
              {" "}
              <span className="d-none d-lg-inline-block">
                Start today and explore how easy it is to boost your income
                anytime, anywhere.
              </span>
            </span>
            <span className="d-block mt-3 pt-2 mt-sm-2 pt-sm-0 mt-lg-0 pt-lg-0">
              Our platform offers multiple legit earning options — designed for
              students, job seekers, With instant rewards, daily bonuses, promo
              codes, and a user-friendly dashboard, earning online has never
              been this simple and rewarding.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingHero;
