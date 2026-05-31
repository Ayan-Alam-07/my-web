import { FaCoins, FaGem, FaWallet, FaArrowTrendUp } from "react-icons/fa6";

import { useList } from "../../../Context/ContextStore";

import styles from "./EarningsOverview.module.css";

const EarningsOverview = () => {
  const { user, withdrawals } = useList();

  console.group("EARNINGS OVERVIEW");

  console.log("User:", user);
  console.log("Withdrawals:", withdrawals);

  console.groupEnd();

  if (!user) {
    console.error("EARNINGS OVERVIEW ERROR: User Missing");

    return null;
  }

  const totalWithdrawals = withdrawals?.length || 0;

  const totalWithdrawnAmount =
    withdrawals?.reduce((sum, item) => sum + Number(item?.amount || 0), 0) || 0;

  const cards = [
    {
      id: 1,
      title: "Available VEs",
      value: user?.coins || 0,
      icon: <FaCoins />,
      color: "#FFD700",
    },
    {
      id: 2,
      title: "Available Gems",
      value: user?.gems || 0,
      icon: <FaGem />,
      color: "#9C6BFF",
    },
    {
      id: 3,
      title: "Total Withdrawals",
      value: totalWithdrawals,
      icon: <FaWallet />,
      color: "#00C853",
    },
    {
      id: 4,
      title: "Withdrawn Amount",
      value: totalWithdrawnAmount,
      icon: <FaArrowTrendUp />,
      color: "#5F6FFF",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Earnings Overview</h3>

        <p>Wallet and rewards performance</p>
      </div>

      <div className="row g-3">
        {cards.map((card) => (
          <div key={card.id} className="col-md-6 col-xl-3">
            <div className={styles.card}>
              <div
                className={styles.icon}
                style={{
                  color: card.color,
                }}
              >
                {card.icon}
              </div>

              <div>
                <h2>{card.value}</h2>

                <p>{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsOverview;
