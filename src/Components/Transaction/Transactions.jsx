// src/Components/Wallet/Transactions.jsx

import style from "./Transactions.module.css";
import { useList } from "../../Context/ContextStore";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { useEffect } from "react";

const Transactions = ({ showTransaction }) => {
  const { isRedeemHistory, setIsLoading, withdrawals } = useList();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 777);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`mb-5 ${isRedeemHistory ? "container-fluid px-0" : ""}`}>
      {isRedeemHistory && <CommonNavArr id={16} navigation={"/Home"} />}
      <div className={`${isRedeemHistory ? "container px-2 mt-4" : ""}`}>
        {!isRedeemHistory && showTransaction && (
          <div className="mt-4 pt-3 pt-lg-0 mt-lg-0">
            <p className={style.historyPara}>Transactions History:</p>
          </div>
        )}
        <div
          className={`${!isRedeemHistory ? "mt-3 " : ""} ${style.transactionsWrapper}`}
        >
          {isRedeemHistory && (
            <h2 style={{ textAlign: "center" }}>Withdrawal Details</h2>
          )}

          <div className={style.tableWrapper}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Coins Used</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {withdrawals.length > 0 ? (
                  withdrawals.map((item) => (
                    <tr key={item._id}>
                      <td className={style.payAmt}>
                        ₹{item.payoutAmount || 0}
                      </td>
                      <td>{item.payoutType || "N/A"}</td>
                      <td className={style.payAmt}>
                        {item.deductedCoins || 0}
                      </td>
                      <td>
                        <span
                          className={`${style.status} ${style[item.status]}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">
                      <span className={style.emptyState}>
                        No withdrawals found.
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
