import { FaSyncAlt } from "react-icons/fa";
import { useList } from "../../Context/ContextStore";
import style from "./RefreshButton.module.css";

const RefreshCoins = ({ ref }) => {
  const { fetchCoins, isLoading } = useList();

  const handleRefresh = () => {
    if (!isLoading) {
      fetchCoins(true);
    }
  };

  return (
    <FaSyncAlt
      onClick={handleRefresh}
      className={`${style.walletRefresh} ${ref === 1 ? style.refFir : style.refSec} ${isLoading ? style.rotate : ""}`}
    />
  );
};

export default RefreshCoins;
