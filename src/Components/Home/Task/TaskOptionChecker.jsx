import style from "./TaskOptionChecker.module.css";
import capWrong from "../../../assets/captcha-opt/wrong-opt.png";
import capCorrect from "../../../assets/captcha-opt/correct-opt.png";
import { useLocation } from "react-router-dom";
import CommonNavArr from "../../CommonComponents/CommonNavArr";

const TaskOptionChecker = () => {
  const location = useLocation();
  const { result, resultBool } = location.state || {};

  console.log(resultBool); // returns True or False

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
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskOptionChecker;
