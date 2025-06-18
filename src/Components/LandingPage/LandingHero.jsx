import style from "./LandingHero.module.css";

const LandingHero = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className="container"></div>
      <div className={style.landingHeroWraper}>
        <div className={`col-7 ${style.landingHeroContent}`}>
          <h1 className={style.landingHeroHds}>
            Earn Real Money Online – Watch Ads, Play Games, Complete Tasks &
            More
          </h1>
          <p className={style.landingHeroPara}>
            Turn your free time into real income by joining the easiest and most
            trusted way to earn money online. Get paid for watching ads,
            completing app tasks, solving captchas, and referring friends. Start
            today and explore how easy it is to boost your income anytime,
            anywhere.
            <span className="d-block mt-2 pt-2">
              Our platform offers multiple legit earning options — designed for
              students, job seekers, With instant rewards, daily bonuses, promo
              codes, and a user-friendly dashboard, earning online has never
              been this simple and rewarding.
            </span>
          </p>
          <div className="d-flex justify-content-center pb-4">
            <button className={style.landingHeroBtn}>
              Starting Making Money Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingHero;
