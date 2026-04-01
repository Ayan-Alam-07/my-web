// WithdrawalsTable.jsx

import { useState } from "react";
import style from "./WithdrawalsTable.module.css";
import { FaCheckCircle, FaTimesCircle, FaWallet } from "react-icons/fa";
import {
  markWithdrawalPaid,
  rejectWithdrawal,
} from "../../services/adminService";

const WithdrawalsTable = ({ withdrawals = [], setWithdrawals }) => {
  const [actionLoading, setActionLoading] = useState("");

  const handlePaid = async (id) => {
    try {
      setActionLoading(id);
      await markWithdrawalPaid(id);

      setWithdrawals((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "paid" } : item,
        ),
      );
    } catch (error) {
      console.error(error);
      alert(error?.response?.data || "Failed to mark withdrawal as paid");
    } finally {
      setActionLoading("");
    }
  };

  const handleReject = async (id) => {
    try {
      setActionLoading(id);
      await rejectWithdrawal(id);

      setWithdrawals((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "rejected" } : item,
        ),
      );
    } catch (error) {
      console.error(error);
      alert(error?.response?.data || "Failed to reject withdrawal");
    } finally {
      setActionLoading("");
    }
  };

  return (
    <div className={style.tableWrapper}>
      <div className={style.topBar}>
        <div>
          <h2 className={style.heading}>Withdrawal Requests</h2>
          <p className={style.subHeading}>
            Manage all user withdrawal requests from one place.
          </p>
        </div>

        <div className={style.requestBadge}>
          <FaWallet />
          <span>{withdrawals.length} Requests</span>
        </div>
      </div>

      <div className={style.tableResponsive}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Amount</th>
              <th>Coins Deducted</th>
              <th>Mode</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {withdrawals.length > 0 ? (
              withdrawals.map((item) => (
                <tr key={item._id}>
                  <td>{item.userId || item.user || "N/A"}</td>

                  <td>
                    <span className={style.amountBadge}>
                      ₹{item.payoutAmount || 0}
                    </span>
                  </td>

                  <td>{item.deductedCoins || 0}</td>

                  <td>
                    <span className={style.modeBadge}>
                      {item.payoutType || "N/A"}
                    </span>
                  </td>

                  <td>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td>
                    <span className={`${style.status} ${style[item.status]}`}>
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <div className={style.actionButtons}>
                      <button
                        className={style.paidBtn}
                        disabled={
                          item.status !== "pending" ||
                          actionLoading === item._id
                        }
                        onClick={() => handlePaid(item._id)}
                      >
                        <FaCheckCircle />
                        {actionLoading === item._id ? "Updating..." : "Paid"}
                      </button>

                      <button
                        className={style.rejectBtn}
                        disabled={
                          item.status !== "pending" ||
                          actionLoading === item._id
                        }
                        onClick={() => handleReject(item._id)}
                      >
                        <FaTimesCircle />
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className={style.emptyState}>
                  No withdrawal requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalsTable;
