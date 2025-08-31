import style from "./TaskContent.module.css";
import { useNavigate } from "react-router-dom";
import cptchScrth from "../../../assets/captcha-gif/captcha-scratching.gif";

const TaskContent = () => {
  function replaceDigits(str, replacements) {
    let chars = str.split("");
    replacements.forEach(([index, newDigit]) => {
      chars[index] = newDigit;
    });
    return chars.join("");
  }

  const captcha = Math.floor(100000 + Math.random() * 900000);
  const firstNum = captcha.toString()[0];
  const secNum = captcha.toString()[1];
  const lastNum = captcha.toString()[5];

  let captcha2 = Math.floor(100000 + Math.random() * 990000);
  let captcha2Str = captcha2.toString();
  captcha2Str = replaceDigits(captcha2Str, [
    [0, firstNum],
    [1, secNum],
    [5, lastNum],
  ]);
  captcha2Str = parseInt(captcha2Str, 10);
  captcha2 = captcha2Str;

  let captcha3 = Math.floor(100000 + Math.random() * 890000);
  let captcha3Str = captcha3.toString();
  captcha3Str = replaceDigits(captcha3Str, [
    [0, firstNum],
    [1, secNum],
    [5, lastNum],
  ]);
  captcha3Str = parseInt(captcha3Str, 10);
  captcha3 = captcha3Str;

  const captcha4 = Math.floor(100000 + Math.random() * 790000);

  const options = [
    { id: 1, value: captcha },
    { id: 2, value: captcha2 },
    { id: 3, value: captcha3 },
    { id: 4, value: captcha4 },
  ].sort(() => Math.random() - 0.5);

  let result;

  const navigate = useNavigate();

  const handleOptins = (id) => {
    if (captcha && id == 1) {
      result = true;
    } else {
      result = false;
    }
    navigate("/taskOptionChecker", {
      state: {
        result: result ? "Correct Option" : "Wrong Option",
        resultBool: result,
      },
    });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={style.shownCaptcha}>
            <div className={style.cptchGif}>
              <img
                loading="lazy"
                src={cptchScrth}
                alt="Earn money online by captcha filling tasks and get real cash rewards"
              />
            </div>
            <div className={style.captchaScratchar}></div>
            <div className={style.captchaScratchar2}></div>
            <p className={style.captchaTxt}>{captcha}</p>
          </div>
        </div>
        <div>
          <div className="row justify-content-center align-items-center mt-5 pt-3 mt-sm-5 mt-lg-4 pt-sm-5 pt-lg-4">
            {options.map((opt) => (
              <div className="col-6 col-sm-5 my-sm-3 my-lg-1" key={opt.id}>
                <div className={style.captchaCont}>
                  <p
                    className={style.captchaOpt}
                    onClick={() => handleOptins(opt.id)}
                  >
                    {opt.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskContent;
