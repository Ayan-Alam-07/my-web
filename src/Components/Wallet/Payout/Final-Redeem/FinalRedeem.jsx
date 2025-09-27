import style from "./FinalRedeem.module.css";
import { useRef, useEffect } from "react";

const FinalRedeem = ({ selectedVoucher, onClose, name, currencyIcon }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    let modalInstance;

    const showModal = async () => {
      const bootstrap = await import(
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      );

      if (modalRef.current) {
        modalInstance = new bootstrap.Modal(modalRef.current, {
          backdrop: "static",
          keyboard: false,
        });

        modalRef.current.addEventListener("hidden.bs.modal", handleHide);
        modalInstance.show();
      }
    };

    const handleHide = () => {
      // Remove the backdrop dimming effect manually when the modal is closed
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.querySelector(".modal-backdrop")?.remove();

      // Call the onClose prop when the modal is hidden
      onClose?.();
    };

    showModal();

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener("hidden.bs.modal", handleHide);
      }
      modalInstance?.hide();
    };
  }, [onClose]);

  return (
    <div
      className={`modal fade ${style.modalCommAlign}`}
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog text-dark">
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Enter Your <span>{name}</span> Details
            </h1>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {selectedVoucher ? (
              <>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <form>
                        <p className="m-0">
                          <span className="text-danger fw-bold">*</span> Name :
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Your Full Name"
                          className="text-capitalize"
                        />
                      </form>
                      <div>
                        {(name === "usdtGlob" || name === "btcGlob") && (
                          <>
                            <p className="m-0">
                              <span className="text-danger fw-bold">*</span>{" "}
                              Binance Pay ID:
                            </p>
                            <input
                              type="text"
                              required
                              placeholder="Enter Your Binance ID"
                            />
                          </>
                        )}

                        {name === "Upi" && (
                          <>
                            <p className="m-0">
                              <span className="text-danger fw-bold">*</span> UPI
                              ID:
                            </p>
                            <input
                              type="text"
                              required
                              placeholder="Enter Your UPI ID"
                            />
                          </>
                        )}

                        {!["usdtGlob", "btcGlob", "Upi"].includes(name) && (
                          <div>
                            <p className="m-0">
                              <span className="text-danger fw-bold">*</span>{" "}
                              Email ID:
                            </p>
                            <input
                              type="email"
                              required
                              placeholder="Enter Your Email ID"
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="m-0">
                          <span className="text-danger fw-bold">*</span> Amount
                          Selected :
                        </p>
                        <div className={style.amountFkInp}>
                          <span>
                            <span
                              style={{ color: "#03b551", marginRight: "7px" }}
                            >
                              {currencyIcon}
                            </span>
                            {selectedVoucher.amount}{" "}
                            <span className={style.fnlReedReqCoins}>
                              <span>(</span>
                              {selectedVoucher.requiredCoins.toLocaleString()}
                              <span>
                                {" "}
                                <span className="text-white">VEs</span>)
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{
                        borderTop: "1px solid #fff",
                        padding: "17px 25px 7px",
                        marginTop: "22px",
                      }}
                    >
                      <button type="submit" className={style.confirmRedeemBtn}>
                        Redeem
                      </button>
                      <button
                        type="button"
                        className={style.cancleRedeemBtn}
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              "No voucher selected."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRedeem;
