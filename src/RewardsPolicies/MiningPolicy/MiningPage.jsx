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
      cTitle={"earning / mining-rewards"}
      badge="Mine & Earn"
      hTitle="Earning Session"
      hText="This page explains the VELOOP Rewards Earning Session feature, including session duration, eligible offline continuation, bonus upgrades, session energy rules, earning speed adjustments, and enforcement controls."
      metaInfo={[
        { title: "Effective Date", value: "May 19, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Earning Session is a gamified in-platform feature and does not involve real cryptocurrency mining, financial mining, investment activity, or ownership of any real-world digital asset.",
        "Sessions may continue for up to 1 hour and 30 minutes, including during eligible offline periods, subject to system validation, timing rules, and feature integrity checks.",
      ]}
      supportTitle={["Support details", "System review"]}
      supportDesc={[
        "Users who believe session progress, bonus upgrades, session energy, or earning speed changes were recorded incorrectly may contact official support for review with relevant account details and timing information.",
        "Session logs, timing records, and available system data are used to review disputes relating to session activity, progress, or credited rewards.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaBolt} title="How it works" />
        <p>
          Users may start an Earning Session through the platform, and an
          eligible session may continue for up to 1 hour and 30 minutes,
          including during supported offline periods. Earning speed may increase
          through eligible in-platform upgrades or bonus features made available
          by the platform.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Boosts and upgrades" />
        <ul>
          <li>
            Users may improve session performance through supported in-platform
            features such as earning speed boosts, session energy recharge, or
            bonus multipliers.
          </li>
          <li>
            Certain upgrades or bonus features may be obtained using VEs or
            other permitted platform credits.
          </li>
          <li>
            The platform may update session duration, recharge rules,
            earning-speed logic, or upgrade effectiveness from time to time.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Restrictions" />
        <ul>
          <li>
            Any attempt to manipulate session timers, automate claims, alter
            feature behavior, or exploit technical systems is not allowed.
          </li>
          <li>
            Session activity may be paused, invalidated, or reversed if
            suspicious system behavior, device tampering, or abuse is detected.
          </li>
          <li>
            This is a virtual platform feature only and does not create any
            ownership rights in cryptocurrency, mined assets, securities, or
            real-world financial products.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important clarification"
        />
        <p>
          This feature is a simulated in-platform earning mechanic created for
          user engagement only. It does not perform real cryptocurrency mining,
          cloud mining, staking, financial return generation, or investment
          activity of any kind.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Earning Session is a gamified platform mechanic with virtual progress
          and adjustable performance features. Session outcomes, bonus effects,
          and credited rewards remain subject to platform controls, system
          review, and anti-abuse enforcement.
        </p>
      </section>
    </LegalHero>
  );
};

export default MiningPage;
