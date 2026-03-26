import style from "./HomeEarn.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaKeyboard,
  FaExchangeAlt,
  FaGift,
  FaArrowRight,
} from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import giveawayBanner from "../../assets/giveaway-banner-3.webp";
import facebookLogo from "../../assets/home-follow/follow-facebook.webp";
import telegramLogo from "../../assets/home-follow/follow-telegram.webp";
import youtubeLogo from "../../assets/home-follow/follow-youtube.webp";
import ReferralBanner from "../Reffer/RefferBanner";
import ReferralEntryCard from "../Reffer/ReferralEntryCard";
import WatchAdBanner from "../WatchAD/WatchAdBanner";
import DailyBonusBanner from "../DailyBonus/DailyBonusBanner";
import TapEarnBanner from "../TapNEarn/TapNEarnBanner";
import TapToken from "../TapNEarn/TapToken";

const HomeEarn = () => {
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

  return (
    <div className="container-fluid" style={{ backgroundColor: "#161827" }}>
      <div className="container">
        <div className="mt-5 pt-2">
          <ReferralBanner />
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mt-2">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Daily Bonus : <span className={style.homeEarnTaskUnd}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
                  style={{ width: "42px" }}
                ></span>
              </p>
            </div>
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Complete Tasks and
              Get Bonus Rewards.{" "}
              <span className="d-none d-md-inline-block">
                Trusted Globally for Earning Online.
              </span>
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-2 mb-3 pb-1 px-2">
          <div className="col-12 col-md-11 col-lg-10 p-0">
            <DailyBonusBanner />
          </div>
        </div>

        {/* Tap and Earn */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mt-2">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Tap & Earn : <span className={style.homeEarnTaskUnd}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
                  style={{ width: "42px" }}
                ></span>
              </p>
            </div>
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Tap repeatedly to
              earn instant VEs and rewards
            </p>
          </div>
        </div>
        <div className="row justify-content-evenly mt-2 mb-4 pb-3 px-2">
          <div className="col-12 col-md-10 col-lg-4 p-0">
            <TapEarnBanner />
          </div>

          <div className="col-12 col-md-10 col-lg-4 p-0">
            <TapToken />
          </div>
        </div>

        {/* bonus section */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mt-2">
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Bonus VEs : <span className={style.homeEarnTaskUnd}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
                  style={{ width: "42px" }}
                ></span>
              </p>
            </div>
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Complete Tasks and
              Get Bonus Rewards.{" "}
              <span className="d-none d-md-inline-block">
                Trusted Globally for Earning Online.
              </span>
            </p>
          </div>
          <div className="row justify-content-center my-3">
            <div
              className="col-12 col-md-11 p-0"
              onClick={() => navigate("/watchAd-bonus")}
            >
              <div className={style.bonusFeatureCard}>
                <div className={style.bonusFeatureContent}>
                  <h4 className={style.bonusFeatureTitle}>
                    Watch Ads <span style={{ color: "#fff" }}>To</span> Claim
                    Bonus
                  </h4>

                  <p className={style.bonusFeatureDesc}>
                    Complete quick ad views and unlock bonus VEs instantly.
                  </p>

                  <div className={style.bonusFeatureBtn}>Claim Your Bonus</div>
                </div>

                <div className={style.bonusIconWrapper}>
                  <FaGift className={style.bonusIcon} />
                </div>
              </div>
            </div>
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
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Complete Task &
              Earn Money
              <span className="d-none d-md-inline-block">
                , Simple Tasks for Instant Pay.
              </span>
            </p>
          </div>
        </div>

        <div className="row justify-content-evenly align-items-stretch mt-2 mt-lg-3 pb-3 pb-lg-2">
          {/* CAPTCHA */}
          <div className="col-lg-4 col-12 col-md-9 mt-2 mt-lg-0 mx-1 mx-md-4 mx-lg-0">
            <div
              className={style.taskCard}
              onClick={() => navigate("/captcha-tasks")}
            >
              <div className={`${style.taskCardIcon} ${style.captchaIcon}`}>
                <FaKeyboard />
              </div>

              <h5 className={style.taskCardTitle}>Captcha Tasks</h5>

              <p className={style.taskCardDesc}>
                Solve simple captchas and earn Gems rewards instantly.
              </p>

              <div className={`${style.taskCardAction} ${style.captchaAction}`}>
                Start Task
                <FaArrowRight className={style.taskCardArrow} />
              </div>
            </div>
          </div>

          {/* EXCHANGE */}
          <div className="col-lg-4 col-12 col-md-9 pt-2 mt-4 mt-lg-0 pt-lg-0 mx-1 mx-md-4 mx-lg-0">
            <div
              className={style.taskCard}
              onClick={() => navigate("/exchange-center")}
            >
              <div className={`${style.taskCardIcon} ${style.exchangeIcon}`}>
                <FaExchangeAlt />
              </div>

              <h5 className={style.taskCardTitle}>Exchange Center</h5>

              <p className={style.taskCardDesc}>
                Convert gems into VEs to redeem rewards and gift cards.
              </p>

              <div
                className={`${style.taskCardAction} ${style.exchangeAction}`}
              >
                Open Center
                <FaArrowRight className={style.taskCardArrow} />
              </div>
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
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Watch Ads & Earn
              Real Cash with Instant Withdrawal.
            </p>
          </div>
        </div>
        <WatchAdBanner />

        {/* reffer section */}
        <div className="row  mt-3 mb-lg-2">
          <div className="col-12">
            <div>
              <p className={`m-0 ${style.HomeEarnpara}`}>
                Refer & Earn :<span className={style.homeEarnTaskUnd3}></span>{" "}
                <span
                  className={`d-block mt-1 ${style.homeEarnTaskUnd3}`}
                  style={{ width: "50px" }}
                ></span>
              </p>
            </div>
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Invite your friends
              & Earn Money.
            </p>
          </div>
        </div>
        <ReferralEntryCard />

        {/* giveaway section */}
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
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Enter giveaway code
              and earn cash.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mb-3 mt-1">
          <div className="col-12 col-md-11 mb-3 pb-2 p-0">
            <div
              className={style.rewardGiveawayCard}
              onClick={() => navigate("/giveaway-code")}
            >
              {/* background image */}
              <img
                loading="lazy"
                src={giveawayBanner}
                className={style.rewardGiveawayBg}
                alt="Exclusive giveaway section where users can earn exciting rewards"
              />

              {/* sparkle particles */}
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>
              <span className={style.rewardSparkle}></span>

              {/* glass overlay content */}
              <div className={style.rewardGiveawayContent}>
                <div className={style.rewardIconBox}>
                  <FaGift />
                </div>

                <div className={style.rewardTextArea}>
                  <h4 className={style.rewardTitle}>
                    Exclusive Giveaway Rewards
                  </h4>

                  <p className={style.rewardDesc}>
                    Enter special giveaway codes and unlock exciting VEs rewards
                    instantly.
                  </p>

                  <div className={style.rewardCTA}>
                    Enter Giveaway
                    <FaArrowRight className={style.rewardArrow} />
                  </div>
                </div>

                <RiHandCoinFill
                  className={`d-none d-md-inline-block ${style.rewardClaimIcon}`}
                />
              </div>
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
            <p className={`text-white mt-2 fw-medium ${style.HomeEarnDesc}`}>
              <span className="text-danger fw-bold">*</span> Follow Us In Social
              Media & Earn Real Money.
            </p>
          </div>
        </div>
        <div className="row justify-content-around mx-sm-3 mx-lg-0">
          <div className="col-12 col-lg-11 mx-lg-3 px-lg-5 px-0 mt-3 pt-1 mb-4">
            {follows.map((follow, idx) => (
              <div key={idx} className={style.socialTaskCard}>
                {/* LEFT SIDE */}
                <div className={style.socialTaskLeft}>
                  <div
                    className={style.socialLogoBox}
                    onClick={() =>
                      window.open(follow.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    <img
                      loading="lazy"
                      src={follow.logo}
                      alt={follow.altKey}
                      className={style.socialLogoImg}
                    />
                  </div>
                  <div className={style.socialTaskInfo}>
                    <p className={style.socialTaskTitle}>{follow.name}</p>
                    <p className={style.socialTaskReward}>
                      Earn <span>50 VEs</span>
                    </p>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <button
                  className={style.socialFollowBtn}
                  onClick={() =>
                    window.open(follow.link, "_blank", "noopener,noreferrer")
                  }
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeEarn;
