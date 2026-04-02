import { useState, useRef, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsDropdown.module.css";
import { useList } from "../../Context/ContextStore";
import { FaCopy } from "react-icons/fa";
import { showSuccess } from "../../utils/Toast";

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, logout, setIsRedeemHistory } = useList(); // getting user from context

  const email = user?.email || "";
  const extractedName = email ? email.substring(0, 6) : "User";
  const avatarLetter = email ? email.charAt(0).toUpperCase() : "U";

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const copyUserID = () => {
    navigator.clipboard.writeText(user.userId);
    showSuccess("UserID Copied!");
  };

  const dropDownMenu = [
    {
      id: 1,
      title: "Refer & Earn",
      click: () => navigate("/referral"),
    },
    {
      id: 2,
      title: "Tasks",
      click: () => navigate("/captcha-tasks"),
    },
    {
      id: 3,
      title: "Wallet",
      click: () => navigate("/wallet"),
    },
    {
      id: 4,
      title: "Redeem History",
      click: () => {
        setIsRedeemHistory(true);
        navigate("/redeem-history");
      },
    },
  ];
  const menuLength = dropDownMenu.length;

  return (
    <div className={styles.settingsContainer} ref={dropdownRef}>
      {/* Settings Icon */}
      <FiSettings
        size={24}
        className={`${styles.settingsIcon} ${isOpen ? styles.rotate : ""}`}
        onClick={toggleDropdown}
      />

      {/* Dropdown */}
      <div
        className={`${styles.settingsDropdown} ${
          isOpen ? styles.dropdownOpen : ""
        }`}
      >
        <div className="d-flex align-items-center ms-3 mb-2">
          {/* Avatar */}
          <div className={styles.avatar} onClick={() => navigate("/profile")}>
            {user?.photo ? (
              <img src={user.photo} alt="profile" />
            ) : (
              <span>{avatarLetter}</span>
            )}
          </div>

          {/* Profile Section */}
          <div className={styles.profileSection}>
            <div>
              <div className={styles.profileName}>{extractedName}</div>
              <div className={styles.userId}>
                ID: {user?.userId || "fetching..."}
              </div>
            </div>
            <FaCopy
              style={{ cursor: "pointer" }}
              className="ms-3 mb-1"
              size={16}
              onClick={copyUserID}
            />
          </div>
        </div>

        {dropDownMenu.map((menu) => (
          <div
            key={menu.id}
            className={styles.dropdownItem}
            style={{
              borderBottom: menu.id !== menuLength && "2px solid #1f2238",
            }}
            onClick={menu.click}
          >
            {menu.title}
          </div>
        ))}

        <button className={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
