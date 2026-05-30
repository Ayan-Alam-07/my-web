import { Link } from "react-router-dom";
import styles from "./LegalHero.module.css";
import LegalNav from "./LegalNav";
import { FaClock, FaEnvelope, FaGavel, FaMapMarkerAlt } from "react-icons/fa";
import SectionHead from "./SectionHead";

const LegalHero = ({
  badge,
  hTitle,
  hText,
  metaInfo,
  crumb,
  cTitle,
  children,
  fNoticeText,
  supportTitle,
  supportDesc,
  isRewards = null,
}) => {
  const supportInfo = [
    {
      title: supportTitle[0],
      subTitle1: "Support Email:",
      value1: "velooprewardsteam@gmail.com",
      subTitle2: "Business / Legal Email:",
      value2: "veloop.ifratech@gmail.com",
      desc: supportDesc[0],
    },
    {
      title: supportTitle[1],
      subTitle1: "Response Time:",
      value1: "Usually within 24 to 48 hours",
      subTitle2: "Location:",
      value2: "Ramgarh, Jharkhand, India",
      desc: supportDesc[1],
    },
  ];

  return (
    <div className={styles.page}>
      <LegalNav />
      <div className="container px-0 px-md-3">
        <main className={styles.main}>
          {crumb && (
            <div className={styles.breadcrumbs}>
              <Link to="/">Home</Link>
              <span>/</span>
              {isRewards !== null ? (
                <Link to="/help-center">help-center</Link>
              ) : (
                <Link to="/legal">Legal</Link>
              )}
              <span>/</span>
              <span>{cTitle}</span>
            </div>
          )}

          <section className={styles.hero}>
            <p className={styles.eyebrow}>
              <span>{badge}</span>
            </p>
            <h1>{hTitle}</h1>
            <p className={styles.heroText}>{hText}</p>

            <div className={styles.metaGrid}>
              {metaInfo.map((meta, idx) => (
                <div key={idx} className={styles.metaCard}>
                  <span>{meta.title}</span>
                  <strong>{meta.value}</strong>
                </div>
              ))}
            </div>
          </section>

          {children}

          {/* support section */}
          <section className={styles.supportSection}>
            <SectionHead
              Icon={FaEnvelope}
              title={"Support & compliance information"}
            />

            <div className={styles.supportGrid}>
              {supportInfo.map((info, idx) => (
                <div key={idx} className={styles.supportCard}>
                  <h3>{info.title}</h3>
                  <p>
                    {idx === 1 && <FaClock className="mb-1" />}{" "}
                    <strong>{info.subTitle1}</strong> {info.value1}
                  </p>
                  <p>
                    {idx === 1 && <FaMapMarkerAlt className="mb-1" />}{" "}
                    <strong>{info.subTitle2}</strong> {info.value2}
                  </p>
                  <p>{info.desc}</p>
                </div>
              ))}

              {/* <div className={styles.supportCard}>
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
              </div> */}
            </div>
          </section>

          {/* Notice section */}
          <section className={styles.finalNoticeSection}>
            <SectionHead
              Icon={FaGavel}
              title={`Final ${!crumb ? "legal" : ""} notice`}
            />
            <div className={styles.finalNoticeBox}>
              {fNoticeText.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default LegalHero;
