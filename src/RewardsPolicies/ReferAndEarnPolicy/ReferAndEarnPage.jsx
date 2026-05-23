import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUserFriends,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const ReferAndEarnPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Refer & Earn"
      hText="This page explains the referral feature, including eligible referrals, fixed referral rewards, abuse restrictions, and reward review rules."
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
        "Referral rewards are promotional platform credits and apply only to valid, unique, eligible, and non-self referrals accepted by the platform.",
        "Fake referrals, duplicate referrals, multiple-account referrals, or self-referrals are prohibited and may result in account enforcement action.",
      ]}
      supportTitle={["Support details", "Referral review"]}
      supportDesc={[
        "Users disputing a referral outcome may contact support, but referral acceptance remains subject to platform validation records and anti-abuse review.",
        "Referral rewards may be delayed, denied, reversed, or removed where eligibility or authenticity requirements are not satisfied.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUserFriends} title="How it works" />
        <p>
          Users may receive a platform-defined referral reward when a genuinely
          new and eligible user joins through an approved referral process and
          meets the platform’s applicable conditions. Referral rewards are
          currently structured as fixed promotional in-app credit rewards rather
          than percentage-based earnings.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="Eligibility and reward rules"
        />
        <ul>
          <li>
            Only authentic and valid new-user referrals may qualify for referral
            rewards.
          </li>
          <li>
            Referral rewards may require completion of platform-defined
            conditions before approval.
          </li>
          <li>
            The platform may revise reward amounts, eligibility rules, or
            referral conditions at any time.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Self-referrals, fake accounts, duplicate signups, identity
            manipulation, or referral abuse are prohibited.
          </li>
          <li>
            Multiple suspicious referrals may result in permanent suspension and
            forfeiture of related balances or credits.
          </li>
          <li>
            The platform may reverse referral rewards where fraud, inauthentic
            activity, or policy violations are later detected.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Referral rewards apply only to real, eligible users referred in good
          faith. Referral activity is monitored for abuse, and invalid or
          suspicious referral rewards may be denied or reversed.
        </p>
      </section>
    </LegalHero>
  );
};

export default ReferAndEarnPage;
