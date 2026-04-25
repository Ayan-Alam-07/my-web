import styles from "./ActionButtons.module.css";
import { performAction } from "../../../services/levelService";

const actions = [
  { label: "Watch Ad", type: "watchAd" },
  { label: "Captcha", type: "captcha" },
  { label: "Referral", type: "referral" },
];

const ActionButtons = ({ token, refresh }) => {
  const handle = async (type) => {
    await performAction(type, token);
    refresh();
  };

  return (
    <div className={styles.container}>
      {actions.map((a, i) => (
        <button key={i} onClick={() => handle(a.type)} className={styles.btn}>
          {a.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
