import style from "./ExchangeCenterBody.module.css";
import ExcSwap from "../../../assets/gem-gifs/cap-exc-btn.gif";
import treasure from "../../../assets/exchange-center/treasure.gif";
import coin from "../../../assets/exchange-center/coin.gif";
import gem from "../../../assets/gem-gifs/gem-4.gif";

const ExchangeCenterBody = () => {
  const randCoin1 = Math.floor(Math.random() * (295 - 160 + 1)) + 160;
  const gemSelection1 = Math.floor(Math.random() * (36 - 27 + 1)) + 27;

  const randCoin2 = Math.floor(Math.random() * (350 - 180 + 1)) + 180;
  const gemSelection2 = Math.floor(Math.random() * (34 - 24 + 1)) + 24;

  const treasureCard = [
    {
      id: 1,
      randomCoin: randCoin1,
      reqGems: gemSelection1,
      treasureImgAlt:
        "Unlock treasure chest with Gems and turn them into coins for big rewards",
      treasureSwapAlt:
        "Easily exchange Gems for valuable VEs or reward points within seconds",
      treasureCoinAlt:
        "See exact coin value received from Gem exchanges in real time",
      treasureGemAlt:
        "Find out the exact number of Gems needed to unlock rare in-game items",
      paraMob1:
        "Watch ads to earn extra Gems, unlock Treasure, and convert them into",
      paraMob2: "For maximum Rewards every day.",
      paraOth1: "Get more Gems to unlock the Treasure and convert them into",
      paraOth2:
        "By simply Watching Ads, you can collect extra Gems, Exchange them and Maximize your Rewards.",
    },
    {
      id: 2,
      randomCoin: randCoin2,
      reqGems: gemSelection2,
      treasureImgAlt:
        "Gather Gems from treasure chest by viewing ads and trade them into coins instantly",
      treasureSwapAlt:
        "Quickly trade Gems for premium VEs or exclusive points for top-tier rewards",
      treasureCoinAlt:
        "View how many coins your Gems are worth with dynamic conversion rates",
      treasureGemAlt:
        "Learn the Gem cost to access premium-level rewards and bonus content",
      paraMob1: "Watch ads, gather Gems, and turn them into  ",
      paraMob2: "To unlock bigger rewards for free instantly online today.",
      paraOth1:
        "Collect Gems every day, discover secret Treasures, and Quickly turn into",
      paraOth2:
        "Simply watch Ads to earn extra Gems, trade them, and Increase your Rewards Instantly.",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        {treasureCard.map((card) => (
          <div
            key={card.id}
            className={`${card.id === 2 ? "mt-5 pt-sm-2 mt-lg-3 pt-lg-3" : ""}`}
          >
            <div
              className={`${style.wholeTresCont} ${
                card.id === 2 ? "mt-0" : ""
              }`}
            >
              <div className="d-flex align-items-center">
                <div className={style.treasureImgCont}>
                  <img
                    className={style.treasureImg}
                    loading="lazy"
                    src={treasure}
                    alt={card.treasureImgAlt}
                  />
                </div>
                <div className={style.wholeContentCont}>
                  <div className="py-1">
                    <h3 className={style.tresFrstHds}>
                      Watch{" "}
                      <span style={{ color: "#007bff", marginLeft: "4px" }}>
                        Ad
                      </span>{" "}
                    </h3>
                    <h4 className={style.tresSrstHds}>
                      Exchange{" "}
                      <span className={style.tresSSubRefGem}>Gems</span>{" "}
                      <img
                        className={style.tresExcSwapImg}
                        loading="lazy"
                        src={ExcSwap}
                        alt={card.treasureSwapAlt}
                      />{" "}
                      <span className={style.tresSSubRefVes}>VEs</span>
                    </h4>
                  </div>

                  <p className={`${style.tresPara} ${style.tresMob}`}>
                    {card.paraMob1}
                    <span className={style.tresCoinCont}>
                      <img
                        className={`${style.tresCoinImg} ${
                          card.id === 2 ? style.tresCoinImg2 : ""
                        }`}
                        loading="lazy"
                        src={coin}
                        alt={card.treasureCoinAlt}
                      />{" "}
                    </span>{" "}
                    <span className={style.tresCoinValue}>
                      {card.randomCoin} Coins.
                    </span>{" "}
                    {card.paraMob2}
                  </p>

                  <p className={`${style.tresPara} ${style.tresOth}`}>
                    {card.paraOth1}
                    <span className={style.tresCoinCont}>
                      <img
                        className={style.tresCoinImg}
                        loading="lazy"
                        src={coin}
                        alt={card.treasureCoinAlt}
                      />{" "}
                    </span>{" "}
                    <span className={style.tresCoinValue}>
                      {card.randomCoin} Coins.
                    </span>{" "}
                    {card.paraOth2}
                  </p>
                </div>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center ${style.reqGemCont}`}
              >
                <img
                  className={style.tresGemImg}
                  loading="lazy"
                  src={gem}
                  alt={card.treasureGemAlt}
                />
                <p className={style.tresReqGem}>{card.reqGems}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExchangeCenterBody;
