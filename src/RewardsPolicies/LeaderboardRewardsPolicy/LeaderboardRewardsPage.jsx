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
      cTitle={"earning / leaderboard-rewards"}
      badge="Leaderboard"
      hTitle="Leaderboard Rewards"
      hText="This page explains how leaderboard competitions work, how weekly rankings are calculated and finalized, how ties are handled, and when eligible winners receive leaderboard rewards after fair-play verification."
      metaInfo={[
        { title: "Effective Date", value: "May20, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Leaderboard rewards are based on official weekly ranking, valid activity, published scoring rules, and fair-play verification.",
        "Rankings may update during the competition period in real time, but they become official only after the event closes and the final verification window is completed.",
      ]}
      supportTitle={["Support details", "Ranking review"]}
      supportDesc={[
        "Users who believe a leaderboard score, rank, or result was recorded incorrectly may contact support for review based on official event logs and scoring records.",
        "After the event closes, final outcomes are confirmed through system verification so that eligible winners can receive rewards fairly.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaTrophy} title="How it works" />
        <p>
          Leaderboard rewards are based on user performance during the active
          weekly competition period. During the event, rankings may update as
          eligible activity is recorded under the platform’s scoring rules.
        </p>
        <p>
          After the event closes, the platform completes a fair-play and scoring
          review before finalizing official rankings and issuing eligible
          rewards.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Ranking rules" />
        <ul>
          <li>
            Leaderboard periods are weekly unless a different event period is
            announced for a specific competition.
          </li>
          <li>
            Displayed rankings may update during the event, but official
            rankings are finalized only after the competition closes and the
            verification review is completed.
          </li>
          <li>
            Reward outcomes depend on final rank position, event eligibility,
            and official system scoring records.
          </li>
          <li>
            In case of a tie, the user who reached the qualifying score first
            will be ranked higher.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial engagement, bot usage, fake activity, exploit behavior,
            multiple accounts, or attempts to manipulate leaderboard outcomes
            are not allowed.
          </li>
          <li>
            We conduct a fair-play review after each event to protect
            leaderboard integrity and confirm that final rankings reflect valid
            activity.
          </li>
          <li>
            Where invalid activity is confirmed, the platform may remove scores,
            adjust rankings, disqualify entries, or restrict reward eligibility
            under platform rules.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Leaderboard rewards are issued after final ranking verification so
          that winners are determined fairly and consistently. Once official
          results are confirmed, eligible winners receive rewards according to
          the final event standings.
        </p>
      </section>
    </LegalHero>
  );
};

export default LeaderboardRewardsPage;
