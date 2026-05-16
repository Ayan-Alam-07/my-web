import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaGavel,
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileContract,
  FaUserShield,
  FaWallet,
  FaBullhorn,
  FaInfoCircle,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./MasterLegalPage.module.css";
import LegalNav from "./common/LegalNav";
import SectionHead from "./common/SectionHead";

const policyGroups = [
  {
    title: "Company & Contact",
    icon: <FaInfoCircle />,
    items: [
      {
        title: "About Us",
        path: "/about-us",
        desc: "Learn about VELOOP Rewards, its ownership, operating model, and platform purpose.",
      },
      {
        title: "Contact & Compliance",
        path: "/contact-compliance",
        desc: "Find support, legal, and compliance contact details, response timelines, and user assistance information.",
      },
      {
        title: "Legal Notice",
        path: "/legal-notice",
        desc: "Read the general legal framework, governing law, severability, and enforceability notices.",
      },
    ],
  },
  {
    title: "User Agreement & Conduct",
    icon: <FaFileContract />,
    items: [
      {
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
        desc: "Review the main agreement covering account use, eligibility, restrictions, suspensions, and platform rights.",
      },
      {
        title: "Community Rules",
        path: "/community-rules",
        desc: "Understand acceptable conduct, fair use expectations, and prohibited platform behavior.",
      },
      {
        title: "Disclaimer",
        path: "/disclaimer",
        desc: "Read the limitation of liability and general service-use disclaimers for the platform.",
      },
      {
        title: "DMCA / Copyright Policy",
        path: "/dmca-copyright-policy",
        desc: "See the copyright complaint, takedown, and intellectual property notice process.",
      },
    ],
  },
  {
    title: "Rewards, Wallet & Withdrawals",
    icon: <FaWallet />,
    items: [
      {
        title: "Platform Currency Policy",
        path: "/platform-currency-policy",
        desc: "Understand how VEs, XP, Gems, Tokens, Spins, and other virtual platform credits work.",
      },
      {
        title: "Withdrawal & Reward Verification Policy",
        path: "/withdrawal-verification-policy",
        desc: "Read how reward validation, payout review, withdrawal approval, delay, rejection, and reversal may apply.",
      },
      {
        title: "Earnings Disclaimer",
        path: "/earnings-disclaimer",
        desc: "Learn why platform participation does not guarantee a fixed income or financial return.",
      },
      {
        title: "Refund & Cancellation Policy",
        path: "/refund-cancellation-policy",
        desc: "Review non-refundable credits, cancellation rules, and refund limitations for optional paid features.",
      },
    ],
  },
  {
    title: "Privacy, Advertising & Data",
    icon: <FaBullhorn />,
    items: [
      {
        title: "Privacy Policy",
        path: "/privacy-policy",
        desc: "Understand what data is collected, how it is used, and what privacy choices or requests may be available.",
      },
      {
        title: "Advertising & Offerwall Policy",
        path: "/advertising-offerwall-policy",
        desc: "See how rewarded ads, offerwalls, surveys, external promotions, and tracking limitations are handled.",
      },
    ],
  },
  {
    title: "Security, Fraud & Platform Protection",
    icon: <FaShieldAlt />,
    items: [
      {
        title: "Anti-Fraud Policy",
        path: "/anti-fraud-policy",
        desc: "Read the rules against bots, VPNs, emulators, fake referrals, multiple accounts, and suspicious activity.",
      },
      {
        title: "Security & Platform Protection",
        path: "/security-platform-protection",
        desc: "Learn how the platform monitors abuse risks and protects platform integrity and user safety.",
      },
      {
        title: "Future Features Notice",
        path: "/future-features-notice",
        desc: "Understand that features, systems, rewards, and technical experiences may change as the platform evolves.",
      },
    ],
  },
];

const importantNotices = [
  "VELOOP Rewards is a promotional rewards and gamified engagement platform. It is not a bank, investment service, gambling platform, betting service, or financial institution.",
  "VEs, XP, Gems, Tokens, Spins, badges, and similar items are virtual platform-managed credits only and do not represent bank balances, deposits, or investment assets.",
  "Rewards, exchanges, withdrawals, rankings, and offers may be changed, paused, reviewed, delayed, limited, or removed at any time for operational, compliance, technical, security, or fraud-prevention reasons.",
  "Rewards and withdrawals remain subject to eligibility review, account verification, fraud checks, campaign rules, technical validation, and policy compliance.",
  "Third-party ads, surveys, offerwalls, external games, analytics tools, and login services may fail to track correctly or may be delayed, rejected, or unavailable beyond platform control.",
  "Users are responsible for complying with local laws, age requirements, tax obligations, and reporting duties applicable in their own region.",
];

const cautions = [
  {
    title: "Rewards and earnings caution",
    text: "Participation in VELOOP Rewards does not create employment, agency, investment, or guaranteed earning rights. Rewards depend on valid task completion, system tracking, review results, account standing, and platform rules.",
  },
  {
    title: "Withdrawal caution",
    text: "Meeting a redemption threshold does not guarantee instant payout. Withdrawal requests may be reviewed, delayed, limited, rejected, or reversed if verification issues, suspicious activity, policy violations, or technical anomalies are detected.",
  },
  {
    title: "Virtual currency caution",
    text: "All platform credits are promotional digital units used within the VELOOP Rewards ecosystem. They may be adjusted, suspended, expired, reset, withheld, or forfeited where necessary for fraud prevention, correction, enforcement, or feature changes.",
  },
  {
    title: "Third-party services caution",
    text: "Offerwalls, surveys, ad networks, authentication tools, and external reward providers may independently approve, reject, or invalidate user activity. VELOOP Rewards does not guarantee successful crediting for all third-party actions.",
  },
  {
    title: "User conduct caution",
    text: "Multiple accounts, self-referrals, fake referrals, bots, emulators, VPNs, auto-clickers, ad abuse, manipulation attempts, and false information may result in account restrictions, permanent suspension, reward reversal, or balance forfeiture.",
  },
];

const summaryPoints = [
  "This is a rewards platform, not an investment application.",
  "Platform credits are virtual and controlled by VELOOP Rewards.",
  "Rewards and withdrawals may be reviewed before approval or payout.",
  "Bots, VPNs, multiple accounts, and fraudulent activity are not allowed.",
  "Some external ads, surveys, or offerwall activities may fail to track correctly.",
  "Policies may be updated as the platform grows and changes.",
  "Continued use of the platform means acceptance of the latest legal notices and rules.",
];

const MasterLegalPage = () => {
  return (
    <div className={styles.page}>
      <LegalNav />
      <div className="container px-0 px-md-3">
        <main className={styles.main}>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>
              <span>Legal & Policy Center</span>
            </p>
            <h1>
              Legal information, policy documents, important cautions, and
              compliance notices for VELOOP Rewards.
            </h1>
            <p className={styles.heroText}>
              This page is the central legal hub for VELOOP Rewards. It helps
              users access the rules, notices, explanations, and policy
              documents that govern account usage, rewards, withdrawals,
              privacy, advertising, fraud prevention, user conduct, virtual
              platform credits, and general platform compliance.
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <span>Effective Date</span>
                <strong>Launch Date</strong>
              </div>
              <div className={styles.metaCard}>
                <span>Last Updated</span>
                <strong>May 16, 2026</strong>
              </div>
              <div className={styles.metaCard}>
                <span>Owner</span>
                <strong>Ayan Alam</strong>
              </div>
              <div className={styles.metaCard}>
                <span>Operating Model</span>
                <strong>
                  Online-operated platform based in Ramgarh, Jharkhand, India
                </strong>
              </div>
            </div>
          </section>

          <section className={styles.noticeSection}>
            <SectionHead
              Icon={FaExclamationTriangle}
              title={"Important platform notices"}
            />

            <div className={styles.noticeBox}>
              <ul>
                {importantNotices.map((notice, index) => (
                  <li key={index}>{notice}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.policiesSection}>
            <SectionHead Icon={FaGavel} title={"Policy navigation"} />
            <p className={styles.sectionIntro}>
              Review the policy categories below to find the document relevant
              to your question. Each linked page addresses a specific area of
              platform use and should be read carefully before participating in
              earnings, referrals, withdrawals, or optional platform features.
            </p>

            <div className={styles.groupGrid}>
              {policyGroups.map((group, index) => (
                <article key={index} className={styles.groupCard}>
                  <div className={styles.groupTitleRow}>
                    <span className={styles.groupIcon}>{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>

                  <div className={styles.linkList}>
                    {group.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className={styles.policyLinkCard}
                      >
                        <h4>{item.title}</h4>
                        <p>
                          {item.desc} <span>Learn more</span>
                        </p>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.cautionSection}>
            <SectionHead Icon={FaUserShield} title={"Key user cautions"} />

            <div className={styles.cautionGrid}>
              {cautions.map((item, index) => (
                <article key={index} className={styles.cautionCard}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.summarySection}>
            <SectionHead Icon={FaInfoCircle} title={"Plain-language summary"} />

            <div className={styles.summaryBox}>
              <p>
                Before using VELOOP Rewards, every user should understand the
                following basic points. This summary is provided for convenience
                only. Where a full policy exists, the detailed policy page will
                control in case of any inconsistency.
              </p>
              <ul>
                {summaryPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.supportSection}>
            <SectionHead
              Icon={FaEnvelope}
              title={"Support & compliance information"}
            />

            <div className={styles.supportGrid}>
              <div className={styles.supportCard}>
                <h3>Contact details</h3>
                <p>
                  <strong>Support Email:</strong> velooprewardsteam@gmail.com
                </p>
                <p>
                  <strong>Business / Legal Email:</strong>{" "}
                  veloop.ifratech@gmail.com
                </p>
                <p>
                  For support requests, withdrawal concerns, legal questions,
                  copyright complaints, or compliance-related communications,
                  please contact the appropriate platform email with relevant
                  account details or screenshots where required.
                </p>
              </div>

              <div className={styles.supportCard}>
                <h3>Response and operations</h3>
                <p>
                  <FaClock /> <strong>Response Time:</strong> Usually within 24
                  to 72 hours
                </p>
                <p>
                  <FaMapMarkerAlt /> <strong>Location:</strong> Ramgarh,
                  Jharkhand, India
                </p>
                <p>
                  VELOOP Rewards is an online-operated rewards platform. Users
                  requesting account deletion or personal data deletion may be
                  required to complete account verification before action is
                  processed.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.finalNoticeSection}>
            <SectionHead Icon={FaGavel} title={"Final legal notice"} />
            <div className={styles.finalNoticeBox}>
              <p>
                This Legal & Policy Center is provided to improve transparency,
                user awareness, and access to the rules that govern VELOOP
                Rewards. Individual policy documents contain more detailed terms
                applicable to specific areas of platform use, and those detailed
                documents should be reviewed regularly.
              </p>
              <p>
                If any summary on this page differs from a more specific policy
                page, the more specific legal document will control for that
                subject matter. VELOOP Rewards reserves the right to amend,
                expand, replace, suspend, or remove any policy, reward rule,
                verification standard, feature, or operational process at any
                time, subject to business, operational, compliance, or legal
                requirements.
              </p>
              <p>
                All use of VELOOP Rewards is subject to applicable Indian law
                and the platform’s published governing terms. Continued use of
                the platform after updates may be treated as acceptance of the
                revised legal materials.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MasterLegalPage;
