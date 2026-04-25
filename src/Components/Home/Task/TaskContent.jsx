import style from "./TaskContent.module.css";
import { useNavigate } from "react-router-dom";
import cptchScrth from "../../../assets/captcha-gif/captcha-scratching.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import { useList } from "../../../Context/ContextStore";
import { showError, showWarning } from "../../../utils/Toast";

const TaskContent = () => {
  const num = [1, 2, 3, 4];
  const navigate = useNavigate();

  const { user, setIsLoading } = useList();

  const [captcha, setCaptcha] = useState(null);
  const [options, setOptions] = useState([]);
  const [taskId, setTaskId] = useState(null);

  const fetchCaptcha = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        // `${import.meta.env.VITE_API_URL}/api/captcha/task`,
        `${import.meta.env.VITE_API_URL}/captcha/task`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setCaptcha(res.data.captcha);
      setOptions(res.data.options);
      setTaskId(res.data.taskId);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      showError("Captcha failed");
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleOptins = async (value) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        // `${import.meta.env.VITE_API_URL}/api/captcha/verify`,
        `${import.meta.env.VITE_API_URL}/captcha/verify`,
        {
          taskId,
          selected: value,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setIsLoading(false);
      navigate("/taskOptionChecker", {
        state: {
          result: res.data.result ? "Correct Option" : "Wrong Option",
          resultBool: res.data.result,
          reward: res.data.reward,
        },
      });
    } catch (err) {
      setIsLoading(false);
      if (err.response?.data) {
        showWarning("⏳ Please wait 3 seconds before next captcha");
      } else if (err.response?.status === 429) {
        showWarning("⏳ Wait 7 seconds before next captcha");
      } else {
        console.log(err.response?.data);
        showError("Captcha verification failed");
      }
    }
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

              {!captcha ? (
                <p className={style.challengeCode}>777777</p>
              ) : (
                <p className={style.challengeCode}>{captcha}</p>
              )}
              {/* <p className={style.challengeCode}>{captcha}</p> */}
            </div>
          </div>

          {/* OPTIONS */}
          <div className={style.captchaAnswerGrid}>
            {options.length === 0 &&
              num.map((_, idx) => (
                <div
                  key={idx}
                  className={`${idx === 1 || idx === 3 ? style.answerTileAdp : ""} ${style.captchaAnswerTile}`}
                >
                  <span className={style.answerValue}>777777</span>
                </div>
              ))}
            {options.map((opt, idx) => (
              <div
                key={idx}
                className={`${idx === 1 || idx === 3 ? style.answerTileAdp : ""} ${style.captchaAnswerTile}`}
                onClick={() => handleOptins(opt)}
              >
                <span className={style.answerValue}>{opt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskContent;
