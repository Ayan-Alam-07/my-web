import { FaWallet, FaClock, FaIndianRupeeSign } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

import { useList } from "../../../Context/ContextStore";

import styles from "./WithdrawalAnalytics.module.css";
import css from "../UserProfile.module.css";

const WithdrawalAnalytics = () => {
  const { withdrawals } = useList();

  const withdrawalList = Array.isArray(withdrawals) ? withdrawals : [];

  const successfulWithdrawals = withdrawalList.filter(
    (item) => item?.status?.toLowerCase() === "approved",
  );

  const pendingWithdrawals = withdrawalList.filter(
    (item) => item?.status?.toLowerCase() === "pending",
  );

  const totalWithdrawnAmount = successfulWithdrawals.reduce(
    (sum, item) => sum + Number(item?.amount || 0),
    0,
  );

  const analyticsCards = [
    {
      id: 1,
      title: "Total Requests",
      value: withdrawalList.length,
      icon: <FaWallet />,
      color: "#5F6FFF",
    },
    {
      id: 2,
      title: "Approved",
      value: successfulWithdrawals.length,
      icon: <FcApproval />,
      color: "#00C853",
    },
    {
      id: 3,
      title: "Pending",
      value: pendingWithdrawals.length,
      icon: <FaClock />,
      color: "#FFD700",
    },
    {
      id: 4,
      title: "Withdrawn",
      value: totalWithdrawnAmount,
      icon: <FaIndianRupeeSign />,
      color: "#00BCD4",
    },
  ];

  return (
    <div className={styles.card}>
      <div className={css.header}>
        <div>
          <h3>Withdrawal Analytics</h3>
          <p>Monitor your payout performance</p>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {analyticsCards.map((card) => (
          <div key={card.id} className="col-md-6 col-xl-3">
            <div className={`${css.card} ${styles.analyticsCard}`}>
              <div
                className={styles.icon}
                style={{
                  color: card.color,
                }}
              >
                {card.icon}
              </div>

              <h2>{card.value}</h2>

              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalAnalytics;
