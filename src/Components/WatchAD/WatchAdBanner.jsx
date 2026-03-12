import { FaPlayCircle, FaCoins } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import style from "./WatchAdBanner.module.css";
import { useNavigate } from "react-router-dom";

const WatchAdBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center mt-2 pt-1 mb-5 pb-2">
      <div className="col-12 col-md-10 col-lg-11">
        <div
          className={style.watchAdsPremiumCard}
          onClick={() => navigate("/watch-Ads")}
        >
          {/* sparkle particles */}
          <span className={style.sparkle}></span>
          <span className={style.sparkle}></span>
          <span className={style.sparkle}></span>
          <span className={style.sparkle}></span>

          <div className={style.watchAdsContent}>
            <div className={style.watchAdsLeft}>
              <MdOndemandVideo className={style.watchAdsMainIcon} />

              <div className={style.watchAdsTextArea}>
                <h4 className={style.watchAdsTitle}>
                  Watch Ads & Earn Rewards
                </h4>

                <p className={style.watchAdsDesc}>
                  Watch short sponsored ads and instantly earn VE coins. Fast,
                  simple and trusted by thousands.
                </p>

                <div>
                  <button className={style.watchAdBtn}>Watch Ad</button>
                </div>

                <div className={style.watchAdsCounter}>
                  <FaCoins className={style.coinIcon} />
                  <span className={style.rewardCounter}>Upto +200 VEs</span>
                </div>
              </div>
            </div>

            <FaPlayCircle
              className={`d-none d-md-inline-block ${style.watchAdsArrow}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchAdBanner;
