import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import excBtnImg from "../../assets/gem-gifs/cap-exc-btn.gif";
import { useList } from "../../Context/ContextStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gemAnmation from "../../assets/gem-gifs/gem-4.gif";

const CommonNavArr = ({ id, name, navigation }) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate(navigation);
  };

  const { list, currentList, setCurrentList, arrowState, setArrowState } =
    useList();

  // const { list } = useList();
  // const { currentList } = useList();
  const navItem = list.find((item) => item.id === id); // get specific item by id

  // updated later
  useEffect(() => {
    if (id === 5 && name) {
      setCurrentList({ id, name });
    } else if (navItem) {
      setCurrentList(navItem);
    }
  }, [id, name, list, navItem, setCurrentList]);

  useEffect(() => {}, [arrowState]);

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="container">
            <div className="row p-0 ">
              <div className="col-12 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <IoIosArrowDropleftCircle
                      className={style.commonLeftArr}
                      // onClick={handleArrowClick}
                      onClick={() => {
                        if (id === 6 && arrowState) {
                          navigate("/captcha-tasks");
                          setArrowState(false);
                        } else {
                          handleArrowClick();
                        }
                      }}
                    />
                    <h1 className={style.commonNavName}>
                      {name || navItem?.name || "Unknown"}
                    </h1>
                  </div>
                  {id === 4 && (
                    <div className={style.captchaGemsCont}>
                      <div className={style.captchaGems}>
                        <div>
                          <img
                            loading="lazy"
                            src={gemAnmation}
                            alt="Wallet gems converted to coins and redeemed to bank account on rewards website"
                            className={style.gemAnimation}
                          />
                        </div>
                        <p className="m-0 p-0">
                          Gems :{" "}
                          <span
                            style={{
                              // color: "#1ABC9C",
                              color: "#e4c812ff",
                              fontFamily: "poppins",
                              marginLeft: "3px",
                            }}
                          >
                            00.0
                          </span>
                        </p>
                      </div>
                      <button
                        className={style.capToExcBtn}
                        onClick={() => {
                          setArrowState(true); // update state
                          navigate("/exchange-center"); // redirect
                        }}
                      >
                        <span>Exc</span>
                        <img src={excBtnImg} alt="" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {id == 4 && (
        <div>
          <div className={style.captchaGemsMob}>
            <div className={style.captchaGems}>
              <div>
                <img
                  loading="lazy"
                  src={gemAnmation}
                  alt="Wallet gems converted to coins and redeemed to bank account on rewards website"
                  className={style.gemAnimation}
                />
              </div>
              <p className="m-0 p-0">
                Gems :{" "}
                <span
                  style={{
                    // color: "#1ABC9C",
                    color: "#FCE222",
                    fontFamily: "poppins",
                    marginLeft: "3px",
                  }}
                >
                  00.0
                </span>
              </p>
            </div>
            <button
              className={style.capToExcBtn}
              onClick={() => {
                setArrowState(true); // update state
                navigate("/exchange-center"); // redirect
              }}
            >
              Exc
              <img src={excBtnImg} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default CommonNavArr;
