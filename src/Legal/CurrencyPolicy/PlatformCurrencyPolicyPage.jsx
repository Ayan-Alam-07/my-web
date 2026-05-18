import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaCoins,
  FaSyncAlt,
  FaLock,
  FaBan,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Platform Currency Policy" },
  {
    title: "Applies To",
    value: "VEs, Gems, XP, Tokens, Spins, and related platform credits",
  },
];

const supportTitle = ["Currency support", "Important ownership note"];

const supportDesc = [
  "Users with questions about virtual balances, exchanges, reward values, redemption-related credits, or account currency issues may contact VELOOP Rewards support for general assistance.",
  "All virtual balances, platform units, and in-app credits remain subject to platform rules, verification, fraud review, technical controls, and VELOOP Rewards operational discretion. Displayed balances do not create independent ownership rights outside officially supported platform functions.",
];

const finalNotice = [
  "This Platform Currency Policy should be read together with the Terms & Conditions, Withdrawal & Reward Verification Policy, Earnings Disclaimer, Anti-Fraud Policy, Refund & Cancellation Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that all platform currencies and reward units are virtual platform-controlled credits with limited permitted uses determined solely by VELOOP Rewards.",
];

const currencyDefinitions = [
  "VEs: the main in-platform reward value used within permitted platform functions and may be used for redemption subject to platform rules, approval requirements, and supported withdrawal systems.",
  "XP: experience points used for level progression, status progression, unlock logic, or related in-platform advancement purposes.",
  "Gems: virtual credits that may be exchanged or swapped in accordance with exchange rules determined by VELOOP Rewards.",
  "Tokens: platform credits that may be spent on supported game-related or reward-related functions such as game credits, spins, gift card access, or other approved uses.",
  "Spins: limited-use virtual action credits used to access or participate in wheel-based reward mechanics or similar platform activities.",
];

const PlatformCurrencyPolicyPage = () => {
  return (
    <LegalHero
      badge="Platform Currency Policy"
      hTitle="Platform Currency Policy"
      hText="This policy explains the legal and operational status of VELOOP Rewards platform currencies, virtual credits, reward units, and related exchange mechanisms, including VEs, Gems, XP, Tokens, Spins, and similar in-platform values."
      metaInfo={metaInfo}
      crumb
      cTitle="Platform Currency Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important virtual currency notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards uses virtual platform credits and reward units for
            internal platform functionality. These units are not bank deposits,
            stored-value instruments, securities, investment products, legal
            tender, or property interests with unconditional cash value. Their
            availability, display, use, exchange logic, and redemption treatment
            are determined solely by VELOOP Rewards.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaCoins} title="Platform currency definitions" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may use multiple virtual units for different platform
            functions. Unless expressly stated otherwise by the platform, these
            units operate only within the VELOOP Rewards ecosystem and only for
            permitted platform purposes.
          </p>
          <ul>
            {currencyDefinitions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaSyncAlt}
          title="Exchange, swap, and conversion rules"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may allow certain internal exchange, swap, or
            conversion features between eligible platform units, such as Gems to
            VEs or Tokens to approved in-platform utility functions, subject to
            then-current rules, exchange rates, system logic, availability, and
            platform discretion.
          </p>
          <p>
            Any exchange rate, conversion formula, redemption pathway, usage
            cap, or swap feature may be introduced, changed, paused, limited, or
            discontinued at any time. A displayed feature or prior exchange
            history does not guarantee ongoing access or a permanent conversion
            rate.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaLock}
          title="Ownership, control, and no cash value clause"
        />
        <div className={styles.card}>
          <p>
            All VEs, Gems, XP, Tokens, Spins, badges, promotional balances, and
            related digital units remain part of the VELOOP Rewards platform
            environment and are subject to platform control. Users receive a
            limited, revocable, non-transferable permission to use such units
            only in the manner expressly allowed by the platform.
          </p>
          <p>
            Except through officially supported and approved redemption systems
            where applicable, platform currencies and credits have no
            independent cash ownership value, cannot be withdrawn on demand as
            money, cannot be sold or transferred by users unless expressly
            allowed, and do not create a property right against VELOOP Rewards.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBan}
          title="Suspension, deductions, and forfeiture"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may freeze, deduct, reset, cancel, forfeit, adjust,
            or refuse access to virtual balances where it reasonably believes
            that suspicious activity, fraud, policy violations, abuse, duplicate
            accounts, fake referrals, bot behavior, unauthorized automation,
            system exploitation, technical error, or reward reversal conditions
            exist.
          </p>
          <p>
            Account suspension, closure, or restriction may also result in the
            loss of associated virtual balances, pending redemptions, or
            platform privileges, subject to applicable law and internal review
            standards.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Interpretation and policy updates"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to define, interpret, modify,
            expand, reduce, rename, rebalance, or remove platform currencies,
            reward mechanics, exchange systems, and virtual-credit rules at any
            time to maintain platform stability, legal compliance, security,
            fairness, or business continuity.
          </p>
          <p>
            References to balances, credits, exchanges, earnings, or values on
            the platform are informational and operational in nature and must be
            interpreted consistently with this policy and all other applicable
            VELOOP Rewards legal documents.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default PlatformCurrencyPolicyPage;
