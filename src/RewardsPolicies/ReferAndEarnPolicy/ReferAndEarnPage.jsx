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
      cTitle={"safety / referral-rewards"}
      badge="Refer"
      hTitle="Refer & Earn"
      hText="This page explains the referral feature, including eligible referrals, fixed referral rewards, abuse restrictions, and reward review rules. A referred user may need to sign up through the valid referral flow complete an eligible first activity, and satisfy any required account verification or anti-abuse checks before a referral reward is approved."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Referral rewards are promotional platform credits and apply only to real, unique, eligible, and non-self referrals accepted under platform rules.",
        "We encourage users to share VELOOP genuinely. Self-referrals, fake signups, duplicate accounts, or other referral abuse may lead to reward cancellation or account action.",
      ]}
      supportTitle={["Support details", "Referral review"]}
      supportDesc={[
        "If a user believes a referral was rejected or not credited in error, the user may contact official support with the account ID, referral details, and any relevant evidence for review.",
        "Referral rewards may be delayed, denied, reversed, or removed where authenticity, eligibility, or anti-abuse requirements are not satisfied.",
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
            Only genuine new users who join through a valid referral method may
            qualify as eligible referrals.
          </li>
          <li>
            The referred user may need to complete a first eligible activity and
            pass any required verification or anti-abuse checks.
          </li>
          <li>
            Referral rewards are issued only after successful validation by the
            platform.
          </li>
          <li>
            The platform may revise referral reward amounts, conditions, or
            availability at any time.
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
            Repeated or serious referral abuse may lead to reward forfeiture,
            account restriction, suspension, or other enforcement action under
            platform rules.
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
