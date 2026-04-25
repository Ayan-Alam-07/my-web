import { useEffect, useState } from "react";
import axios from "axios";

import { GiTwoCoins } from "react-icons/gi";
import { TbDeviceTvOld } from "react-icons/tb";

import style from "./WatchAd.module.css";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { useList } from "../../Context/ContextStore";
import { showError } from "../../utils/Toast";

const WatchAd = () => {
  const { user, setIsLoading } = useList();

  const [offers, setOffers] = useState([]);
  const [loadingSlot, setLoadingSlot] = useState(null);
  const [isWatchingAd, setIsWatchingAd] = useState(false);

  // ------------------------
  // FETCH OFFERS
  // ------------------------

  const fetchOffers = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        // `${import.meta.env.VITE_API_URL}/api/ad/offers`,
        `${import.meta.env.VITE_API_URL}/ad/offers`,

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setIsLoading(false);
      setOffers(res.data);
    } catch (err) {
      setIsLoading(false);
      showError("Failed to load ads");
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchOffers();
    }
  }, [user]);

  // ------------------------
  // WATCH AD
  // ------------------------

  const handleWatchAd = async (slot) => {
    if (isWatchingAd) return;

    try {
      setIsWatchingAd(true);
      setLoadingSlot(slot);

      // simulate ad network
      const adSuccess = await new Promise((resolve) => {
        setTimeout(() => resolve(false), 3000); // there the ad network provide the success code so that i send true or false according to the code
      });

      if (!adSuccess) {
        showError("Ad not completed"); // this will break the code her if the value above is false
        return;
      }

      const res = await axios.post(
        // `${import.meta.env.VITE_API_URL}/api/ad/watch`,
        `${import.meta.env.VITE_API_URL}/ad/watch`,
        {
          slot,
          adCompleted: true, // if this false coin not credited
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      // show reward toast
      showSuccess(`You earned ${res.data.coinsEarned} VEs`);

      // refresh offers
      fetchOffers();
    } catch (err) {
      showError(err.response?.data || "Ad failed");
    } finally {
      setLoadingSlot(null);
      setIsWatchingAd(false);
    }
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={13} navigation={"/Home"} />

      <div className="container">
        <div className="row px-2 mt-4 mb-4">
          {offers.map((offer) => (
            <div key={offer.slot} className="col-12 col-lg-10 mx-auto mb-4">
              <div className={style.adRewardCard}>
                {/* sparkle particles */}
                <span className={style.sparkle1}></span>
                <span className={style.sparkle2}></span>
                <div className={style.adRewardLeft}>
                  <div className={style.adIconBox}>
                    <TbDeviceTvOld className={style.adTvIcon} />
                  </div>

                  <div className={style.adRewardInfo}>
                    <p className={style.adRewardTitle}>Watch Ad & Earn</p>

                    <div className={style.adRewardCoins}>
                      <GiTwoCoins className={style.coinIcon} />

                      <span className={style.coinAmount}>+{offer.coins}</span>

                      <span className={style.coinLabel}>VEs</span>
                    </div>
                  </div>
                </div>

                <button
                  className={style.adWatchButton}
                  disabled={offer.cooldown > 0 || isWatchingAd}
                  onClick={() => handleWatchAd(offer.slot)}
                >
                  {loadingSlot === offer.slot
                    ? "Loading..."
                    : offer.cooldown > 0
                      ? `${offer.cooldown}s`
                      : "Watch Ad"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchAd;
