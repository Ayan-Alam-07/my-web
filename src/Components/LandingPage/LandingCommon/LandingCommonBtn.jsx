import style from "./LandingCommonBtn.module.css";
import { useNavigate } from "react-router-dom";

const LandingCommonBtn = ({ btnText }) => {
  const navigate = useNavigate();

  return (
    <button className={style.landingHeroBtn} onClick={() => navigate("/Home")}>
      {btnText}
    </button>
  );
};
export default LandingCommonBtn;
