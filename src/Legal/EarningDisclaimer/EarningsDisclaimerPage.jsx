import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaCoins,
  FaChartLine,
  FaUserCheck,
  FaHourglassHalf,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Earnings Disclaimer" },
  { title: "Applies To", value: "Rewards, tasks, withdrawals, and promotions" },
];

const supportTitle = ["Rewards support", "Important limitation"];

const supportDesc = [
  "Users with questions about task rewards, withdrawal eligibility, review outcomes, referral credits, or platform reward logic may contact VELOOP Rewards support using the available support channel.",
  "Reward-related information shown on the platform is subject to verification, system validation, compliance review, campaign availability, and policy enforcement. VELOOP Rewards does not provide guaranteed earnings, salary, employment, investment returns, or fixed financial outcomes.",
];

const finalNotice = [
  "This Earnings Disclaimer should be read together with the Terms & Conditions, Withdrawal & Reward Verification Policy, Platform Currency Policy, Anti-Fraud Policy, Disclaimer, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that platform rewards, credits, and redemption opportunities are conditional platform benefits and not a promise of guaranteed income, employment, financial return, or investment performance.",
];

const variabilityFactors = [
  "Task availability, campaign status, ad fill rates, geographic eligibility, and platform participation rules.",
  "System validation, fraud screening, duplicate detection, account standing, and technical verification results.",
  "Leaderboard ranking, promotional limitations, referral qualification, reward caps, redemption checks, and policy compliance.",
  "Third-party offer completion tracking, advertiser confirmation, survey acceptance rules, and external provider approvals or rejections.",
  "Platform changes, reward rule updates, temporary pauses, maintenance, compliance reviews, or security-related limitations.",
];

const EarningsDisclaimerPage = () => {
  return (
    <LegalHero
      badge="Earnings Disclaimer"
      hTitle="Earnings Disclaimer"
      hText="This Earnings Disclaimer explains the limits and conditions that apply to rewards, credits, earnings references, redemptions, and related financial expectations on VELOOP Rewards."
      metaInfo={metaInfo}
      crumb
      cTitle="Earnings Disclaimer"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important earnings notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is a digital rewards and engagement platform. It is
            not an employment service, salary program, investment platform,
            financial institution, betting service, or guaranteed-income system.
            References to rewards, credits, earnings, bonuses, or withdrawals
            describe platform-based benefit opportunities only and do not create
            a promise of fixed or guaranteed monetary gain.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaCoins}
          title="Rewards are conditional platform benefits"
        />
        <div className={styles.card}>
          <p>
            Rewards made available through VELOOP Rewards may depend on
            completion of eligible tasks, campaign rules, account status,
            verification requirements, fraud screening, and platform policy
            compliance. Even where a task appears to offer a stated reward, the
            reward remains subject to successful validation and eligibility
            review.
          </p>
          <p>
            Internal platform values such as VEs, Gems, XP, Tokens, Spins,
            badges, and related credits are virtual platform-controlled units
            governed by platform rules. They do not represent wages, bank
            balances, stored value, securities, or independently owned monetary
            assets.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaChartLine}
          title="No guaranteed income or results"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards does not guarantee that any user will earn a
            particular amount, redeem a particular value, receive a specific
            level of rewards, or obtain rewards at any fixed frequency.
            Individual outcomes may differ significantly based on activity,
            eligibility, availability, verification, ranking, offer conditions,
            and ongoing compliance.
          </p>
          <p>
            The amount, timing, or availability of rewards may vary due to
            factors including:
          </p>
          <ul>
            {variabilityFactors.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserCheck}
          title="User responsibility and tax matters"
        />
        <div className={styles.card}>
          <p>
            Users are responsible for understanding whether rewards received
            through VELOOP Rewards create any personal, tax, reporting,
            regulatory, or legal obligations under the laws applicable to them.
            VELOOP Rewards does not provide tax, accounting, financial, or legal
            advice to users regarding reward receipts or redemption activity.
          </p>
          <p>
            Users remain responsible for ensuring that their participation in
            the platform is lawful in their location and for providing accurate
            information where reward redemption or verification requires
            user-submitted details.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaHourglassHalf}
          title="Withdrawals, reviews, and delays"
        />
        <div className={styles.card}>
          <p>
            Withdrawal requests, reward conversions, referral credits,
            leaderboard outcomes, and promotional benefits may be delayed,
            limited, denied, reversed, or cancelled where VELOOP Rewards
            determines that verification, security review, third-party
            dependency checks, policy enforcement, technical validation, or
            fraud prevention measures require such action.
          </p>
          <p>
            The existence of an in-app balance, completed task, reward
            indicator, or withdrawal request does not by itself create an
            unconditional legal entitlement to payout unless and until the
            platform confirms eligibility and approves the reward or redemption
            under its then-current rules.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaBalanceScale} title="Interpretation and updates" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to modify reward structures,
            exchange values, earning mechanisms, participation conditions,
            withdrawal methods, verification requirements, and promotional
            availability at any time, with or without prior notice, subject to
            applicable law.
          </p>
          <p>
            Any examples, illustrations, promotional wording, platform labels,
            or reward descriptions are for general informational purposes only
            and should not be interpreted as a contractual guarantee of future
            results, continuous availability, or guaranteed earnings.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default EarningsDisclaimerPage;
