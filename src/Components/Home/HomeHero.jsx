import style from "./HomeHero.module.css";
import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { useList } from "../../Context/ContextStore";
import RefreshCoins from "../CommonComponents/RefreshButton";

const HomeHero = () => {
  const { user, isLoading, setIsRedeemHistory } = useList();

  const homeEarnToWalletUi = useNavigate();
  const handleWalletClick = () => {
    setIsRedeemHistory(false);
    homeEarnToWalletUi("/Wallet");
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#252636" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 px-2 px-md-3 mb-1">
            <div className={style.availcont}>
              <span className={style.availCoins}>
                <span>Available VEs</span>
              </span>
              <div className="d-flex text-white mt-4 pt-2 ms-lg-4 ms-3">
                <FaCoins style={{ color: "#FFD700", fontSize: "36px" }} />
                <h3 className={`m-0 ms-4 ps-lg-1 ${style.homeBalance}`}>
                  {/* {isLoading ? "---" : user.coins} */}
                  {isLoading
                    ? "-".repeat(String(user?.coins || 0).length)
                    : user?.coins}
                </h3>
                <RefreshCoins ref={1} />
              </div>
            </div>
          </div>
          <div className={style.seperator}></div>
          <div className="col-12 px-2 px-md-3 mt-1">
            <div
              className={`d-flex flex-column flex-md-row align-items-md-center justify-content-between ${style.availcont}`}
            >
              <div>
                <span className={style.availCoins}>
                  <span>Available Balance</span>
                </span>
                <div className="d-flex text-white mt-4 pt-2 ms-lg-4 ms-3">
                  <FaIndianRupeeSign
                    style={{ color: "#00C853", fontSize: "36px" }}
                  />
                  <h3
                    className={`m-0 ms-3 ms-md-4 ps-lg-1 ${style.homeBalance}`}
                  >
                    7878.0
                  </h3>
                </div>
              </div>
              <div>
                <button
                  className={style.homeWallet}
                  onClick={handleWalletClick}
                >
                  <GiWallet style={{ fontSize: "25px", marginRight: "7px" }} />
                  My Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
