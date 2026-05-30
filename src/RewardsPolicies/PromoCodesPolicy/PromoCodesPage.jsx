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
      cTitle={"safety / promo-codes"}
      badge="Gift code"
      hTitle="Promo Codes"
      hText="This page explains VELOOP Rewards promo codes and giveaway codes, including redemption conditions, validity limits, expiration, and invalid use rules."
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
        "Promo codes, giveaway codes, and similar redemption-based features are optional promotional tools that may be limited by time, quantity, eligibility, or campaign conditions.",
        "The platform may activate, modify, pause, expire, revoke, or end any code or code campaign based on campaign rules, technical requirements, or abuse prevention needs.",
      ]}
      supportTitle={["Support details", "Redemption review"]}
      supportDesc={[
        "If a user believes a valid promo code was rejected in error, the user may contact official support with the code, account details, and the source of the code for review.",
        "A code may be denied where it has expired, reached its usage limit, been revoked, failed validation, or does not apply to the user’s account or campaign conditions.",
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
        <SectionHead Icon={FaShieldAlt} title="Sharing and redemption limits" />
        <ul>
          <li>
            Public campaign codes may be shared only in the way described by the
            campaign or official platform announcement.
          </li>
          <li>
            User-specific, limited, or exclusive codes must not be posted on
            public forums, deal sites, mass groups, or social media for bulk
            redemption.
          </li>
          <li>
            Sharing a code privately with friends or family is allowed only
            where the code campaign does not restrict personal sharing.
          </li>
          <li>
            Attempts to trigger repeated or bulk redemptions through
            unauthorized sharing, automation, or duplicate accounts are
            prohibited.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Code rules" />
        <ul>
          <li>
            Codes may be subject to expiry dates, one-time use limits, campaign
            restrictions, user eligibility checks, or region-based availability.
          </li>
          <li>
            If a code cannot be redeemed, users may see a clear error such as
            “Code Expired,” “Usage Limit Reached,” “Invalid Code,” or “Not
            Eligible for This Campaign.”
          </li>
          <li>
            Codes issued in error, used outside intended conditions, or
            triggered through invalid activity may be refused, revoked, or
            cancelled.
          </li>
          <li>
            Reward values, redemption rules, and campaign structures may be
            modified, paused, or ended at any time.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Prohibited activity includes repeated use of the same code through
            multiple accounts, automated redemption attempts, manipulated
            claims, bulk redemption abuse, or posting restricted codes for mass
            use.
          </li>
          <li>
            Invalid code activity may result in code cancellation, reward
            reversal, redemption restriction, or account enforcement action
            under platform rules.
          </li>
          <li>
            Successful code entry does not guarantee final approval if later
            review shows that campaign conditions, eligibility checks, or fraud
            controls were not satisfied.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="If a code does not work" />
        <ul>
          <li>Check that the code was entered exactly as shown.</li>
          <li>
            Make sure the code has not expired or reached its usage limit.
          </li>
          <li>Confirm that your account is eligible for the campaign.</li>
          <li>
            If you still believe a valid code was rejected in error, contact
            official support with the code details and where you received it.
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
