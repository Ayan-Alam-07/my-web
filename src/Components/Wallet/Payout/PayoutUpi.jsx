import style from "./PayoutUpi.module.css";
import { useState } from "react";
import upiLogo from "../../../assets/upi-logo-2.png";

const PayoutUpi = () => {
  const [balance] = useState(10000); // Your coin balance
  const [selectedId, setSelectedId] = useState(null);

  const vouchers = [
    { id: 1, amount: 10, requiredCoins: 2400 },
    { id: 2, amount: 25, requiredCoins: 5800 },
    { id: 3, amount: 50, requiredCoins: 10000 },
    { id: 4, amount: 100, requiredCoins: 19500 },
    { id: 5, amount: 150, requiredCoins: 28500 },
    { id: 6, amount: 300, requiredCoins: 52500 },
    { id: 7, amount: 500, requiredCoins: 80500 },
    { id: 8, amount: 1000, requiredCoins: 150000 },
  ];

  const handleSelect = (id, required) => {
    if (balance >= required) setSelectedId(id);
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3">
        <div className={style.voucherContainer}>
          <h3>Available Vouchers :</h3>
          <span className={style.voucherUnd}></span>{" "}
          <span
            className={`d-block mt-1 ${style.voucherUnd}`}
            style={{ width: "57px" }}
          ></span>
          <p
            className={`text-white mb-0 mt-2 fw-medium ${style.voucherLabel}`}
            style={{ fontSize: "18px", opacity: "0.8" }}
          >
            <span className="text-danger fw-bold">*</span> Claim Free UPI
            Vouchers & Cashback Rewards – India.
          </p>
          <div className="mb-5 mb-lg-4"></div>
          <div className={`mb-4 pb-1 ${style.voucherGrid}`}>
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
                  <img
                    src={upiLogo}
                    alt="Earn Real Cash on Indian Rewards Website Using UPI in 2025"
                    className={style.upiLogo}
                  />
                  <p>
                    {" "}
                    <span className={style.amountRup}>₹ {v.amount}</span>{" "}
                  </p>
                  <p>
                    {balance.toLocaleString()} of{" "}
                    {v.requiredCoins.toLocaleString()} VEs
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
          <div className={style.redeemBtnCont}>
            <button disabled={!selectedId} className={style.redeemBtn}>
              Redeem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutUpi;
