import styles from "./BottomNavigation.module.css";

import { NavLink } from "react-router-dom";

import {
  FaHouse,
  FaWallet,
  FaClockRotateLeft,
  FaBars,
  FaPlus,
} from "react-icons/fa6";

const items = [
  {
    title: "Home",
    icon: FaHouse,
    path: "/staking",
  },

  {
    title: "Portfolio",
    icon: FaWallet,
    path: "/staking/portfolios",
  },

  {
    title: "History",
    icon: FaClockRotateLeft,
    path: "/staking/history",
  },

  {
    title: "More",
    icon: FaBars,
    path: "/staking/more",
  },
];

export default function BottomNavigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/staking" className={styles.link}>
        <FaHouse />

        <span>Home</span>
      </NavLink>

      <NavLink to="/staking/portfolios" className={styles.link}>
        <FaWallet />

        <span>Portfolio</span>
      </NavLink>

      <NavLink to="/staking/create" className={styles.center}>
        <FaPlus />
      </NavLink>

      <NavLink to="/staking/history" className={styles.link}>
        <FaClockRotateLeft />

        <span>History</span>
      </NavLink>

      <NavLink to="/staking/more" className={styles.link}>
        <FaBars />

        <span>More</span>
      </NavLink>
    </nav>
  );
}
