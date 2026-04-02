import style from "./BonusBody.module.css";
import { GiProfit } from "react-icons/gi";

const BonusBody = () => {
  const doneWatch = 5;

  const watchBonus = [
    { id: 1, reqWatch: 1, bonusCoin: 10 },
    { id: 2, reqWatch: 5, bonusCoin: 35 },
    { id: 3, reqWatch: 10, bonusCoin: 75 },
    { id: 4, reqWatch: 18, bonusCoin: 100 },
    { id: 5, reqWatch: 25, bonusCoin: 160 },
    { id: 6, reqWatch: 30, bonusCoin: 220 },
    { id: 7, reqWatch: 50, bonusCoin: 400 },
  ];

  const handleClaim = () => {
    console.log("claimable");
  };

  return (
    <div className="container-fluid mt-4 pt-1">
      <div className="container">
        <div className="row mb-4 ">
          {watchBonus.map((bonus) => {
            const completed = Math.min(doneWatch, bonus.reqWatch);
            const progress = (completed / bonus.reqWatch) * 100;
            const isUnlocked = doneWatch >= bonus.reqWatch;

            return (
              <div
                key={bonus.id}
                className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-3"
              >
                <div className={style.bonusCont}>
                  {/* TOP */}
                  <div className={style.bonusinfoPointCont}>
                    <p className={style.adPara}>
                      <span className={style.adText}>Ad</span> Bonus
                    </p>

                    <span className={style.bonusCoin}>
                      + {bonus.bonusCoin} <span>VEs</span>
                    </span>
                  </div>

                  {/* PROGRESS */}
                  <div className={style.progressWrap}>
                    <div className={style.progressText}>
                      {Math.round(progress)}%
                    </div>

                    <div className={style.progressBar}>
                      <div
                        className={style.progressFill}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className={style.bonusAdCount}>
                    <h4 className={style.bonusCount}>
                      {/* {doneWatch} /{" "} */}
                      <span className={style.completedBonus}>
                        {completed}
                      </span>{" "}
                      /{" "}
                      <span className={style.bonusReqWatch}>
                        {bonus.reqWatch}
                      </span>
                    </h4>

                    <button
                      disabled={!isUnlocked}
                      className={`${style.claimBtn} ${
                        isUnlocked ? style.active : style.locked
                      }`}
                      onClick={handleClaim}
                    >
                      <GiProfit />
                      {isUnlocked ? "Claim" : "Locked"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BonusBody;
