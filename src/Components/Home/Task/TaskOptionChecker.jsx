import style from "./TaskOptionChecker.module.css";
import capWrong from "../../../assets/captcha-opt/wrong-opt-2.gif";
import capCorrect from "../../../assets/captcha-opt/correct-opt-3.gif";
import { useLocation, useNavigate } from "react-router-dom";
import CommonNavArr from "../../CommonComponents/CommonNavArr";

const TaskOptionChecker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result, resultBool } = location.state || {};

  return (
    <>
      <CommonNavArr
        id={5}
        name={result}
        navigation={"/captcha-tasks"}
      ></CommonNavArr>

      <div className="container-fluid">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={style.optImgCont}>
              <img
                loading="lazy"
                className={`${style.optImg} ${
                  !resultBool ? style.wrongOptImg : ""
                }`}
                src={resultBool ? capCorrect : capWrong}
                alt="Congratulations, you earned coins for captcha verification on rewards website"
              />
            </div>
            <p
              className={`${style.optPara} ${
                resultBool ? style.optCorrect : style.optWrong
              }`}
            >
              {result}
            </p>
            {resultBool ? (
              <>
                <p className={style.statusPara}>
                  <span className={style.statusParaAppr}>Congratulations</span>,
                  You Won the Game.
                </p>
                <h4 className={style.wonGemCount}>
                  You Won <span className={style.gemWonTxt}>1.25 </span>Gems
                </h4>{" "}
              </>
            ) : (
              <>
                <p className={style.statusPara}>
                  <span className={style.statusParaDppr}>Oops</span>, You Lose
                  the Game.
                </p>
                <h4 className={style.wonGemCount}>
                  You Still Won <span style={{ color: "#006affff" }}>1 </span>
                  Gem
                </h4>{" "}
              </>
            )}

            <div className={style.buttonsCont}>
              <button className={style.claimRewardBtn}>Claim Reward</button>
              <button
                className={style.goBackBtn}
                onClick={() => navigate("/captcha-tasks")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskOptionChecker;
