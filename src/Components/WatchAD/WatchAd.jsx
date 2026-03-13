// import { useState, useEffect } from "react";
// import { GiTwoCoins } from "react-icons/gi";
// import { TbDeviceTvOld } from "react-icons/tb";
// import style from "./WatchAd.module.css";
// import CommonNavArr from "../CommonComponents/CommonNavArr";
// import { showError } from "../../utils/Toast";

// const WatchAd = () => {
//   const nums = [1, 2, 3, 4, 5, 6];

//   // --------------------------
//   // RANDOM COIN LOGIC
//   // --------------------------
//   const generateRandomCoins = () => {
//     const chance = Math.random();
//     if (chance < 0.02) {
//       return Math.floor(Math.random() * (61 - 50 + 1)) + 50;
//     }
//     return Math.floor(Math.random() * (49 - 15 + 1)) + 15;
//   };

//   // --------------------------
//   // LOCAL STORAGE COINS
//   // --------------------------
//   const getInitialCoins = () => {
//     const saved = localStorage.getItem("watchAdCoins");
//     if (saved) return JSON.parse(saved);
//     const coins = nums.map(() => generateRandomCoins());
//     localStorage.setItem("watchAdCoins", JSON.stringify(coins));
//     return coins;
//   };

//   const [coinValues, setCoinValues] = useState(getInitialCoins);

//   // --------------------------
//   // COOLDOWN
//   // --------------------------
//   const getInitialCooldowns = () => {
//     const saved = localStorage.getItem("watchAdCooldowns");
//     if (!saved) return Array(nums.length).fill(0);

//     const cooldownEndTimes = JSON.parse(saved);

//     return cooldownEndTimes.map((endTime) => {
//       const remaining = Math.floor((endTime - Date.now()) / 1000);
//       return remaining > 0 ? remaining : 0;
//     });
//   };

//   const [cooldowns, setCooldowns] = useState(getInitialCooldowns);

//   const [loadingIndex, setLoadingIndex] = useState(null);

//   // --------------------------
//   // TIMER
//   // --------------------------
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCooldowns((prev) => {
//         const updated = prev.map((t) => (t > 0 ? t - 1 : 0));

//         const stored = JSON.parse(localStorage.getItem("watchAdCooldowns"));
//         if (stored) {
//           const updatedStored = stored.map((time) =>
//             time > Date.now() ? time : 0,
//           );
//           localStorage.setItem(
//             "watchAdCooldowns",
//             JSON.stringify(updatedStored),
//           );
//         }
//         return updated;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // --------------------------
//   // WATCH AD
//   // --------------------------
//   const handleWatchAd = async (index) => {
//     if (cooldowns[index] > 0 || loadingIndex !== null) return;

//     try {
//       setLoadingIndex(index);

//       // 🚀 Open ad network here
//       // await showRewardedAd();

//       // TEMP simulation (remove later)
//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       // Example backend verification
//       const adSuccess = true; // this will come from backend

//       if (adSuccess) {
//         const updatedCoins = [...coinValues];
//         const newCoin = generateRandomCoins();
//         updatedCoins[index] = newCoin;
//         setCoinValues(updatedCoins);
//         localStorage.setItem("watchAdCoins", JSON.stringify(updatedCoins));

//         // start cooldown
//         const newCooldowns = [...cooldowns];
//         newCooldowns[index] = 45;
//         setCooldowns(newCooldowns);

//         // store cooldown end timestamp
//         const savedCooldowns =
//           JSON.parse(localStorage.getItem("watchAdCooldowns")) ||
//           Array(nums.length).fill(0);

//         savedCooldowns[index] = Date.now() + 45000;

//         localStorage.setItem(
//           "watchAdCooldowns",
//           JSON.stringify(savedCooldowns),
//         );
//       }

//       // ❗ If backend says ad not watched
//       // nothing happens, coins remain same
//     } catch (err) {
//       showError("Ad Load Failed");
//     } finally {
//       setLoadingIndex(null);
//     }
//   };

//   return (
//     <div className="container-fluid px-0">
//       <CommonNavArr id={13} navigation={"/Home"} />

//       <div className="container">
//         <div className="row px-2 mt-4 pt-1 mb-4 mx-2">
//           {nums.map((_, idx) => {
//             const isRare = coinValues[idx] >= 50;

//             return (
//               <div
//                 key={idx}
//                 className="col-12 col-lg-10 mx-auto pb-md-3 mb-4 pb-2 pb-lg-1"
//               >
//                 <div
//                   className={`${style.adRewardCard} ${isRare ? style.rareReward : ""} ${cooldowns[idx] > 0 ? style.coolDownPad : ""}`}
//                 >
//                   {/* sparkle particles */}
//                   <span className={style.sparkle1}></span>
//                   <span className={style.sparkle2}></span>

//                   <div className={style.adRewardLeft}>
//                     <div className={style.adIconBox}>
//                       <TbDeviceTvOld className={style.adTvIcon} />
//                     </div>

//                     <div className={style.adRewardInfo}>
//                       <p className={style.adRewardTitle}>Watch Ad & Earn</p>

//                       <div className={`${style.adRewardCoins}`}>
//                         <GiTwoCoins className={style.coinIcon} />

//                         <span className={style.coinAmount}>
//                           +{coinValues[idx]}
//                         </span>

//                         <span className={style.coinLabel}>VEs</span>
//                       </div>

//                       {/* cooldown progress */}
//                       {cooldowns[idx] > 0 && (
//                         <div className={style.cooldownBar}>
//                           <div
//                             className={style.cooldownFill}
//                             style={{
//                               width: `${(cooldowns[idx] / 45) * 100}%`,
//                             }}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <button
//                     className={style.adWatchButton}
//                     disabled={cooldowns[idx] > 0 || loadingIndex !== null}
//                     onClick={() => handleWatchAd(idx)}
//                   >
//                     {loadingIndex === idx
//                       ? "Loading..."
//                       : cooldowns[idx] > 0
//                         ? `${cooldowns[idx]}s`
//                         : "Watch Ad"}
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchAd;

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
        `${import.meta.env.VITE_API_URL}/api/ad/offers`,

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
        `${import.meta.env.VITE_API_URL}/api/ad/watch`,
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
