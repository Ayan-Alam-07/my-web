import { FaCoins, FaGem } from "react-icons/fa6";
import { SiJsonwebtokens } from "react-icons/si";
import { PiSpinnerBallDuotone } from "react-icons/pi";

import { useList } from "../../../Context/ContextStore";

import styles from "./EarningsOverview.module.css";
import css from "../UserProfile.module.css";

const EarningsOverview = () => {
  const { user, withdrawals } = useList();

  const totalWithdrawals = withdrawals?.length || 0;

  const totalWithdrawnAmount =
    withdrawals?.reduce((sum, item) => sum + Number(item?.amount || 0), 0) || 0;

  const token = 0;
  const spin = 0;

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
      title: "Token",
      value: token,
      icon: <SiJsonwebtokens />,
      color: "#F59E0B",
    },
    {
      id: 4,
      title: "Spin",
      value: spin,
      icon: <PiSpinnerBallDuotone size={30} />,
      color: "#06B6D4",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={css.header}>
        <div>
          <h3>Earnings Overview</h3>
          <p>Wallet and rewards performance</p>
        </div>
      </div>

      <div className="row g-3">
        {cards.map((card) => (
          <div key={card.id} className="col-md-6 col-xl-3">
            <div className={`${css.card} ${styles.earnCard} d-flex gap-3`}>
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
