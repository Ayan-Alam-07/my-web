import React from "react";
import { Link } from "react-router-dom";
import LegalNav from "../common/LegalNav";
import {
  FaArrowLeft,
  FaEnvelope,
  FaInfoCircle,
  FaBuilding,
  FaWallet,
  FaShieldAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import styles from "./AboutUsPage.module.css";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";

const platformActivities = [
  "Rewarded advertisements and bonus claim activities",
  "Spin-based reward features and promotional engagement tools",
  "Referrals, surveys, games, missions, and badge collection",
  "Daily rewards, streak rewards, XP progression, and tap-to-earn systems",
  "Exchange, swap, giveaway, and social engagement tasks",
  "Future platform features, events, and expanded reward experiences where introduced",
];

const userResponsibilities = [
  "Provide accurate account and redemption information when required.",
  "Use only one account unless the platform explicitly allows otherwise.",
  "Avoid bots, VPNs, emulators, auto-clickers, and unauthorized third-party software.",
  "Comply with applicable laws, taxes, reporting obligations, and regional restrictions.",
  "Review platform policies regularly because features and rules may change over time.",
];

const AboutUsPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"About us"}
      badge={"About Us"}
      hTitle={"About VELOOP Rewards"}
      hText={
        "VELOOP Rewards is an online-operated rewards and engagement platform based in India. The platform is designed to allow eligible users to participate in supported promotional activities, engage with gamified features, and earn virtual platform-based rewards subject to verification, platform rules, and policy compliance."
      }
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 17, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Location",
          value: "Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "This About Us page provides a general overview of VELOOP Rewards, its operating identity, and the overall nature of the platform. It does not replace the more specific legal, privacy, anti-fraud, withdrawal, advertising, and compliance documents published elsewhere on the website.",
        "VELOOP Rewards reserves the right to update its platform description, supported features, internal systems, contact details, eligibility requirements, and operational policies at any time in accordance with business, technical, legal, and compliance requirements.",
      ]}
      supportTitle={["Support details", "Operations"]}
      supportDesc={[
        "VELOOP Rewards provides digital communication channels for account assistance, policy questions, withdrawal concerns, legal notices, and general platform support.",
        "Additional community or messaging channels may be introduced, updated, or removed over time depending on platform operations and communication needs.",
      ]}
    >
      <section className={styles.highlightSection}>
        <SectionHead Icon={FaExclamationTriangle} title={"Important notice"} />
        <div className={styles.highlightBox}>
          <p>
            VELOOP Rewards is a promotional rewards platform and not an
            investment, banking, deposit-taking, or gambling service. Internal
            balances and platform credits are virtual platform-managed units and
            do not represent independent financial assets or guaranteed property
            rights outside officially supported platform systems.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaBuilding} title={"Who operates VELOOP Rewards"} />

        <div className={styles.contentBox}>
          <p>
            VELOOP Rewards is operated by <strong>Ayan Alam</strong> as an
            individually owned online business based in Ramgarh, Jharkhand,
            India. The platform is operated digitally and does not currently
            function as a physical walk-in office, offline retail establishment,
            or in-person service center.
          </p>
          <p>
            The platform has been developed as a managed digital rewards
            ecosystem where users can interact with tasks, ads, games,
            referrals, and other engagement-based features in exchange for
            virtual platform credits and supported redemption opportunities.
            Platform support, policy communication, and compliance handling are
            managed through official online channels and designated contact
            methods.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaInfoCircle}
          title={"What the platform is designed to do"}
        />

        <div className={styles.contentBox}>
          <p>
            VELOOP Rewards is intended to combine user engagement, gamified
            participation, and promotional earning systems into one
            platform-managed digital experience. The purpose of the platform is
            to offer users access to supported activities that may lead to
            virtual reward accumulation and, where available and approved,
            supported redemption opportunities.
          </p>
          <p>
            The platform may expand, adjust, pause, or remove features over time
            depending on technical capability, business decisions, compliance
            needs, fraud prevention requirements, campaign availability, and
            operational priorities. VELOOP Rewards maintains discretion over how
            platform systems, reward mechanics, and user access conditions are
            managed.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUsers}
          title={"What users can do on the platform"}
        />
        <div className={styles.contentBox}>
          <p>
            Users may be able to access different types of earning and
            engagement activities depending on eligibility, account standing,
            region, campaign availability, and platform configuration. These
            activities may include:
          </p>
          <ul>
            {platformActivities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            These activities are platform-controlled and may be updated, paused,
            replaced, or removed at any time. The availability of a feature at
            one point in time does not guarantee that it will remain permanently
            available in the same form.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaWallet}
          title={"Platform currencies and reward system"}
        />
        <div className={styles.contentBox}>
          <p>
            VELOOP Rewards uses internal digital reward units and
            platform-managed credits such as <strong>VEs</strong>,
            <strong> XP</strong>, <strong>Gems</strong>, <strong>Tokens</strong>
            , <strong>Spins</strong>, badges, and other virtual units. These
            internal items are used to support participation, progression,
            exchange features, reward eligibility, unlock systems, and supported
            redemption processes according to platform rules.
          </p>
          <p>
            VEs may function as the primary platform reward unit used for
            supported redemption requests. XP may support level progression and
            platform advancement. Gems may be exchangeable into VEs where
            supported. Tokens may be used for platform-related utilities such as
            Gems, Spins, or similar digital items. Spins may be used in
            wheel-based promotional features offered by the platform.
          </p>
          <p>
            All such credits remain virtual platform-managed units only. They do
            not represent bank balances, stored user deposits, securities,
            investment interests, or independently transferable monetary assets
            outside officially supported platform systems.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaShieldAlt}
          title={"Operating approach and fair-use protection"}
        />
        <div className={styles.contentBox}>
          <p>
            VELOOP Rewards aims to maintain a rule-based and protected platform
            environment. To preserve platform integrity, the platform may apply
            account monitoring, reward validation, fraud screening, referral
            review, device and IP analysis, payout review, suspicious activity
            checks, and other protection measures where necessary.
          </p>
          <p>
            The platform may restrict or suspend access where suspicious
            conduct, duplicate accounts, fake referrals, automation,
            unauthorized software use, technical exploitation, or policy evasion
            is detected or reasonably suspected. VELOOP Rewards also reserves
            the right to modify reward values, exchange logic, eligibility
            rules, task availability, and redemption conditions in order to
            support platform stability and compliance.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUsers}
          title={"User participation and responsibilities"}
        />
        <div className={styles.contentBox}>
          <p>
            Users are expected to participate honestly, lawfully, and in
            accordance with platform rules. Access may be limited or denied
            where a user fails eligibility checks, violates platform policies,
            or engages in prohibited conduct.
          </p>
          <ul>
            {userResponsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            Use of the platform by users below the age required under local law
            should occur only under parental or guardian supervision.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default AboutUsPage;
