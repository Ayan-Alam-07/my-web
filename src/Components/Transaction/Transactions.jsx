// src/Components/Wallet/Transactions.jsx

import style from "./Transactions.module.css";
import { useList } from "../../Context/ContextStore";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaWallet,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Transactions = () => {
  //showTransaction
  const {
    isRedeemHistory,
    setIsRedeemHistory,
    setIsWalletToHistory,
    setIsLoading,
    withdrawals,
  } = useList();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 777);

    return () => clearTimeout(timer);
  }, []);

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
      case "completed":
      case "approved":
      case "success":
        return <FaCheckCircle />;

      case "pending":
      case "processing":
        return <FaClock />;

      case "rejected":
      case "failed":
        return <FaTimesCircle />;

      default:
        return <FaWallet />;
    }
  };

  const filteredWithdrawals = withdrawals.filter((item) => {
    if (selectedFilter === "All") return true;

    return item.status?.toLowerCase() === selectedFilter.toLowerCase();
  });

  const displayedWithdrawals = isRedeemHistory
    ? filteredWithdrawals
    : filteredWithdrawals.slice(0, 2);

  return (
    <div className={`mb-5 ${isRedeemHistory ? "container-fluid px-0" : ""}`}>
      {isRedeemHistory && <CommonNavArr id={16} navigation={"/Home"} />}

      <div
        className={`${isRedeemHistory ? "container px-3 mt-4 mt-md-5 " : ""}`}
      >
        {/* {!isRedeemHistory && showTransaction && (
          <div className="mt-4 pt-3 pt-lg-0 mt-lg-0">
            <p className={style.historyPara}>Transactions History</p>
          </div>
        )} */}

        <div
          className={`${!isRedeemHistory ? "mt-3" : ""} ${
            style.transactionsWrapper
          }`}
        >
          {isRedeemHistory && (
            <div className={style.headerSection}>
              <h2>Withdrawal Activity</h2>
              <p className="m-0">
                Track all your recent withdrawal requests and rewards
              </p>
            </div>
          )}

          <div className={style.filterWrapper}>
            <p className={style.filterPara}>Transactions:</p>

            {isRedeemHistory && (
              <div className={!isRedeemHistory ? "pt-3 pb-2" : ""}>
                {["All", "Paid", "Pending", "Rejected"].map((filter, idx) => (
                  <button
                    key={filter}
                    className={`${style.filterBtn}  ${
                      selectedFilter === filter
                        ? style.activeFilter
                        : style.filterHover
                    }`}
                    style={{ margin: idx === 3 ? "0px" : "" }}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    <span className={style.fltrSuccess}>
                      {idx === 1 ? "Success" : filter}
                    </span>
                    <span className={style.fltrPaid}>{filter}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {displayedWithdrawals.length > 0 ? (
            <div className={style.timeline}>
              {displayedWithdrawals.map((item) => (
                <div className={style.timelineItem} key={item._id}>
                  <div className={style.timelineLine}></div>

                  <div
                    className={`${style.statusIcon} ${
                      style[item.status?.toLowerCase()]
                    }`}
                  >
                    {getStatusIcon(item.status)}
                  </div>

                  <div className={style.transactionCard}>
                    <div className={style.cardTop}>
                      <div>
                        <h3 className={style.amount}>
                          ₹ {item.payoutAmount || 0}
                        </h3>

                        <p
                          className={`${style.method} ${item.status === "paid" ? style.methPaid : "" || item.status === "pending" ? style.methPending : "" || item.status === "rejected" ? style.methRejected : ""}`}
                        >
                          <FaArrowDown />
                          {item.payoutType || "N/A"}
                        </p>
                      </div>

                      <span
                        className={`${style.statusBadge} ${
                          style[item.status?.toLowerCase()]
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className={style.cardBody}>
                      <div className={style.infoBox}>
                        <span>Coins Used</span>
                        <strong>{item.deductedCoins || 0}</strong>
                      </div>

                      <div className={style.infoBox}>
                        <span>Date</span>
                        <strong>
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "N/A"}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={style.emptyContainer}>
              <div className={style.emptyCard}>
                <FaWallet className={style.emptyIcon} />
                <h3>No Withdrawals Found</h3>
                <p>Your withdrawal history will appear here.</p>
              </div>
            </div>
          )}
        </div>
        {!isRedeemHistory && (
          <div className={style.allTransactionsCont}>
            <button
              className={style.allTransactions}
              onClick={() => {
                setIsWalletToHistory(true);
                setIsRedeemHistory(true);
                navigate("/redeem-history");
              }}
            >
              see all transactions{" "}
              <span className={style.arrow}>
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
