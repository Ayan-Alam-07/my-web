import style from "./BonusBody.module.css";
import { GiProfit } from "react-icons/gi";

const BonusBody = () => {
  const watchBonus = [
    { id: 1, reqWatch: 1, doneWatch: "", bonusCoin: 15 },
    { id: 2, reqWatch: 5, doneWatch: "", bonusCoin: 60 },
    { id: 3, reqWatch: 9, doneWatch: "", bonusCoin: 100 },
    { id: 4, reqWatch: 13, doneWatch: "", bonusCoin: 140 },
    { id: 5, reqWatch: 18, doneWatch: "", bonusCoin: 200 },
    { id: 6, reqWatch: 20, doneWatch: "", bonusCoin: 250 },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 pt-3 px-1 px-sm-2 pt-md-5 pt-lg-4">
            {watchBonus.map((bonus) => (
              <div key={bonus.id} className={style.bonusCont}>
                <div className={style.bonusinfoPointCont}>
                  <p className="m-0">
                    <span style={{ color: "#007bff", margin: "0px" }}>Ad</span>{" "}
                    Bonus
                  </p>
                  <span className={style.bonusCoin}>
                    + {bonus.bonusCoin}{" "}
                    <span style={{ color: "#fff", margin: "3px" }}>VEs</span>
                  </span>
                </div>
                <div className={style.bonusAdCount}>
                  <h4 className={style.bonusCount}>
                    0 /{" "}
                    <span className={style.bonusReqWatch}>
                      {bonus.reqWatch}
                    </span>{" "}
                  </h4>
                  <button>
                    <GiProfit className="me-2" />
                    Claim
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BonusBody;
