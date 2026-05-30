import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUserPlus,
  FaCheckCircle,
  FaCoins,
  FaExclamationTriangle,
} from "react-icons/fa";

const WeeklyLeaderboardEntry = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"getting-started / weekly-leaderboard-entry"}
      badge="Leaderboard Entry"
      hTitle="Weekly Leaderboard Entry"
      hText="This page explains how the optional weekly leaderboard works, the current entry charge, how rewards are distributed, and the important rules users should review before joining."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 29, 2026" },
        { title: "Participation Type", value: "Optional weekly leaderboard" },
        { title: "Current Entry Charge", value: "250 VEs and 70 XP per week" },
      ]}
      fNoticeText={[
        "Weekly leaderboard participation is optional and is not required to use the standard VELOOP Rewards platform.",
        "The weekly leaderboard uses a recurring entry charge for each new participation cycle. Once a weekly entry is successfully activated, the credits used for that week are generally non-refundable unless the platform states otherwise.",
      ]}
      supportTitle={["Support details", "Leaderboard notice"]}
      supportDesc={[
        "Users should review the current weekly leaderboard rules, entry charge, prize structure, and timing before joining, and may contact support for clarification where needed.",
        "Leaderboard rewards, rank-based prize amounts, timing, and participation conditions may be updated over time based on platform operations, fairness controls, or feature changes.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead
          Icon={FaUserPlus}
          title="What weekly leaderboard entry means"
        />
        <p>
          The weekly leaderboard is an optional participation feature for users
          who want to compete in a rank-based reward event during the current
          weekly cycle. Users who choose to join are placed in the leaderboard
          for that week and may receive VE rewards based on their final rank.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Current entry charge" />
        <p>
          The current weekly leaderboard entry charge is 250 VEs and 70 XP for
          each weekly participation cycle. This charge uses in-platform credits
          and progression value already earned inside VELOOP Rewards and does
          not require a direct cash payment at the time of entry.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Key rules" />
        <ul>
          <li>
            Weekly leaderboard entry is optional and is not required for normal
            platform use.
          </li>
          <li>
            A new entry charge is required for each new weekly leaderboard cycle
            where the user chooses to participate.
          </li>
          <li>
            The leaderboard updates weekly, and final ranking is based on
            eligible activity recorded during that participation period.
          </li>
          <li>
            All eligible participants may receive a reward, while higher-ranked
            users receive higher VE prize amounts based on final rank.
          </li>
          <li>
            Weekly leaderboard timing, prize amounts, entry conditions, and
            activity rules may change based on platform operations, fairness
            controls, or feature updates.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="How rewards work" />
        <p>
          The weekly leaderboard uses rank-based VE rewards. Users with higher
          final ranks receive higher VE prize amounts, while all eligible
          participants may receive some reward at the end of the weekly cycle
          according to the currently supported prize structure.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaUserPlus} title="Why users may join" />
        <ul>
          <li>
            Compete for higher VE rewards through weekly rank-based
            participation.
          </li>
          <li>
            Receive some reward even without finishing at the top, where
            eligible under the current prize structure.
          </li>
          <li>
            Join only in the weeks where participation feels worthwhile to the
            user.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Weekly cycle" />
        <p>
          The leaderboard runs in weekly cycles and refreshes for the next
          period after the current cycle ends. Users who want to participate in
          a new weekly cycle must join again using the current weekly entry
          charge.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Users should join the weekly leaderboard only after reviewing the
          current entry charge, prize structure, and participation rules.
          Because entry activates participation for the current weekly cycle,
          the credits used for that week are generally non-refundable after
          successful entry unless the platform states otherwise.
        </p>
      </section>
    </LegalHero>
  );
};

export default WeeklyLeaderboardEntry;
