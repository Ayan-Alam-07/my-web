import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaTrophy,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const LeaderboardRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Leaderboard Rewards"
      hText="This page explains VELOOP Rewards leaderboard participation, weekly ranking periods, reward eligibility, ranking validation, and abuse-control rules."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Leaderboard rewards are based on relative weekly ranking and may depend on verified activity, score calculation rules, and anti-abuse review.",
        "Leaderboard positions are provisional until the applicable review, event close, and validation processes are completed.",
      ]}
      supportTitle={["Support details", "Ranking review"]}
      supportDesc={[
        "Users who believe leaderboard results were recorded incorrectly may contact support, subject to system logs and event validation rules.",
        "Final leaderboard outcomes will be determined by official platform records and fraud-review results.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaTrophy} title="How it works" />
        <p>
          Leaderboard rewards are based on weekly performance or ranking
          outcomes within the applicable competition period. Users may receive
          leaderboard rewards only if their activity remains valid and their
          ranking remains eligible after review.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Ranking rules" />
        <ul>
          <li>
            Leaderboard periods are weekly unless otherwise stated by the
            platform.
          </li>
          <li>
            Reward outcomes may depend on rank position, tie rules, event
            eligibility, and official system scoring.
          </li>
          <li>
            Displayed rankings may be adjusted after verification, correction,
            dispute review, or fraud detection.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial engagement, bot usage, fake activity, exploit behavior,
            multiple accounts, or manipulation attempts are prohibited.
          </li>
          <li>
            Invalid activity may result in score removal, rank adjustment,
            disqualification, reward reversal, or suspension.
          </li>
          <li>
            The platform may withhold leaderboard rewards pending review where
            suspicious conduct is detected.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Weekly leaderboard participation does not guarantee a reward merely
          because activity was recorded. Final eligibility depends on verified
          ranking, fair participation, and compliance with platform rules.
        </p>
      </section>
    </LegalHero>
  );
};

export default LeaderboardRewardsPage;
