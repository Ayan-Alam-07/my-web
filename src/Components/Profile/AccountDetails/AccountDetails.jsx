import { FaUserShield } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { useList } from "../../../Context/ContextStore";

import styles from "./AccountDetails.module.css";
import css from "../UserProfile.module.css";

const AccountDetails = () => {
  const { user, level, data, isAuthenticated } = useList();

  const details = [
    {
      title: "Email",
      value: user?.email || "Not Available",
      icon: <FaEnvelope />,
    },
    {
      title: "User ID",
      value: user?.userId || "Loading...",
      icon: <FaFingerprint />,
    },
    {
      title: "Current Level",
      value: level || 0,
      icon: <FaMedal />,
    },
    {
      title: "Current XP",
      value: data?.xp || 0,
      icon: <FaUserShield />,
    },
    {
      title: "Available VEs",
      value: user?.coins || 0,
      icon: <FaCoins />,
    },
  ];

  return (
    <div className={`${css.card} ${styles.accCard}`}>
      <div className={css.header}>
        <h3>Account Details</h3>

        <div className={isAuthenticated ? styles.online : styles.offline}>
          {isAuthenticated ? "Verified" : "Offline"}
        </div>
      </div>

      <div className={styles.details}>
        {details.map((item, idx) => (
          <div
            key={item.title}
            className={styles.detailItem}
            style={{
              marginBottom: idx === details.length - 1 ? "7.44px" : "",
            }}
          >
            <div className={styles.icon}>{item.icon}</div>

            <div>
              <p className={styles.label}>{item.title}</p>

              <h5 className={styles.value}>
                {details.length - 3 === idx ? "0" : ""}
                {item.value}{" "}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetails;
