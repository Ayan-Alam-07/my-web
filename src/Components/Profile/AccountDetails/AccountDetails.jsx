import { FaUserShield } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { useList } from "../../../Context/ContextStore";

import styles from "./AccountDetails.module.css";

const AccountDetails = () => {
  const { user, level, data, isAuthenticated } = useList();

  console.group("ACCOUNT DETAILS");

  console.log("User:", user);
  console.log("Level:", level);
  console.log("XP Data:", data);
  console.log("Authenticated:", isAuthenticated);

  console.groupEnd();

  if (!user) {
    console.error("ACCOUNT DETAILS ERROR: User Missing");

    return null;
  }

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
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Account Details</h3>

        <div className={isAuthenticated ? styles.online : styles.offline}>
          {isAuthenticated ? "Verified" : "Offline"}
        </div>
      </div>

      <div className={styles.details}>
        {details.map((item) => (
          <div key={item.title} className={styles.detailItem}>
            <div className={styles.icon}>{item.icon}</div>

            <div>
              <p className={styles.label}>{item.title}</p>

              <h5 className={styles.value}>{item.value}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetails;
