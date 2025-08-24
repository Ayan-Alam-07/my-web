import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import gemAnmation from "../../assets/gem-gifs/gem-5.gif";

const CommonNavArr = ({ id, name, navigation }) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate(navigation);
  };

  const { list, currentList, setCurrentList } = useList();

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
                      onClick={handleArrowClick}
                    />
                    <h1 className={style.commonNavName}>
                      {name || navItem?.name || "Unknown"}
                    </h1>
                  </div>
                  {id === 4 && (
                    <div className={style.captchaGemsCont}>
                      <div className={style.captchaGems}>
                        <IoDiamond style={{ color: "#9ed5fcff" }} />
                        {/* <div>
                          <img
                            src={gemAnmation}
                            alt=""
                            className={style.gemAnimation}
                          />
                        </div> */}
                        <p className=" p-0">Gems : 00</p>
                      </div>
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
              <IoDiamond style={{ color: "#9ed5fcff" }} />
              {/* <div>
                      <img src={gemAnmation} alt="" />
                    </div> */}
              <p className=" p-0">Gems : 00</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CommonNavArr;
