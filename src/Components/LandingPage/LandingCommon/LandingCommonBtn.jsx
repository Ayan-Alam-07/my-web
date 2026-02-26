import style from "./LandingCommonBtn.module.css";
import { useNavigate } from "react-router-dom";

const LandingCommonBtn = ({ btnText, lndngClass }) => {
  const navigate = useNavigate();

  const handleStartEarning = () => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/Home");
    } else {
      navigate("/login");
    }
  };
  return (
    <button
      className={`${style.landingHeroBtn} ${style.lndngClass}`}
      onClick={handleStartEarning}
    >
      {btnText}
    </button>
  );
};
export default LandingCommonBtn;
