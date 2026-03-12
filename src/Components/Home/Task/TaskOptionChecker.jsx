import style from "./TaskOptionChecker.module.css";
import capWrong from "../../../assets/captcha-opt/wrong-opt-2.webm";
import capCorrect from "../../../assets/captcha-opt/correct-opt-3.webm";
import { useLocation, useNavigate } from "react-router-dom";
import CommonNavArr from "../../CommonComponents/CommonNavArr";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";

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
          <div className={style.resultWrapper}>
            <div className={style.resultCard}>
              <div className={style.resultIconContainer}>
                {resultBool ? (
                  <FaCheckCircle className={style.successBigIcon} />
                ) : (
                  <FaTimesCircle className={style.failBigIcon} />
                )}
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
                    <span className={style.statusParaAppr}>
                      {resultBool ? (
                        <FaCheckCircle className={style.successIcon} />
                      ) : (
                        <FaTimesCircle className={style.failIcon} />
                      )}
                      Congratulations
                    </span>
                    , You solved the captcha successfully!
                  </p>

                  <h4 className={style.wonGemCount}>
                    <GiDiamonds className={style.gemIcon} />
                    You Won <span className={style.gemWonTxt}>1</span> Gems
                  </h4>
                </>
              ) : (
                <>
                  <p className={style.statusPara}>
                    {resultBool ? (
                      <FaCheckCircle className={style.successIcon} />
                    ) : (
                      <FaTimesCircle className={style.failIcon} />
                    )}
                    <span className={style.statusParaDppr}>Oops</span>, Wrong
                    answer you are unsuccessful to solve the captcha.
                  </p>

                  <h4 className={style.wonGemCount}>
                    <GiDiamonds className={style.gemIcon} />
                    You Still Won <span className={style.gemWonTxt}>
                      0.75
                    </span>{" "}
                    Gem
                  </h4>
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
      </div>
    </>
  );
};
export default TaskOptionChecker;
