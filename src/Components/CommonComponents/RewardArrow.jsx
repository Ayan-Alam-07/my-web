import { FaArrowRight } from "react-icons/fa";
import style from "./RewardArrow.module.css";

const RewardArrow = ({ marginB }) => {
  return (
    <FaArrowRight
      className={style.rewardArrow}
      style={{ marginBottom: `${marginB}` }}
    />
  );
};
export default RewardArrow;
