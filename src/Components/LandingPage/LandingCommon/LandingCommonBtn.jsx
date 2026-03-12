import { useList } from "../../../Context/ContextStore";
import { showWarning } from "../../../utils/Toast";
import style from "./LandingCommonBtn.module.css";
import { useNavigate } from "react-router-dom";

const LandingCommonBtn = ({ btnText, lndngClass }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useList();

  const handleStartEarning = () => {
    if (isAuthenticated) {
      navigate("/Home");
    } else {
      showWarning("Login to start earning");
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
