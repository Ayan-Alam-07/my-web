import { useEffect, useRef, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import FinalRedeem from "../Final-Redeem/FinalRedeem";
import { useList } from "../../../../Context/ContextStore";
import { showError } from "../../../../utils/Toast";
import CirLoader from "../../../CommonComponents/CirLoader";

const RedeemBase = ({
  vouchers,
  loading,
  payoutType,
  logo,
  logoClass,
  fillClass,
  selectedClass,
  style,
  name,
  description,
}) => {
  const { user } = useList();
  const userCoins = user?.coins || 0;

  const [selectedId, setSelectedId] = useState(null);
  const [showFinalRedeem, setShowFinalRedeem] = useState(false);

  const selectedVoucher = vouchers.find(
    (v) => String(v._id || v.id) === String(selectedId),
  );

  const handleSelect = (voucher) => {
    if (showFinalRedeem) return;

    if (userCoins >= voucher.requiredCoins) {
      setSelectedId(voucher._id || voucher.id);
    }
  };

  const handleCloseModal = () => {
    setShowFinalRedeem(false);
    setSelectedId(null);
  };

  const voucher1 = vouchers?.[0];
  const toastShown = useRef(false);

  useEffect(() => {
    if (voucher1 && userCoins < voucher1.requiredCoins && !toastShown.current) {
      showError(`Earn minimum ${voucher1.requiredCoins} VEs to redeem`);
      toastShown.current = true;
    }
  }, [voucher1, userCoins]);

  if (loading) {
    return (
      <CirLoader para={"Loading vouchers..."} id={3} />
      // <div className="text-center text-white py-5"></div>
    );
  }

  return (
    <>
      {showFinalRedeem && selectedVoucher && (
        <FinalRedeem
          selectedVoucher={selectedVoucher}
          onClose={handleCloseModal}
          name={name}
          payoutType={payoutType}
          currencyIcon="₹"
          refreshWithdrawals={() => {
            window.dispatchEvent(new Event("refreshWithdrawals"));
          }}
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
                    key={v._id || v.id}
                    className={`${style.voucherCard} ${
                      selectedId === (v._id || v.id) ? selectedClass : ""
                    } ${!isAffordable ? style.disabled : ""}`}
                    onClick={() => handleSelect(v)}
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
