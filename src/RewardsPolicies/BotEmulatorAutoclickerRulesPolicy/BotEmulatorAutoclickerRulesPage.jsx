import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaRobot,
  FaBan,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const BotEmulatorAutoclickerRulesPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"safety / bot-emulator-autoclicker-rules"}
      badge="Safety Rules"
      hTitle="Bot, Emulator and Auto-Clicker Rules"
      hText="This page explains prohibited automation behavior and how VELOOP Rewards handles bots, emulators, auto-clickers, scripts, and unauthorized tools."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        {
          title: "Automation Policy",
          value: "Unauthorized automation is prohibited",
        },
        {
          title: "Enforcement",
          value: "Restriction, suspension, or ban for confirmed abuse",
        },
      ]}
      fNoticeText={[
        "To keep VELOOP Rewards fair for genuine users, any bot, script, emulator, auto-clicker, or other unauthorized automation that simulates or manipulates activity is prohibited.",
        "Confirmed invalid automation activity may lead to blocked actions, reward forfeiture, account restriction, suspension, or permanent termination under platform rules.",
      ]}
      supportTitle={["Support and review", "Security notice"]}
      supportDesc={[
        "If a user believes a restriction was applied in error, the user should contact official support with account details, device information, and any relevant explanation for review.",
        "The platform may use automated and manual protection systems to detect unauthorized applications, unusual interaction patterns, or abuse signals before taking security action.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaRobot} title="Prohibited tools and behavior" />
        <p>
          VELOOP Rewards prohibits the use of bots, scripts, emulators,
          auto-clickers, macros, unauthorized applications, or any tool that
          automates, accelerates, simulates, manipulates, or fakes genuine user
          activity.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaBan} title="Examples of prohibited activity" />
        <ul>
          <li>Automating taps, claims, spins, tasks, or ad interactions.</li>
          <li>
            Accessing the platform through PC or virtual-device emulators is not
            supported and may trigger session blocking or account review.
          </li>
          <li>Running auto-clickers or repeat-input software.</li>
          <li>
            Attempting to bypass detection, security systems, or platform
            protections.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Platform response" />
        <p>
          If prohibited automation is detected, the platform may block the
          affected action, end the active session, place the account under
          review, restrict access, suspend the account, or permanently ban the
          user in serious or repeated cases. Related rewards, balances, or
          benefits connected to invalid activity may also be removed or
          forfeited.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaShieldAlt} title="Review and support" />
        <p>
          If you believe an account action, reward decision, referral result, or
          withdrawal review was applied incorrectly, contact official support
          with your account ID, relevant screenshots, and a short explanation
          for manual review.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Security protections help protect fair use of the platform, and users
          should avoid running unauthorized tools or unsupported environments
          while using VELOOP Rewards. If a user believes a restriction was
          caused by mistake, the user should contact support with device details
          and information about any active applications for review.
        </p>
      </section>
    </LegalHero>
  );
};

export default BotEmulatorAutoclickerRulesPage;
