import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";
import { useNavigate } from "react-router-dom";

const CommonNavArr = () => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate("/");
  };

  const { currentList } = useList();

  return (
    <nav>
      <div className="container-fluid">
        <div className="container">
          <div className="row p-0 ">
            <div className="col-12 py-3">
              <div className="d-flex align-items-center">
                <IoIosArrowDropleftCircle
                  className={style.commonLeftArr}
                  onClick={handleArrowClick}
                />
                <p className={style.commonNavName}>{currentList.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default CommonNavArr;
