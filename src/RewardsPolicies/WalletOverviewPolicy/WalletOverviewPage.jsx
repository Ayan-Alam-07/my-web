import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaWallet,
  FaListAlt,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";

const WalletOverviewPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"wallet / wallet-overview"}
      badge="Rewards Dashboard"
      hTitle="Rewards Dashboard Overview"
      hText="This page explains what the VELOOP Rewards dashboard shows, how users can view reward balances and activity, and how supported balance records are reviewed and maintained."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Feature Type", value: "Internal rewards dashboard" },
        { title: "Balance Nature", value: "Virtual in-platform reward values" },
      ]}
      fNoticeText={[
        "Displayed balances are internal platform records used for rewards, feature access, progression, and supported redemption flows.",
        "To protect users and platform integrity, balances may be reviewed or temporarily limited where technical errors, verification issues, or security concerns are detected.",
      ]}
      supportTitle={["Support details", "Wallet notice"]}
      supportDesc={[
        "Users with balance-related concerns should include their registered account details, relevant screenshots, and a short explanation of the issue when contacting support.",
        "Where redemption is supported, requests are processed under the platform’s normal verification and approval process.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaWallet} title="What the dashboard shows" />
        <p>
          The VELOOP Rewards dashboard may display supported balances such as
          VEs, Gems, XP, Tokens, Spins, and other reward-related values,
          depending on the features currently available on the platform.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaListAlt} title="What users can do here" />
        <ul>
          <li>Check supported platform balances.</li>
          <li>Review reward and balance movement where available.</li>
          <li>Access swap, exchange, or redemption features if enabled.</li>
          <li>Submit supported withdrawal or reward claims.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaLock} title="Platform controls" />
        <p>
          The dashboard is subject to account status, feature availability,
          verification checks, security monitoring, and technical validation.
          Where unusual activity, account issues, or system errors are detected,
          some balance functions may be temporarily limited while the issue is
          reviewed.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          These balances are internal platform reward records, not a bank
          balance, deposit account, or independent stored-money service, and
          they can be used only through officially supported VELOOP Rewards
          features.
        </p>
      </section>
    </LegalHero>
  );
};

export default WalletOverviewPage;
