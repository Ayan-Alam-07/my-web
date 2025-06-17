import style from "./LandingHero.module.css";

const LandingHero = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className="container"></div>
      <div className={style.landingHeroWraper}>
        <div className={style.landingHeroContWraper}></div>
      </div>
    </div>
  );
};
export default LandingHero;
