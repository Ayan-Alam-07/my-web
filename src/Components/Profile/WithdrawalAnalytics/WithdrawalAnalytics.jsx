import { FaWallet, FaClock, FaIndianRupeeSign } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

import { useList } from "../../../Context/ContextStore";

import styles from "./WithdrawalAnalytics.module.css";

const WithdrawalAnalytics = () => {
  const { withdrawals } = useList();

  console.group("WITHDRAWAL ANALYTICS");

  console.log("Withdrawals:", withdrawals);

  console.groupEnd();

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
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Withdrawal Analytics</h3>

        <p>Monitor your payout performance</p>
      </div>

      <div className="row g-3 mb-4">
        {analyticsCards.map((card) => (
          <div key={card.id} className="col-md-6 col-xl-3">
            <div className={styles.analyticsCard}>
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

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h4>Recent Withdrawals</h4>
        </div>

        {withdrawalList.length === 0 ? (
          <div className={styles.emptyState}>No withdrawals found</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Amount</th>

                  <th>Status</th>

                  <th>Method</th>

                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {withdrawalList.slice(0, 5).map((withdrawal, index) => (
                  <tr key={withdrawal?._id || index}>
                    <td>₹{withdrawal?.amount || 0}</td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          withdrawal?.status?.toLowerCase() === "approved"
                            ? styles.success
                            : styles.pending
                        }`}
                      >
                        {withdrawal?.status || "Pending"}
                      </span>
                    </td>

                    <td>{withdrawal?.paymentMethod || "UPI"}</td>

                    <td>
                      {withdrawal?.createdAt
                        ? new Date(withdrawal.createdAt).toLocaleDateString()
                        : "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalAnalytics;
