// import style from "./ExchangeCenterBody.module.css";
// import excSwap from "../../../assets/gem-gifs/cap-exc-btn.webm";
// // import treasure from "../../../assets/exchange-center/treasure.gif";
// import treasure from "../../../assets/exchange-center/treasure.webm";
// import coin from "../../../assets/exchange-center/coin.webm";
// import gem from "../../../assets/gem-gifs/gem-4.webm";
// import Gems from "../../CommonComponents/Gems";

// const ExchangeCenterBody = () => {
//   const randCoin1 = Math.floor(Math.random() * (295 - 160 + 1)) + 150;
//   const gemSelection1 = Math.floor(Math.random() * (36 - 27 + 1)) + 28;

//   const randCoin2 = Math.floor(Math.random() * (350 - 220 + 1)) + 160;
//   const gemSelection2 = Math.floor(Math.random() * (34 - 24 + 1)) + 26;

//   const randCoin3 = Math.floor(Math.random() * (350 - 230 + 1)) + 150;
//   const gemSelection3 = Math.floor(Math.random() * (34 - 24 + 1)) + 28;

//   const treasureCard = [
//     {
//       id: 1,
//       randomCoin: randCoin1,
//       reqGems: gemSelection1,
//       paraMob1:
//         "Watch ads to earn extra Gems, unlock Treasure, and convert them into",
//       paraMob2: "For maximum Rewards every day.",
//       paraOth1: "Get more Gems to unlock the Treasure and convert them into",
//       paraOth2:
//         "By simply Watching Ads, you can collect extra Gems, Exchange them and Maximize your Rewards.",
//     },
//     {
//       id: 2,
//       randomCoin: randCoin3,
//       reqGems: gemSelection3,
//       paraMob1: "Watch ads, gather Gems, and turn them into  ",
//       paraMob2: "To unlock bigger rewards for free instantly online today.",
//       paraOth1:
//         "Collect Gems every day, discover secret Treasures, and Quickly turn into",
//       paraOth2:
//         "Simply watch Ads to earn extra Gems, trade them, and Increase your Rewards Instantly.",
//     },
//     {
//       id: 3,
//       randomCoin: randCoin2,
//       reqGems: gemSelection2,
//       paraMob1:
//         "Watch ads to earn extra Gems, unlock Treasure, and convert them into",
//       paraMob2: "For maximum Rewards every day.",
//       paraOth1: "Get more Gems to unlock the Treasure and convert them into",
//       paraOth2:
//         "By simply Watching Ads, you can collect extra Gems, Exchange them and Maximize your Rewards.",
//     },
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="container pt-3 mb-5">
//         {treasureCard.map((card) => (
//           <div
//             key={card.id}
//             className={`${card.id === 2 || card.id === 3 ? "mt-5 pt-sm-2 mt-lg-3 pt-lg-3" : ""}`}
//           >
//             <div
//               className={`${style.wholeTresCont} ${
//                 card.id === 2 || card.id === 3 ? "mt-0" : ""
//               }`}
//             >
//               <div className="d-flex align-items-center">
//                 <div className={style.treasureImgCont}>
//                   <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className={style.treasureImg}
//                   >
//                     <source src={treasure} type="video/webm" />
//                     Update your browser or Use Google Chrome.
//                   </video>
//                 </div>
//                 <div className={style.wholeContentCont}>
//                   <div className="py-1">
//                     <h3 className={style.tresFrstHds}>
//                       Watch{" "}
//                       <span style={{ color: "#007bff", marginLeft: "4px" }}>
//                         Ad
//                       </span>{" "}
//                     </h3>
//                     <h4 className={style.tresSrstHds}>
//                       Exchange{" "}
//                       <span className={style.tresSSubRefGem}>Gems</span>{" "}
//                       <div
//                         className="d-inline-block"
//                         style={{ position: "relative" }}
//                       >
//                         <video
//                           autoPlay
//                           loop
//                           muted
//                           playsInline
//                           className={style.tresExcSwapImg}
//                         >
//                           <source src={excSwap} type="video/webm" />
//                           Update your browser or Use Google Chrome.
//                         </video>
//                       </div>
//                       <span className={style.tresSSubRefVes}>VEs</span>
//                     </h4>
//                   </div>

//                   <p className={`${style.tresPara} ${style.tresMob}`}>
//                     {card.paraMob1}
//                     <span className={style.tresCoinCont}>
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className={`${style.tresCoinImg} ${
//                           card.id === 2 ? style.tresCoinImg2 : ""
//                         }`}
//                       >
//                         <source src={coin} type="video/webm" />
//                         Update your browser or Use Google Chrome.
//                       </video>
//                     </span>{" "}
//                     <span className={style.tresCoinValue}>
//                       {card.randomCoin} Coins.
//                     </span>{" "}
//                     {card.paraMob2}
//                   </p>

//                   <p className={`${style.tresPara} ${style.tresOth}`}>
//                     {card.paraOth1}
//                     <span className={style.tresCoinCont}>
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className={style.tresCoinImg}
//                       >
//                         <source src={coin} type="video/webm" />
//                         Update your browser or Use Google Chrome.
//                       </video>
//                     </span>{" "}
//                     <span className={style.tresCoinValue}>
//                       {card.randomCoin} Coins.
//                     </span>{" "}
//                     {card.paraOth2}
//                   </p>
//                 </div>
//               </div>
//               <div
//                 className={`d-flex justify-content-center align-items-center ${style.reqGemCont}`}
//               >
//                 <Gems />

//                 {/* <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className={style.tresGemImg}
//                 >
//                   <source src={gem} type="video/webm" />
//                   Update your browser or Use Google Chrome.
//                 </video> */}
//                 <p className={style.tresReqGem}>{card.reqGems}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ExchangeCenterBody;

import { useEffect, useState } from "react";
import axios from "axios";

import style from "./ExchangeCenterBody.module.css";
import excSwap from "../../../assets/gem-gifs/cap-exc-btn.webm";
import treasure from "../../../assets/exchange-center/treasure.webm";
import coin from "../../../assets/exchange-center/coin.webm";

import Gems from "../../CommonComponents/Gems";
import { useList } from "../../../Context/ContextStore";
import { showError, showSuccess } from "../../../utils/Toast";

const ExchangeCenterBody = () => {
  const { user, setIsLoading } = useList();

  const [offers, setOffers] = useState([]);

  const [loadingCard, setLoadingCard] = useState(null);

  // ------------------------
  // FETCH OFFERS
  // ------------------------

  const fetchOffers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/exchange/offers`,
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
      showError("Failed to load exchange offers");
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchOffers();
    }
  }, [user]);

  // ------------------------
  // CLAIM EXCHANGE
  // ------------------------

  const handleExchange = async (cardId) => {
    try {
      setLoadingCard(cardId);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/exchange/claim`,

        { cardId },

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      showSuccess(`You earned ${res.data.coinsEarned} VEs`);

      fetchOffers();
    } catch (err) {
      showError(err.response?.data || "Exchange failed");
    } finally {
      setLoadingCard(null);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container pt-3 mb-5">
        {offers.map((card) => (
          <div
            key={card.cardId}
            className={`${
              card.cardId === 2 || card.cardId === 3
                ? "mt-5 pt-sm-2 mt-lg-3 pt-lg-2"
                : ""
            }`}
          >
            <div className={style.wholeTresCont}>
              <div className="d-flex align-items-center">
                <div className={style.treasureImgCont}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={style.treasureImg}
                  >
                    <source src={treasure} type="video/webm" />
                  </video>
                </div>

                <div className={style.wholeContentCont}>
                  <div className="py-1">
                    <h3 className={style.tresFrstHds}>
                      Watch{" "}
                      <span style={{ color: "#007bff", marginLeft: "4px" }}>
                        Ad
                      </span>
                    </h3>

                    <h4 className={style.tresSrstHds}>
                      Exchange{" "}
                      <span className={style.tresSSubRefGem}>Gems</span>
                      <div
                        className="d-inline-block"
                        style={{ position: "relative" }}
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={style.tresExcSwapImg}
                        >
                          <source src={excSwap} type="video/webm" />
                        </video>
                      </div>
                      <span className={style.tresSSubRefVes}>VEs</span>
                    </h4>
                  </div>

                  <p className={`${style.tresPara} ${style.tresMob}`}>
                    Unlock this treasure and earn
                    <span className={style.tresCoinCont}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={style.tresCoinImg}
                      >
                        <source src={coin} type="video/webm" />
                      </video>
                    </span>
                    <span className={style.tresCoinValue}>
                      {card.coins} VEs{" "}
                    </span>
                    by exchanging gems, Collect Gems every day & discover
                    Treasures.
                  </p>

                  <p className={`${style.tresPara} ${style.tresOth}`}>
                    {card.cardId === 1
                      ? "Collect Gems every day, discover secret Treasures, and Quickly turn into"
                      : "Collect Gems from ads and convert them into"}
                    <span className={style.tresCoinCont}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={style.tresCoinImg}
                      >
                        <source src={coin} type="video/webm" />
                      </video>
                    </span>
                    <span className={style.tresCoinValue}>
                      {card.coins} VEs
                    </span>{" "}
                    instantly.{" "}
                    {card.cardId === 2
                      ? "Simply watch Ads to earn extra Gems, trade them, and Increase your Rewards Instantly."
                      : "By simply Watching Ads, you can collect extra gems."}{" "}
                    {card.cardId === 3 && "For maximum Rewards every day."}
                  </p>
                </div>
              </div>

              <div
                className={`d-flex justify-content-center align-items-center ${style.reqGemCont}`}
              >
                <button
                  // className={style.exchangeBtn}
                  className={style.tresReqGem}
                  onClick={() => handleExchange(card.cardId)}
                  disabled={loadingCard === card.cardId}
                >
                  <Gems />
                  {loadingCard === card.cardId
                    ? "Processing..."
                    : card.gemsRequired}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangeCenterBody;
