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
      <div className="container mb-4">
        {/* CAPTCHA TERMINAL */}

        <div className={style.contentContainer}>
          <div className={style.challengeTerminal}>
            <div className={style.challengeHeader}>
              <span className={style.challengeDot}></span>
              <span className={style.challengeDot}></span>
              <span className={style.challengeDot}></span>

              <p className={style.challengeTitle}>CAPTCHA SECURITY TASK</p>
            </div>

            <div className={style.challengeDisplay}>
              <img
                src={cptchScrth}
                loading="lazy"
                alt="captcha earning challenge"
                className={style.challengeBackground}
              />

              <span className={style.challengeLineA}></span>
              <span className={style.challengeLineB}></span>

              <p className={style.challengeCode}>{captcha}</p>
            </div>
          </div>

          {/* OPTIONS */}

          <div className={style.captchaAnswerGrid}>
            {options.map((opt, idx) => (
              <div
                key={opt.id}
                className={`${idx === 1 || idx === 3 ? style.answerTileAdp : ""} ${style.captchaAnswerTile}`}
                onClick={() => handleOptins(opt.id)}
              >
                <span className={style.answerValue}>{opt.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskContent;
