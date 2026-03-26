import { useNavigate } from "react-router-dom";
import style from "./TapNEarnBannerAbsc.module.css";
import { SiJsonwebtokens } from "react-icons/si";
import { FaHandPointer, FaCoins, FaArrowRight } from "react-icons/fa";
import { RxTokens } from "react-icons/rx";
import { showWarning } from "../../utils/Toast";

function TapEarnBannerAbsc({ hedding, para, navigateTo, val }) {
  const navigate = useNavigate();

  const goToTapEarn = () => {
    if (!val) {
      navigate(navigateTo);
      return;
    }
    showWarning("Tap & Earn is Currently Development available very soon...");
  };

  return (
    <div
      className={`${style.bannerCard} ${!val && style.bannerCardToken}`}
      onClick={goToTapEarn}
    >
      {/* floating coins */}
      <div className={style.coinParticles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={style.leftSection}>
        {val ? (
          <FaHandPointer className={style.tapIcon} />
        ) : (
          <RxTokens className={style.tapIcon} />
        )}
        <div className="text-center">
          <h3>{hedding}</h3>
          <p>{para}</p>
          <div className={style.rewardTag}>
            {val ? <FaCoins /> : <SiJsonwebtokens />}
            <span>{val ? "Unlimited Rewards" : "Exchange Rewards"}</span>
          </div>
          <div className="d-flex justify-content-center">
            <button className={style.openBtn}>
              {val ? "Start Earning" : "Exchange Now"}
              <FaArrowRight
                style={{ marginLeft: "10px" }}
                className={style.rewardArrow}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TapEarnBannerAbsc;
