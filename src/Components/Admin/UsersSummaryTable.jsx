// UsersSummaryTable.jsx

import style from "./UsersSummaryTable.module.css";
import { FaCoins, FaGem, FaUsers } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { IoTodayOutline } from "react-icons/io5";

import { showInfo } from "../../utils/Toast";

const UsersSummaryTable = ({ users = [] }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showInfo(`copied! [ ${text} ]`);
  };

  const tableColumn = [
    "User ID",
    "Referral Code",
    "Joined",
    "Coins",
    "Gems",
    "Total Ads",
    "Today's Ads",
    "Total Withdrawals",
    "Pending Withdrawals",
    "Successful Withdrawals",
    "Rejected Withdrawals",
    "Lifetime Earnings",
  ];

  return (
    <div className={style.tableWrapper}>
      <div className={style.topBar}>
        <div>
          <h2 className={style.heading}>Users Summary</h2>
          <p className={style.subHeading}>
            Monitor user growth, balances and ad activity.
          </p>
        </div>

        <div className={style.totalUsersBadge}>
          <FaUsers />
          <span>{users.length} Users</span>
        </div>
      </div>

      <div className={style.tableResponsive}>
        <table className={style.table}>
          <thead>
            <tr>
              {tableColumn.map((col, idx) => (
                <th>
                  <span
                    style={{
                      display: "inline-block",
                      width: "100px",
                      textAlign: "center",
                    }}
                  >
                    {col}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <span
                      onClick={() => handleCopy(user.userId)}
                      style={{ cursor: "pointer" }}
                    >
                      {user.userId || "N/A"}
                    </span>
                  </td>

                  <td>
                    <span
                      className={style.referralBadge}
                      onClick={() => handleCopy(user.referralCode)}
                    >
                      {user.referralCode || "N/A"}
                    </span>
                  </td>

                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td>
                    <span className={style.coinBadge}>
                      <FaCoins /> {user.coins || 0}
                    </span>
                  </td>

                  <td>
                    <span className={style.gemBadge}>
                      <FaGem /> {user.gems || 0}
                    </span>
                  </td>

                  <td>
                    <span className={style.adsBadge}>
                      <MdAdsClick /> {user.totalAdsWatched || 0}
                    </span>
                  </td>

                  <td>
                    <span className={style.todayAdsBadge}>
                      <IoTodayOutline /> {user.todayAdsWatched || 0}
                    </span>{" "}
                  </td>

                  <td>₹ {user.totalWithdrawalAmount || 0}</td>
                  <td>{user.pendingWithdrawals || 0}</td>
                  <td>{user.successfulWithdrawals || 0}</td>
                  <td>{user.rejectedWithdrawals || 0}</td>
                  <td>₹ {user.lifetimeEarnings || 0}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className={style.emptyState}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersSummaryTable;
