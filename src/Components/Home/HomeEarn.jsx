import style from "./HomeEarn.module.css";
import { TbDeviceTvOld } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import taskCaptchaImg from "../../assets/task-captcha-7.png";
import exchangeImg from "../../assets/exchange-center/exchange-1.png";
import facebookLogo from "../../assets/follow-facebook.png";
import telegramLogo from "../../assets/follow-telegram.png";
import youtubeLogo from "../../assets/follow-youtube.png";
import giveawayBanner from "../../assets/giveaway-banner-3.png";
import { GiProfit } from "react-icons/gi";

const HomeEarn = () => {
  const nums = [1, 2, 3, 4, 5];

  const navigate = useNavigate();

  const follows = [
    {
      name: "Facebook",
      logo: facebookLogo,
      link: "",
      altKey: "Follow us on Facebook for giveaway codes and rewards",
    },
    {
      name: "Telegram",
      logo: telegramLogo,
      link: "https://t.me/+k_cUrmYv1r45ZDBl",
      altKey: "Get exclusive reward codes on Telegram",
    },
    {
      name: "Telegram",
      logo: telegramLogo,
      link: "https://t.me/+k_cUrmYv1r45ZDBl",
      altKey: "Join our Telegram group for instant giveaway codes",
    },
    {
      name: "YouTube",
      logo: youtubeLogo,
      link: "https://youtube.com/@veloopwatchearn",
      altKey: "Subscribe to our YouTube channel for reward codes",
    },
  ];

  const watchBonus = [
    { id: 1, reqWatch: 1, doneWatch: "", bonusCoin: 15 },
    { id: 2, reqWatch: 5, doneWatch: "", bonusCoin: 60 },
    { id: 3, reqWatch: 9, doneWatch: "", bonusCoin: 100 },
    { id: 4, reqWatch: 13, doneWatch: "", bonusCoin: 140 },
    { id: 5, reqWatch: 18, doneWatch: "", bonusCoin: 200 },
    { id: 6, reqWatch: 20, doneWatch: "", bonusCoin: 250 },
  ];

  // for tier 1 countries
  const generateRandomCoinsT1 = () =>
    Math.floor(Math.random() * (200 - 49)) + 50;

  // for tier2 countries
  const generateRandomCoinsT2 = () =>
    Math.floor(Math.random() * (105 - 49)) + 50;

  const [coinValues, setCoinValues] = useState(
    nums.map(() => generateRandomCoinsT2())
  );

  const [available, setavailable] = useState(false); // change here

  const handleWatchAd = (index) => {
    if (available) {
      // and here for to change the coin value after claim the previous coins.
      // before it add a claim condition like after watch ad and postback then change whatch button
      //  to claim button and then claim and after claim the coin value will
      //  automatically update the coin update logic is already written
      const updatedCoins = [...coinValues];

      updatedCoins[index] = generateRandomCoinsT2();

      setCoinValues(updatedCoins);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#161827" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Bonus VEs : <span className={style.homeEarnTaskUnd}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
                  style={{ width: "42px" }}
                ></span>
              </p>
            </div>
            <p
              className="text-white mt-2 fw-medium"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Watch Ads and Earn
              Points (VEs) Instantly – Complete Tasks and Get Bonus Rewards.
              Trusted Globally for Earning Online.
            </p>
          </div>
          <div className="col-12 p-0 p-md-2">
            {watchBonus.map((bonus) => (
              <div key={bonus.id} className={style.bonusCont}>
                <div className={style.bonusinfoPointCont}>
                  <p className="m-0">
                    <span style={{ color: "#007bff", margin: "0px" }}>Ad</span>{" "}
                    Bonus
                  </p>
                  <span className={style.bonusCoin}>
                    + {bonus.bonusCoin}{" "}
                    <span style={{ color: "#fff", margin: "3px" }}>VEs</span>
                  </span>
                </div>
                <div className={style.bonusAdCount}>
                  <h4 className={style.bonusCount}>
                    0 /{" "}
                    <span className={style.bonusReqWatch}>
                      {bonus.reqWatch}
                    </span>{" "}
                  </h4>
                  <button>
                    <GiProfit className="me-2" />
                    Claim
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row ">
          <div className="col-12">
            <div className="mt-5">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Do Tasks & Get Paid :{" "}
                <span className={style.homeEarnTaskUnd}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
                  style={{ width: "42px" }}
                ></span>
              </p>
            </div>
            <p
              className="text-white mt-2 fw-medium"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Complete Task &
              Earn Money, Simple Tasks for Instant Pay.
            </p>
          </div>
        </div>
        <div className="row justify-content-evenly ">
          <div className="col-lg-4 col-10 mx-4 mb-3 mb-sm-0 mx-lg-0 mt-1">
            <div className={style.HomeEarnCard}>
              <img
                src={taskCaptchaImg}
                loading="lazy"
                alt="Solve captcha online and earn money easily by completing simple captcha tasks and get paid instantly"
                onClick={() => navigate("/captcha-tasks")}
              />
            </div>
          </div>
          <div className="col-lg-4 col-10 mx-4 mx-lg-0">
            <div className={style.HomeEarnCard}>
              <img
                src={exchangeImg}
                className={style.exchangeImg}
                loading="lazy"
                alt="Solve captcha online and earn money easily by completing simple captcha tasks and get paid instantly"
                onClick={() => navigate("/Exchange-Center")}
              />
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12">
            <div className="mt-5">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Watch ADs & Earn :
                <span className={style.homeEarnTaskUnd2}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd2}`}
                  style={{ width: "55px" }}
                ></span>
              </p>
            </div>
            <p
              className="text-white mt-2 fw-medium"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Watch Ads & Earn
              Real Cash, Best Reward Apps with Instant Withdrawal.
            </p>
          </div>
        </div>
        <div className="row text-white mx-sm-3 mx-lg-0 mt-4 pt-1 mb-4">
          <div className="col-12 p-0">
            {nums.map((_, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between mx-lg-5 px-lg-5 mb-5"
              >
                <div className="d-flex align-items-center">
                  <TbDeviceTvOld style={{ fontSize: "34px" }} />
                  <GiTwoCoins
                    className="ms-4 "
                    style={{ fontSize: "30px", color: "#ffd700" }}
                  />
                  <p className={style.HomeEarnCoins}>+{coinValues[idx]}</p>
                </div>
                <button
                  className={style.HomeEarnAdsBtn}
                  onClick={() => handleWatchAd(idx)}
                >
                  Watch AD
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="row  mb-lg-2">
          <div className="col-12">
            <div>
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Giveaway Code :<span className={style.homeEarnTaskUnd3}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd3}`}
                  style={{ width: "50px" }}
                ></span>
              </p>
            </div>
            <p
              className="text-white mt-2 fw-medium"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Enter giveaway code
              and earn cash.
            </p>
          </div>
        </div>

        <div className="row text-white justify-content-around">
          <div className="col-12 col-md-10 mb-3 pb-2 p-0 col-lg-9">
            <div className="ms-sm-3">
              <img
                src={giveawayBanner}
                className={style.giveBackImage}
                alt="Redeem giveaway code and earn instantly"
                onClick={() => navigate("/giveaway-code")}
              />
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 mt-3">
            <div>
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Follow & Earn :<span className={style.homeEarnTaskUnd3}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd3}`}
                  style={{ width: "50px" }}
                ></span>
              </p>
            </div>
            <p
              className="text-white mt-2 fw-medium"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Follow Us In Social
              Media & Earn Real Money, Get Paid To Do Simple Tasks.
            </p>
          </div>
        </div>
        <div className="row justify-content-around mx-sm-3 mx-lg-0">
          <div className="col-12 col-lg-10 mx-lg-3 px-lg-5 px-0 mt-4 pt-1 mb-4 text-white">
            {follows.map((follow, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between align-items-center mb-4"
              >
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      height: "65px",
                      width: "65px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={follow.logo}
                      className={style.homeFollowLogo}
                      alt={follow.altKey}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      onClick={() =>
                        window.open(
                          follow.link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    />
                  </div>
                  <div className="ms-2 ms-sm-3">
                    <p className={`my-1 ${style.homeFollowDetail}`}>
                      {follow.name}
                    </p>
                    <p
                      className={style.homeFollowDetail}
                      style={{ opacity: "0.7" }}
                    >
                      Earn 50 Coins.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className={`me-2 me-lg-0 ${style.homeFollowBtn}`}
                    onClick={() =>
                      window.open(follow.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeEarn;
