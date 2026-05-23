import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaTicketAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const PromoCodesPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Promo Codes"
      hText="This page explains VELOOP Rewards promo codes and giveaway codes, including redemption conditions, validity limits, expiration, and invalid use rules."
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
        "Promo codes, giveaway codes, and similar redemption-based features are optional promotional tools that may be limited by time, quantity, eligibility, or campaign conditions.",
        "The platform may activate, modify, pause, invalidate, expire, or withdraw any code or code campaign at any time.",
      ]}
      supportTitle={["Support details", "Redemption review"]}
      supportDesc={[
        "Users who believe a valid promo code was incorrectly rejected may contact support, subject to platform redemption records and campaign rules.",
        "The platform may deny code claims where the code has expired, reached its limit, been revoked, or failed validation.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaTicketAlt} title="How it works" />
        <p>
          VELOOP Rewards may issue promo codes or giveaway codes that users can
          redeem for eligible promotional rewards within the platform. Code
          campaigns may be public, limited, event-based, user-specific, or
          condition-based at the platform’s discretion.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Code rules" />
        <ul>
          <li>
            Codes may be subject to expiry dates, one-time use limits, campaign
            restrictions, or user eligibility checks.
          </li>
          <li>
            The platform may refuse or revoke codes that were issued in error or
            used outside intended conditions.
          </li>
          <li>
            Reward values, redemption rules, and campaign structures may be
            modified at any time.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Code abuse, bulk exploitation, unauthorized sharing, automated
            redemption attempts, or manipulated claims are prohibited.
          </li>
          <li>
            Invalid code activity may result in reward reversal, code
            cancellation, restriction, or account enforcement action.
          </li>
          <li>
            Successful code entry does not override fraud review, eligibility
            checks, or system validation.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Promo codes and giveaway codes are time-sensitive promotional tools
          only. They may expire, be withdrawn, or be denied where the platform
          determines that eligibility or redemption rules were not satisfied.
        </p>
      </section>
    </LegalHero>
  );
};

export default PromoCodesPage;
