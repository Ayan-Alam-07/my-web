import style from "./WalletBody.module.css";
import { FaCoins } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import Transactions from "./Transactions";

const WalletBody = () => {
  const [activeTab, setActiveTab] = useState("payment");

  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className="row mt-4 pt-2 pb-4 align-items-center"
          style={{ borderBottom: "2px solid #fff" }}
        >
          <div className="col-6" style={{ borderRight: "2px solid #fff" }}>
            <div className="d-flex align-items-center justify-content-center ">
              <div className="ms-lg-4">
                <span className={style.availPara}>
                  <span style={{ color: "#ffd700" }}>Available VEs.</span>
                </span>
                <div className="d-flex align-items-center mt-4 pt-3 ms-lg-3 ">
                  <FaCoins style={{ color: "#FFD700", fontSize: "36px" }} />
                  <h3
                    className={`m-0 ms-3 ms-md-4 ps-lg-1 ${style.homeBalance}`}
                  >
                    7878
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center justify-content-center ">
              <div className="me-lg-4">
                <span className={style.availPara}>
                  <span style={{ color: "#00c853" }}>Available Bal.</span>
                </span>
                <div className="d-flex align-items-center mt-4 pt-3 ms-lg-3 ">
                  <FaIndianRupeeSign
                    style={{ color: "#00C853", fontSize: "36px" }}
                  />
                  <h3
                    className={`m-0 ms-2 ms-md-4 ps-lg-1 ${style.homeBalance}`}
                  >
                    7878.0
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 mt-lg-3"></div>
        </div>

        <div className="row">
          <div className="col-12 p-0">
            <div className="d-flex justify-content-end mt-3 pt-2">
              <p
                className={style.walletTabs}
                onClick={() => setActiveTab("payment")}
                style={{
                  fontWeight: activeTab === "payment" ? "bold" : "normal",
                  opacity: activeTab === "payment" ? "" : "0.7",
                }}
              >
                Payment Method
              </p>
              <div className={style.tabsSeperator}></div>
              <p
                className={style.walletTabs}
                onClick={() => setActiveTab("transactions")}
                style={{
                  fontWeight: activeTab === "transactions" ? "bold" : "normal",
                  opacity: activeTab === "transactions" ? "1" : "0.7",
                }}
              >
                Transactions
              </p>
            </div>
            {activeTab === "payment" && <PaymentMethod />}
            {activeTab === "transactions" && <Transactions />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WalletBody;
