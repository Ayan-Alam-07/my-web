import { Link, Navigate } from "react-router-dom";
import styles from "./LegalNav.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useState } from "react";

const LegalNav = () => {
  const [onEnter, setOnEnter] = useState(1);

  const actionBtn = [
    {
      icon: FaArrowLeft,
      title: "Back",
      secTitle: "to Home",
      navigate: "/",
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
            <Link
              key={idx}
              to={act.navigate}
              className={`${styles[act.class]} 
              ${onEnter !== idx ? styles.clickedBtn : styles.unclickedBtn}`}
              onMouseEnter={() => setOnEnter(idx)}
            >
              <act.icon size={idx === 1 && 20} />
              <span className="d-flex">
                {act.title}
                <span className="d-none d-lg-block ms-1"> {act.secTitle}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
export default LegalNav;
