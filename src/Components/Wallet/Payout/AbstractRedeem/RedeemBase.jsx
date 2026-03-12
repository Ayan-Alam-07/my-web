import { useEffect, useRef, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import FinalRedeem from "../Final-Redeem/FinalRedeem";
import { useList } from "../../../../Context/ContextStore";
import { showError } from "../../../../utils/Toast";
// import style from "../PayoutUpi.module.css";

const RedeemBase = ({
  vouchers,
  logo,
  logoClass,
  fillClass,
  selectedClass,
  style,
  name,
  headerText,
  description,
}) => {
  const { user } = useList();
  const userCoins = user?.coins || 0;

  const [selectedId, setSelectedId] = useState(null);
  const [showFinalRedeem, setShowFinalRedeem] = useState(false);

  const selectedVoucher = vouchers.find((v) => v.id === selectedId);

  const handleSelect = (id, required) => {
    if (showFinalRedeem) return;
    if (userCoins >= required) setSelectedId(id);
  };

  const handleCloseModal = () => {
    setShowFinalRedeem(false);
    setSelectedId(null);
  };

  //   if the balance is as lower than you can't redeem the minimum amount
  const voucher1 = vouchers.find((v) => v.id === 1);
  const canRedeemVoucher1 = userCoins >= voucher1.requiredCoins;
  const toastShown = useRef(false);

  useEffect(() => {
    if (!canRedeemVoucher1 && !toastShown.current) {
      showError(`Earn minimum ${voucher1.requiredCoins} VEs to redeem`);
      toastShown.current = true;
    }
  }, [canRedeemVoucher1]);

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

            <span className={style.voucherUnd}></span>
            <span
              className={`d-block mt-1 ${style.voucherUnd}`}
              style={{ width: "57px" }}
            ></span>

            <p
              className={`mb-0 fw-medium ${style.voucherLabel}`}
              style={{ opacity: "0.8" }}
            >
              {description}
            </p>

            <div className="mb-5 mb-lg-4"></div>

            <div className={`mb-4 pb-1 ${style.voucherGrid}`}>
              {vouchers.map((v) => {
                const isAffordable = userCoins >= v.requiredCoins;

                const progress = Math.min(
                  (userCoins / v.requiredCoins) * 100,
                  100,
                );

                return (
                  <div
                    key={v.id}
                    className={`${style.voucherCard} ${
                      selectedId === v.id ? selectedClass : ""
                    } ${!isAffordable ? style.disabled : ""}`}
                    onClick={() => handleSelect(v.id, v.requiredCoins)}
                  >
                    <img src={logo} className={logoClass} />

                    <p>
                      <span className={style.amountRup}>
                        <span
                          style={{
                            color: "#00c853",
                            marginRight: "4px",
                          }}
                        >
                          ₹
                        </span>
                        {v.amount}
                      </span>
                    </p>

                    <p className={style.balToFor}>
                      <GiTwoCoins
                        className="me-1 me-lg-2"
                        style={{
                          fontSize: "24px",
                          color: "#ffd700",
                        }}
                      />
                      <span style={{ color: "#00ffc3" }}>{userCoins}</span>
                      {" Of "}
                      <span style={{ color: "#79acff" }}>
                        {v.requiredCoins.toLocaleString()}
                      </span>{" "}
                      VEs
                    </p>

                    <div className="d-flex justify-content-center">
                      <div className={style.progressBar}>
                        <div
                          className={fillClass}
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
                disabled={!selectedVoucher}
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

export default RedeemBase;
