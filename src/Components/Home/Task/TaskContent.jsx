import style from "./TaskContent.module.css";
import { useNavigate } from "react-router-dom";
import cptchScrth from "../../../assets/captcha-gif/captcha-scratching.gif";

const TaskContent = () => {
  const captcha = Math.floor(100000 + Math.random() * 900000);
  const captcha2 = Math.floor(100000 + Math.random() * 870000);
  const captcha3 = Math.floor(100000 + Math.random() * 840000);
  const captcha4 = Math.floor(100000 + Math.random() * 850000);

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
