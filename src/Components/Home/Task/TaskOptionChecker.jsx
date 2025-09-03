import style from "./TaskOptionChecker.module.css";
import capWrong from "../../../assets/captcha-opt/wrong-opt.png";
import capCorrect from "../../../assets/captcha-opt/correct-opt.png";
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
                className={style.optImg}
                src={resultBool ? capCorrect : capWrong}
                alt=""
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
                  <span>Oops</span>, You Lose the Game.
                </p>
                <h4 className={style.wonGemCount}>
                  You Won <span style={{ color: "#006affff" }}>1 </span>Gems
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
