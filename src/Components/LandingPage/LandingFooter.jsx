import style from "./LandingFooter.module.css";
import LandingCommonBtn from "./LandingCommon/LandingCommonBtn";

const LandingFooter = () => {
  return (
    <div style={{ backgroundColor: "#416ef0", textAlign: "center" }}>
      <div className="container-fluid">
        <div className={style.upperFooter}>
          <h2>Small tasks, real rewards</h2>
          <p>
            Earn money online by completing microtasks anytime and anywhere.
          </p>
          <div className="mt-4 pt-sm-3 pt-lg-0 mb-3 mb-lg-0 pt-lg-3">
            <LandingCommonBtn
              lndngClass={"lndngClass"}
              btnText={"Start Earning"}
            ></LandingCommonBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingFooter;
