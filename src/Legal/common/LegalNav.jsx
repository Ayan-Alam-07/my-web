import { Navigate, useNavigate } from "react-router-dom";
import styles from "./LegalNav.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useState } from "react";

const LegalNav = ({ status }) => {
  const [onEnter, setOnEnter] = useState(1);
  const navigateTo = useNavigate();

  const actionBtn = [
    {
      icon: FaArrowLeft,
      title: "Back",
      navigate: -1,
      class: "secondaryBtn",
    },
    {
      icon: TfiHeadphoneAlt,
      title: "Contact Support",
      navigate: "/customer-service",
      class: "primaryBtn",
    },
  ];

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.brand}>VELoop Rewards</div>
        <div className={styles.navActions}>
          {actionBtn.map((act, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setOnEnter(idx)}
              className={`${styles[act.class]} 
              ${onEnter !== idx ? styles.clickedBtn : styles.unclickedBtn}`}
              onClick={() => navigateTo(act.navigate)}
            >
              <act.icon size={idx === 1 && 20} />
              <span className="d-flex">{act.title}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default LegalNav;
