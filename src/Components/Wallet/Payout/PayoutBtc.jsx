import style from "./PayoutUpi.module.css";
import FinalRedeem from "./Final-Redeem/FinalRedeem";
import { useState } from "react";
import btcLogo from "../../../assets/btc-logo.png";
import { GiTwoCoins } from "react-icons/gi";

const PayoutBtcGlob = ({ name }) => {
  const [balance] = useState(1000000); // Your coin balance
  const [selectedId, setSelectedId] = useState(null);
  const [showFinalRedeem, setShowFinalRedeem] = useState(false);

  const vouchers = [
    { id: 1, amount: 2, requiredCoins: 50000 },
    { id: 2, amount: 5, requiredCoins: 122000 },
    { id: 3, amount: 15, requiredCoins: 352000 },
    { id: 4, amount: 30, requiredCoins: 680000 },
    { id: 5, amount: 100, requiredCoins: 2100000 },
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
          currencyIcon="$"
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
              className={`text-white mb-0 mt-2 fw-medium ${style.voucherLabel}`}
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <span className="text-danger fw-bold">*</span> Instant BTC
              Withdrawals – Fast, Secure Crypto Payouts Worldwide. Withdraw Your
              Earnings Internationally with Low Fees and Trusted Global
              Transfers.
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
                      selectedId === v.id ? style.selectedAmzGpl : ""
                    } ${!isAffordable ? style.disabled : ""}`}
                    onClick={() => handleSelect(v.id, v.requiredCoins)}
                  >
                    <img
                      src={btcLogo}
                      alt="Get Free Amazon Vouchers Online from Trusted Rewards Website in India"
                      className={style.paypalLogo}
                    />
                    <p>
                      {" "}
                      <span className={style.amountRup}>
                        <span style={{ color: "#00c853", marginRight: "4px" }}>
                          $
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
                          className={style.fillAmazon}
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

export default PayoutBtcGlob;
