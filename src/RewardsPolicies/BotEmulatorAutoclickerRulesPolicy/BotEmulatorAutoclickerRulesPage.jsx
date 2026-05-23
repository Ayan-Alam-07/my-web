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
      badge="Safety Rules"
      hTitle="Bot, Emulator and Auto-Clicker Rules"
      hText="This page explains prohibited automation behavior and how VELOOP Rewards handles bots, emulators, auto-clickers, scripts, and unauthorized tools."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Automation Policy", value: "Strictly prohibited" },
        { title: "Enforcement", value: "Suspension or permanent ban" },
      ]}
      fNoticeText={[
        "Any bot, script, emulator, auto-clicker, or unauthorized automation method that simulates or manipulates user activity is prohibited.",
        "Detected invalid activity may result in immediate session closure, reward forfeiture, account restriction, or permanent termination.",
      ]}
      supportTitle={["Support details", "Enforcement notice"]}
      supportDesc={[
        "Users who believe a restriction was triggered incorrectly may contact support, but platform security review decisions may still apply.",
        "The platform may use automated and manual protection systems to detect unauthorized applications, unusual interaction patterns, or abuse signals.",
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
          <li>Using emulators where the platform does not allow them.</li>
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
          If prohibited activity is detected, the platform may automatically
          close the affected session, block the action, suspend the account,
          permanently ban the user, and deduct or forfeit related balances such
          as VEs, Gems, Tokens, Spins, or other rewards.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Security protections are designed to protect fair use of the platform,
          and users are responsible for ensuring they do not run unauthorized
          tools or environments while using VELOOP Rewards.
        </p>
      </section>
    </LegalHero>
  );
};

export default BotEmulatorAutoclickerRulesPage;
