import CommonNavArr from "../../CommonComponents/CommonNavArr";
import TaskContent from "./TaskContent";

const Task = () => {
  return (
    <>
      <CommonNavArr id={4} navigation={"/Home"}></CommonNavArr>
      <TaskContent />
    </>
  );
};
export default Task;
