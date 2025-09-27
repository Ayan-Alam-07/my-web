import style from "./PayoutUpi.module.css";
import { useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import FinalRedeem from "./Final-Redeem/FinalRedeem";

import upiLogo from "../../../assets/wallet/upi-logo.webp";

const PayoutUpi = ({ name }) => {
  const [balance] = useState(10000); // Your coin balance
  const [selectedId, setSelectedId] = useState(null);
  const [showFinalRedeem, setShowFinalRedeem] = useState(false);

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

  const selectedVoucher = vouchers.find((v) => v.id === selectedId);

  const handleSelect = (id, required) => {
    if (balance >= required) setSelectedId(id);
  };

  const handleCloseModal = () => {
    setShowFinalRedeem(false);
    setSelectedId(null);
  };

  return (
    <>
      {showFinalRedeem && (
        <FinalRedeem
          selectedVoucher={selectedVoucher}
          onClose={handleCloseModal}
          name={name}
          currencyIcon="₹"
        />
      )}

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
              className={` mb-0 fw-medium ${style.voucherLabel}`}
              style={{ opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Redeem UPI vouchers
              instantly and enjoy hassle-free withdrawals directly to your bank
              account — trusted by thousands across India!
            </p>
            <div className="mb-5 mb-lg-4"></div>
            <div className={`mb-4 pb-1 ${style.voucherGrid}`}>
              {vouchers.map((v) => {
                const isAffordable = balance >= v.requiredCoins;
                const progress = Math.min(
                  (balance / v.requiredCoins) * 100,
                  100
                );

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
                      alt="Instant UPI voucher withdrawal to transfer rewards directly to bank account in India"
                      className={style.redeemLogo}
                    />
                    <p>
                      {" "}
                      <span className={style.amountRup}>
                        <span style={{ color: "#00c853", marginRight: "4px" }}>
                          ₹
                        </span>{" "}
                        {v.amount}
                      </span>{" "}
                    </p>
                    <p className={style.balToFor}>
                      {" "}
                      <GiTwoCoins
                        className="me-1 me-lg-2"
                        style={{ fontSize: "24px", color: "#ffd700" }}
                      />
                      <span style={{ color: "#00ffc3" }}>
                        {" "}
                        {/*00bcd4 02d8bf*/}
                        {balance.toLocaleString()}
                      </span>{" "}
                      Of{" "}
                      <span style={{ color: "#79acff" }}>
                        {v.requiredCoins.toLocaleString()}
                      </span>{" "}
                      VEs
                    </p>
                    <div className="d-flex justify-content-center">
                      <div className={style.progressBar}>
                        <div
                          className={style.fill}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.redeemBtnCont}>
              <button
                disabled={!selectedId}
                className={style.redeemBtn}
                onClick={() => setShowFinalRedeem(true)}
              >
                Redeem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayoutUpi;
