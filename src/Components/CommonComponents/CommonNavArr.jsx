import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import excBtnImg from "../../assets/gem-gifs/cap-exc-btn.webm";
import gemAnmation from "../../assets/gem-gifs/gem-4.webm";

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
      <nav className={id === 3 && style.giveSpec}>
        <div className="container-fluid">
          <div className="container">
            <div className="row p-0 ">
              <div className="col-12 py-3 pe-sm-0 pe-lg-2">
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
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={style.gemAnimation}
                          >
                            <source src={gemAnmation} type="video/webm" />
                            Update your browser or Use Google Chrome.
                          </video>
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
                        <div className={style.capExcCont}>
                          {/* <img
                          loading="lazy"
                          src={excBtnImg}
                          alt="Exchange gems into coins and withdraw rewards securely to your bank account"
                        /> */}
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={style.capToExcAni}
                          >
                            <source src={excBtnImg} type="video/webm" />
                            Update your browser or Use Google Chrome.
                          </video>
                        </div>
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={style.gemAnimation}
                >
                  <source src={gemAnmation} type="video/webm" />
                  Update your browser or Use Google Chrome.
                </video>
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
              <div className="d-flex align-items-center">
                <span>Exc</span>
                <div className={style.capExcCont}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={style.capToExcAni}
                  >
                    <source src={excBtnImg} type="video/webm" />
                    Update your browser or Use Google Chrome.
                  </video>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default CommonNavArr;
