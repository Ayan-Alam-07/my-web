import style from "./PayoutBody.module.css";
import { useState } from "react";
import upiLogo from "../../../assets/upi-logo-2.png";

const PayoutBody = () => {
  const [balance] = useState(10000); // Your coin balance
  const [selectedId, setSelectedId] = useState(null);

  const vouchers = [
    { id: 1, amount: 10, requiredCoins: 2500 },
    { id: 2, amount: 25, requiredCoins: 6250 },
    { id: 3, amount: 50, requiredCoins: 9000 },
    { id: 4, amount: 100, requiredCoins: 18000 },
    { id: 5, amount: 150, requiredCoins: 27000 },
    { id: 6, amount: 250, requiredCoins: 45000 },
    { id: 7, amount: 500, requiredCoins: 90000 },
    { id: 8, amount: 1000, requiredCoins: 180000 },
  ];

  const handleSelect = (id, required) => {
    if (balance >= required) setSelectedId(id);
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3">
        <div className={style.voucherContainer}>
          <h3>Available Voucher :</h3>
          <div className={style.voucherGrid}>
            {vouchers.map((v) => {
              const isAffordable = balance >= v.requiredCoins;
              const progress = Math.min((balance / v.requiredCoins) * 100, 100);

              return (
                <div
                  key={v.id}
                  className={`${style.voucherCard} ${
                    selectedId === v.id ? style.selected : ""
                  } ${!isAffordable ? style.disabled : ""}`}
                  onClick={() => handleSelect(v.id, v.requiredCoins)}
                >
                  <img src={upiLogo} alt="UPI" className={style.upiLogo} />
                  <p>
                    {" "}
                    <span className={style.amountRup}>₹ {v.amount}</span>{" "}
                  </p>
                  <p>
                    {balance} of {v.requiredCoins} VEs
                  </p>
                  <div className={style.progressBar}>
                    <div
                      className={style.fill}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <button disabled={!selectedId} className={style.redeemBtn}>
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayoutBody;
