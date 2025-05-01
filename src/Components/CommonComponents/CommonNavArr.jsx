import style from "../CommonComponents/CommonNavArr.module.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";
import { useNavigate } from "react-router-dom";

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
              <div className="d-flex align-items-center">
                <IoIosArrowDropleftCircle
                  className={style.commonLeftArr}
                  onClick={handleArrowClick}
                />
                <p className={style.commonNavName}>
                  {navItem?.name || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default CommonNavArr;
