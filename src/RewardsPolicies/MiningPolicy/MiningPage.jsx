import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaBolt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const MiningPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Mining"
      hText="This page explains the VELOOP Rewards mining feature, including session duration, offline continuation, boost purchases, battery and hash-rate mechanics, and enforcement rules."
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
        "Mining is a gamified in-platform feature and does not represent real cryptocurrency mining, financial mining, or investment activity.",
        "Mining sessions may continue for up to 1 hour and 30 minutes, including during eligible offline periods, subject to system validation and feature integrity checks.",
      ]}
      supportTitle={["Support details", "System review"]}
      supportDesc={[
        "Users who believe mining progress, boosts, battery charges, or hash-rate changes were incorrectly recorded may contact platform support for review.",
        "Mining logs, session timing, and system records will control in case of disputes regarding claimed mining activity or earned credits.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaBolt} title="How it works" />
        <p>
          Users may start a mining session through the platform, and an eligible
          mining cycle may continue for up to 1 hour and 30 minutes, including
          while the user is offline. Mining speed may be increased through
          available in-platform boost mechanisms.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Boosts and upgrades" />
        <ul>
          <li>
            Users may increase mining performance through supported in-app
            systems such as speed boosts, battery recharge, or hash-rate
            improvements.
          </li>
          <li>
            Certain boosts or upgrades may be obtained using VEs or other
            permitted platform credits.
          </li>
          <li>
            The platform may rebalance session duration, recharge rules,
            hash-rate logic, or boost effectiveness at any time.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Restrictions" />
        <ul>
          <li>
            Any attempt to manipulate mining timers, automate claiming, alter
            session behavior, or exploit technical systems is prohibited.
          </li>
          <li>
            Mining activity may be paused, invalidated, or reversed if
            suspicious system behavior, device tampering, or abuse is detected.
          </li>
          <li>
            Mining is a virtual platform activity only and does not create
            ownership rights in any real-world mined asset.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Mining is a gamified platform mechanic with virtual progress and
          adjustable performance systems. Session outcomes, boosts, and earned
          credits remain subject to platform controls, review, and anti-abuse
          enforcement.
        </p>
      </section>
    </LegalHero>
  );
};

export default MiningPage;
