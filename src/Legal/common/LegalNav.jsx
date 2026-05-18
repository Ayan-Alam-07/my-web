import { Navigate, useNavigate } from "react-router-dom";
import styles from "./LegalNav.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useState } from "react";

const LegalNav = () => {
  const [onEnter, setOnEnter] = useState(1);
  const navigateTo = useNavigate();

  const actionBtn = [
    {
      icon: FaArrowLeft,
      title: "Back",
      secTitle: "to Home",
      class: "secondaryBtn",
    },
    {
      icon: TfiHeadphoneAlt,
      title: "Contact Support",
      secTitle: "",
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
              onClick={() =>
                idx !== 1 ? navigateTo("/") : navigateTo(act.navigate)
              }
            >
              <act.icon size={idx === 1 && 20} />
              <span className="d-flex">
                {act.title}
                <span className="d-none d-lg-block ms-1"> {act.secTitle}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default LegalNav;
