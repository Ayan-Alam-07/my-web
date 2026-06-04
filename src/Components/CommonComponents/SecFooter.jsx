import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SecFooter.module.css";

const SecFooter = ({ name, link, mt = 40, mb = 20 }) => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Terms", link: "terms-and-conditions" },
    { title: "Privacy", link: "privacy-policy" },
    { title: "Support", link: "customer-service" },
  ];

  return (
    <footer
      className={styles.footer}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      <div className={styles.footerDivider} />
      <p className={styles.footerText}>
        <span
          onClick={() => navigate("/dmca-copyright-policy")}
          style={{ cursor: "pointer" }}
        >
          © 2025-{currentYear}
        </span>{" "}
        <span>VELoop Rewards</span> <span className={styles.footerDot}>·</span>{" "}
        All rights reserved
      </p>
      <div className={styles.footerLinks}>
        <span
          className={styles.footerLink}
          onClick={() => {
            navigate(link);
          }}
        >
          {name}
        </span>
        <span className={styles.footerDot}>·</span>

        {footerLinks.map((link, idx) => (
          <React.Fragment key={link.title}>
            <span
              className={styles.footerLink}
              onClick={() => navigate(`/${link.link}`)}
            >
              {link.title}
            </span>
            {footerLinks.length - 1 !== idx && (
              <span className={styles.footerDot}>·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};
export default SecFooter;
