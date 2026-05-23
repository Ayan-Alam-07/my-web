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
      badge="Wallet"
      hTitle="Wallet Overview"
      hText="This page explains what the VELOOP Rewards wallet shows, what users can do inside it, and how wallet balances are handled."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Wallet Type", value: "Internal platform wallet" },
        { title: "Balance Nature", value: "Virtual in-platform values" },
      ]}
      fNoticeText={[
        "Wallet balances are platform records used for internal reward, progression, and redemption purposes.",
        "Balances may be reviewed, frozen, corrected, reversed, or removed where required for fraud handling, technical correction, or policy enforcement.",
      ]}
      supportTitle={["Support details", "Wallet notice"]}
      supportDesc={[
        "Users with wallet-related concerns should provide account details, screenshots, and a clear explanation of the balance issue when contacting support.",
        "Displayed balances do not create an unconditional withdrawal right unless redemption is supported and successfully approved.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaWallet} title="What the wallet shows" />
        <p>
          The VELOOP Rewards wallet may display supported balances such as VEs,
          Gems, XP, Tokens, Spins, and other reward-related values depending on
          current platform features.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaListAlt} title="What users can do" />
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
          The wallet is subject to account status, feature availability,
          verification checks, geographic restrictions, fraud monitoring, and
          technical validation. Wallet access or balances may be limited or
          adjusted where necessary.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Internal wallet balances do not function as independent stored money
          and may only be used through officially supported VELOOP Rewards
          systems.
        </p>
      </section>
    </LegalHero>
  );
};

export default WalletOverviewPage;
