import style from "./TaskOptionChecker.module.css";
import { useLocation } from "react-router-dom";
import CommonNavArr from "../../CommonComponents/CommonNavArr";

const TaskOptionChecker = () => {
  const location = useLocation();
  const { result, resultBool } = location.state || {};

  console.log(resultBool);

  return (
    <>
      <CommonNavArr
        id={5}
        name={result}
        navigation={"/captcha-tasks"}
      ></CommonNavArr>
    </>
  );
};
export default TaskOptionChecker;
