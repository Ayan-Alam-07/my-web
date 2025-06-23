import style from "./LandingCommonBtn.module.css";
import { useNavigate } from "react-router-dom";

const LandingCommonBtn = ({ btnText, lndngClass }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${style.landingHeroBtn} ${style.lndngClass}`}
      onClick={() => navigate("/Home")}
    >
      {btnText}
    </button>
  );
};
export default LandingCommonBtn;
