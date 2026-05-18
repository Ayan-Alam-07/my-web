import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaAd,
  FaTasks,
  FaClock,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Advertising & Offerwall Policy" },
  {
    title: "Applies To",
    value: "Rewarded ads, surveys, offers, tasks, and third-party promotions",
  },
];

const supportTitle = ["Ad and offer support", "Third-party notice"];

const supportDesc = [
  "Users with questions about ad rewards, survey completion, offer tracking, missing credits, or task-related issues may contact VELOOP Rewards support with relevant details, screenshots, timestamps, and account information where available.",
  "Advertising, survey, and offerwall rewards may depend on third-party systems and external validation. VELOOP Rewards does not guarantee uninterrupted ad availability, successful tracking, survey acceptance, or approval of every offer completion.",
];

const finalNotice = [
  "This Advertising & Offerwall Policy should be read together with the Terms & Conditions, Privacy Policy, Earnings Disclaimer, Anti-Fraud Policy, Withdrawal & Reward Verification Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that ads, surveys, offers, partner promotions, and related earning opportunities may be provided, measured, tracked, or controlled in whole or in part by third-party networks and may be subject to external approval, limitations, and errors.",
];

const issueTriggers = [
  "Ad network delivery failures, reward callback failures, tracking delays, or incomplete third-party confirmation.",
  "Survey disqualification, geographic ineligibility, advertiser filtering, quota limits, or demographic mismatch.",
  "Offerwall rejection, incomplete task flow, missing install validation, retention-period failure, or policy-based denial by the third-party provider.",
  "Browser restrictions, device changes, privacy settings, connection instability, app-permission issues, or unsupported usage environments.",
  "Fraud review, duplicate completion detection, suspicious activity flags, self-triggered abuse, or other policy-enforcement concerns.",
];

const AdvertisingOfferwallPolicyPage = () => {
  return (
    <LegalHero
      badge="Advertising & Offerwall Policy"
      hTitle="Advertising & Offerwall Policy"
      hText="This policy explains how VELOOP Rewards handles rewarded ads, surveys, offerwalls, promotional campaigns, sponsor tasks, and other third-party advertising or earning opportunities available on the platform."
      metaInfo={metaInfo}
      crumb
      cTitle="Advertising & Offerwall Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important advertising notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards may display rewarded ads, video ads, surveys,
            promotional tasks, sponsored actions, offerwall content, referral
            campaigns, and other partner-supported earning opportunities. These
            services may be supplied or tracked by third-party advertising and
            monetization providers, and VELOOP Rewards cannot guarantee that all
            such activities will always be available, tracked correctly, or
            rewarded automatically.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaAd} title="Third-party ad and offer systems" />
        <div className={styles.card}>
          <p>
            Some platform earning opportunities may rely on third-party ad
            networks, rewarded-video systems, survey providers, offerwalls,
            affiliate-style promotional campaigns, install-based promotions, or
            partner-controlled validation systems. VELOOP Rewards may integrate
            such systems to present earning options to users, but the underlying
            tracking and approval process may be partially or fully managed by
            those third parties.
          </p>
          <p>
            VELOOP Rewards is not responsible for the independent policies,
            technical systems, acceptance criteria, content standards, privacy
            practices, or approval decisions of third-party advertising,
            offerwall, or survey providers.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaTasks}
          title="Reward crediting and completion requirements"
        />
        <div className={styles.card}>
          <p>
            Users may be required to complete a task exactly as instructed in
            order to receive reward credit. This may include full video viewing,
            survey completion, valid app installation, retention-period
            compliance, use of a required device or browser environment, or
            other advertiser-defined conditions.
          </p>
          <p>
            A user’s participation in an ad, survey, or offer does not guarantee
            reward credit unless the completion is properly tracked, accepted,
            verified, and approved under both VELOOP Rewards platform rules and
            any applicable third-party campaign conditions.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaClock}
          title="Missing rewards, delays, and rejection reasons"
        />
        <div className={styles.card}>
          <p>
            Reward delays, missing credits, survey rejection, or offer denial
            may occur for many reasons, including the following:
          </p>
          <ul>
            {issueTriggers.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            VELOOP Rewards may attempt to review user reports relating to
            missing reward credit, but cannot guarantee that every disputed
            credit will be restored or approved, especially where third-party
            validation is absent, inconsistent, or rejected.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaShieldAlt}
          title="Abuse prevention and restricted conduct"
        />
        <div className={styles.card}>
          <p>
            Users must not exploit advertising or offer systems through bots,
            emulators, VPNs, repeated resets, fake installs, multiple accounts,
            manipulated clicks, automated views, false survey answers,
            self-referrals, or any other behavior designed to obtain rewards
            dishonestly.
          </p>
          <p>
            Where VELOOP Rewards detects suspicious engagement, advertiser
            abuse, partner policy violations, or other conduct inconsistent with
            legitimate task completion, the platform may deny rewards, reverse
            credits, limit participation, suspend accounts, or take additional
            action under other applicable policies.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Policy interpretation and future integrations"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to add, remove, change, pause,
            restrict, or replace any advertising, survey, offerwall, sponsor, or
            partner-based earning system at any time. Availability may vary by
            country, user profile, device, account status, campaign capacity, or
            business decision.
          </p>
          <p>
            The platform may introduce additional ad partners, offer providers,
            affiliate-style campaigns, or related monetization tools in the
            future, and user participation in such features will remain subject
            to the then- current platform terms, privacy rules, fraud controls,
            and verification policies.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default AdvertisingOfferwallPolicyPage;
