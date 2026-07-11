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
import RewardSections from "../../RewardSections/RewardSections";
import QuickLinks from "../../RewardSections/QuickLinks/QuickLinks";
import RewardArrow from "../CommonComponents/RewardArrow";
import LeaderboardBanner from "../../RewardSections/Leaderboard/LeaderboardBanner";
import SupportBanner from "../Support/SupportBanner";
import BonusBanner from "./Bonus/BonusBanner";
import SecFooter from "../CommonComponents/SecFooter";
import MiningBanner from "../Mining/MiningBanner";
import ContributionBanner from "../Contribution/ContributionBanner";
import StakingBanner from "../Staking/StakingBanner";
import HomeHeading from "../CommonComponents/HomeHeading";
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

        {/* Rewards Sections */}
        <div className="mb-3">
          <h3 className={`pb-1 ${style.HomeEarnpara}`}>Features:</h3>
          <RewardSections />
        </div>

        {/* daily bonus */}
        <HomeHeading title={"Daily Bonus"}>
          <DailyBonusBanner />
        </HomeHeading>

        {/* Tap and Earn */}
        <HomeHeading title={"Tap & Earn"}>
          <div className="row justify-content-between px-2 mx-md-2 mx-lg-3">
            <div className="col-12 col-md-12 col-lg-5 p-0">
              <TapEarnBanner />
            </div>

            <div className="col-12 col-md-12 col-lg-5 p-0 mt-4 pt-2 pt-md-3 mt-lg-0 pt-lg-0">
              <TapToken />
            </div>
          </div>
        </HomeHeading>

        {/* mining */}
        <HomeHeading title={"Mine & Earn"}>
          <MiningBanner />
        </HomeHeading>

        {/* staking */}
        <HomeHeading title={"Stake & Earn"}>
          <StakingBanner />
        </HomeHeading>

        {/* contribution section */}
        <HomeHeading title={"Contribution"}>
          <ContributionBanner />
        </HomeHeading>

        {/* bonus section */}
        <HomeHeading title={"Bonus VEs"}>
          <BonusBanner />
        </HomeHeading>

        {/* task */}
        <HomeHeading title={"Do Tasks & Get Paid"}>
          <div className="row justify-content-between align-items-stretch mt-2 mt-lg-3 mx-md-2 mx-lg-3">
            {/* CAPTCHA */}
            <div className="col-12 col-md-12 col-lg-5 mt-2 mt-lg-0 mx-1 mx-md-0">
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

                <div
                  className={`${style.taskCardAction} ${style.captchaAction}`}
                >
                  Start Task
                  <FaArrowRight className={style.taskCardArrow} />
                </div>
              </div>
            </div>

            {/* EXCHANGE */}
            <div className="col-12 col-md-12 col-lg-5 pt-2 mt-4 mt-lg-0 pt-lg-0 mx-1 mx-md-0">
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
        </HomeHeading>

        {/* watch ad */}
        <HomeHeading title={"Watch ADs & Earn"}>
          <WatchAdBanner />
        </HomeHeading>

        {/* leaderboard  */}
        <HomeHeading title={"Leaderboard"}>
          <LeaderboardBanner />
        </HomeHeading>

        {/* reffer section */}
        <HomeHeading title={"Refer & Earn"}>
          <ReferralEntryCard />
        </HomeHeading>

        {/* giveaway section */}
        <HomeHeading title={"Giveaway Code"}>
          <div className="row justify-content-around mt-1 ">
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
                      Enter special giveaway codes and unlock exciting VEs
                      rewards instantly.
                    </p>

                    <div className={style.rewardCTA}>
                      Enter Giveaway
                      <RewardArrow />
                    </div>
                  </div>

                  <RiHandCoinFill
                    className={`d-none d-md-inline-block ${style.rewardClaimIcon}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </HomeHeading>

        {/* Quick Links */}
        <p className={`pt-2 mb-0 ${style.HomeEarnpara}`}> Upcoming Features:</p>
        <div className="">
          <QuickLinks />
        </div>

        {/* customer support */}
        <HomeHeading title={"Contact Us"}>
          <SupportBanner />
        </HomeHeading>

        {/* follow & Earn */}
        <HomeHeading title={"Follow & Earn"}>
          <div className="row justify-content-around mx-sm-3 mx-lg-0">
            <div className="col-12 col-lg-12 mx-lg-3 ps-lg-3 pe-lg-5 px-0 mt-1 pt-1 px-1 px-md-0">
              {follows.map((follow, idx) => (
                <div key={idx} className={style.socialTaskCard}>
                  {/* LEFT SIDE */}
                  <div className={style.socialTaskLeft}>
                    <div
                      className={style.socialLogoBox}
                      onClick={() =>
                        window.open(
                          follow.link,
                          "_blank",
                          "noopener,noreferrer",
                        )
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
        </HomeHeading>

        {/* home footer */}
        <SecFooter
          mt={0}
          mb={30}
          name={"Rewards Policies"}
          link={"/help-center"}
        />
      </div>
    </div>
  );
};
export default HomeEarn;
