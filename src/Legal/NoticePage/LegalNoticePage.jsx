import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaGavel,
  FaSyncAlt,
  FaBan,
  FaBalanceScale,
  FaFileContract,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Legal Notice" },
  {
    title: "Applies To",
    value: "All platform use, legal interpretation, and governing protections",
  },
];

const supportTitle = ["Legal contact", "Notice"];

const supportDesc = [
  "General legal, business, compliance, copyright, or formal notice-related communications may be directed to VELOOP Rewards using its published business contact details.",
  "This Legal Notice provides general legal framework language for the operation of VELOOP Rewards and should be read alongside the full set of platform legal documents. It does not replace independently required legal review where applicable.",
];

const finalNotice = [
  "This Legal Notice should be read together with the Terms & Conditions, Privacy Policy, Disclaimer, Anti-Fraud Policy, Community Rules, Platform Currency Policy, Withdrawal & Reward Verification Policy, and all other legal pages published by VELOOP Rewards.",
  "By accessing or using VELOOP Rewards, users acknowledge that platform participation is subject to the complete legal framework published by VELOOP Rewards, including policies that may be updated, expanded, consolidated, or replaced from time to time.",
];

const LegalNoticePage = () => {
  return (
    <LegalHero
      badge="Legal Notice"
      hTitle="Legal Notice"
      hText="This Legal Notice sets out general legal protections, interpretation rules, and framework clauses applicable to VELOOP Rewards and its published legal documents."
      metaInfo={metaInfo}
      crumb
      cTitle="Legal Notice"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important legal notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is an online-operated rewards platform owned and
            operated as an individual-owned platform based in India. All access
            to and use of the platform are subject to the legal documents,
            policies, operational rules, and compliance protections published by
            VELOOP Rewards.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaGavel} title="Governing law and jurisdiction" />
        <div className={styles.card}>
          <p>
            Unless otherwise required by applicable law, the legal framework of
            VELOOP Rewards shall be governed and interpreted in accordance with
            the laws of India. Any disputes, claims, or legal matters arising
            out of or in connection with the platform, its services, or its
            legal documents shall be subject to the appropriate jurisdiction
            within India.
          </p>
          <p>
            VELOOP Rewards may also take into account operational, compliance,
            security, and region-based factors when determining access
            restrictions, feature limitations, or service availability in
            selected locations.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaSyncAlt}
          title="Policy updates and continued use"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to update, revise, replace,
            expand, combine, or remove any of its legal pages, operational
            notices, reward rules, feature notices, privacy terms, or platform
            policies at any time, subject to applicable law.
          </p>
          <p>
            Continued use of the platform after updates become effective may be
            treated as acceptance of the revised terms to the extent permitted
            by law. Users are responsible for reviewing current legal documents
            periodically.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaBan} title="No waiver and severability" />
        <div className={styles.card}>
          <p>
            If VELOOP Rewards does not immediately enforce a right, remedy,
            restriction, or policy provision, that delay or omission shall not
            be treated as a waiver of the relevant right or legal protection.
          </p>
          <p>
            If any provision of a platform legal document is found to be
            invalid, unenforceable, or unlawful, the remaining provisions shall
            continue in full force to the maximum extent permitted by law,
            unless the affected provision is so fundamental that the remaining
            framework cannot reasonably operate without it.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Interpretation and platform discretion"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to interpret its policies, apply
            its rules, protect its systems, and make operational decisions in a
            manner reasonably intended to support legal compliance, platform
            integrity, user safety, fraud prevention, service continuity, and
            business stability.
          </p>
          <p>
            Headings, summaries, examples, explanatory phrases, interface text,
            or simplified notices are provided for convenience and do not limit
            the full meaning or enforceability of the underlying policy language
            unless expressly stated otherwise.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaFileContract}
          title="Entire framework and supporting documents"
        />
        <div className={styles.card}>
          <p>
            This Legal Notice forms part of the broader legal framework
            governing VELOOP Rewards. The platform’s rights, limitations, user
            obligations, enforcement authority, privacy practices, rewards
            treatment, and operational protections must be read across all
            applicable policy pages together rather than in isolation.
          </p>
          <p>
            Where multiple policies apply to the same issue, VELOOP Rewards may
            interpret them together in a manner that best reflects the intended
            operation of the platform and the protection of its services, users,
            and legitimate business interests.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default LegalNoticePage;
