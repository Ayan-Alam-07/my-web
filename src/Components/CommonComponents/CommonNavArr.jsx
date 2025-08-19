import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";
import { useNavigate } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";

const CommonNavArr = ({ id, navigation }) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate(navigation);
  };

  const { list } = useList();

  const { currentList } = useList();
  const navItem = list.find((item) => item.id === id); // get specific item by id

  return (
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
                    {navItem?.name || "Unknown"}
                  </h1>
                </div>
                {id === 4 && (
                  <div className={style.captchaGems}>
                    <IoDiamond style={{ color: "#9ed5fcff" }} />
                    <p className=" p-0">Gems : 00</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default CommonNavArr;
