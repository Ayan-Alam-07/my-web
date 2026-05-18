import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaCopyright,
  FaFileSignature,
  FaEnvelopeOpenText,
  FaBan,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "DMCA / Copyright Policy" },
  { title: "Applies To", value: "Content, branding, and user submissions" },
];

const supportTitle = ["Copyright contact", "Review note"];

const supportDesc = [
  "Users, rights holders, partners, or legal representatives who wish to report copyright concerns or ownership disputes may contact VELOOP Rewards using the business or legal communication channel with complete complaint details.",
  "VELOOP Rewards may review intellectual property complaints and may request additional information before taking action. Incomplete, misleading, or abusive notices may be rejected or ignored where permitted by law.",
];

const finalNotice = [
  "This DMCA / Copyright Policy should be read together with the Terms & Conditions, Disclaimer, Community Rules, Legal Notice, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that platform branding, interface content, system design, and related materials may be protected by intellectual property laws, and that unauthorized use, copying, or infringement complaints may lead to content removal, enforcement action, or legal escalation where appropriate.",
];

const complaintRequirements = [
  "A clear identification of the copyrighted work, brand material, or other protected content claimed to be infringed.",
  "A clear identification of the allegedly infringing material or location on the platform, including links, screenshots, or other reasonably sufficient details.",
  "The complainant’s name, organization details where relevant, email address, and a statement of authority to act where acting on behalf of the rights holder.",
  "A good-faith statement that the complained-of use is believed to be unauthorized by the rights holder, its agent, or the law.",
  "A statement that the information provided is accurate to the best of the complainant’s knowledge.",
];

const DmcaCopyrightPolicyPage = () => {
  return (
    <LegalHero
      badge="DMCA / Copyright Policy"
      hTitle="DMCA / Copyright Policy"
      hText="This policy explains how VELOOP Rewards handles copyright, branding, ownership, and infringement-related concerns involving platform content, user submissions, promotional materials, logos, text, graphics, and other protected material."
      metaInfo={metaInfo}
      crumb
      cTitle="DMCA / Copyright Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important copyright notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards respects intellectual property rights and expects
            users, partners, advertisers, and other third parties to do the
            same. Unauthorized use, copying, reposting, imitation, or
            infringement of protected content may result in removal,
            restriction, account action, or further legal steps where
            appropriate.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaCopyright}
          title="Platform ownership and protected materials"
        />
        <div className={styles.card}>
          <p>
            Unless otherwise stated, the VELOOP Rewards platform design, text,
            layout, brand elements, logos, names, interface structure, original
            policy content, reward system presentation, and related platform
            materials may be owned by or licensed to VELOOP Rewards and
            protected by applicable copyright, trademark, and related laws.
          </p>
          <p>
            Users must not copy, reproduce, republish, distribute, modify,
            reverse engineer, commercially exploit, or use such materials in a
            way that infringes the rights of VELOOP Rewards or any third-party
            rights holder unless authorized by law or by express written
            permission.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaFileSignature}
          title="Submitting a copyright complaint"
        />
        <div className={styles.card}>
          <p>
            If a rights holder or authorized representative believes that
            material available on or through VELOOP Rewards infringes copyright
            or other protected rights, a complaint may be submitted to the
            platform for review.
          </p>
          <p>
            The complaint should include enough information for VELOOP Rewards
            to reasonably identify and assess the issue, including:
          </p>
          <ul>
            {complaintRequirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaEnvelopeOpenText}
          title="Review process and platform response"
        />
        <div className={styles.card}>
          <p>
            Upon receiving a sufficiently detailed complaint, VELOOP Rewards may
            review the reported material and may take action that it reasonably
            considers appropriate. This may include requesting more information,
            limiting access, removing content, warning a user, restricting
            features, or suspending an account in cases of apparent repeat or
            serious infringement.
          </p>
          <p>
            VELOOP Rewards is not required to remove content automatically upon
            receipt of every complaint, especially where the complaint is
            incomplete, abusive, misleading, unclear, unsupported, or subject to
            a genuine dispute about ownership, authorization, or fair use.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBan}
          title="Misuse of notices and repeat infringement"
        />
        <div className={styles.card}>
          <p>
            Users must not submit false, bad-faith, abusive, misleading, or
            retaliatory copyright complaints. VELOOP Rewards may reject such
            complaints and may take action where the notice process itself is
            being misused.
          </p>
          <p>
            Repeated infringement, repeated unauthorized use of protected
            material, or repeated submission of unlawful or infringing content
            may result in content removal, restrictions, suspension, account
            termination, or related enforcement steps under other applicable
            platform policies.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Legal interpretation and limits"
        />
        <div className={styles.card}>
          <p>
            This policy is intended to provide a practical process for handling
            copyright-related concerns and does not constitute legal advice to
            any user, complainant, or third party. Rights holders remain
            responsible for ensuring that their complaint is accurate, lawful,
            and properly supported.
          </p>
          <p>
            VELOOP Rewards reserves the right to interpret, apply, and enforce
            this policy in a manner consistent with platform operations,
            applicable law, and available evidence. The platform may also update
            this policy from time to time as services evolve or as legal and
            compliance requirements change.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default DmcaCopyrightPolicyPage;
