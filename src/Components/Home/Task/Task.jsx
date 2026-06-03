import CommonNavArr from "../../CommonComponents/CommonNavArr";
import TaskContent from "./TaskContent";
import SecFooter from "../../CommonComponents/SecFooter";
import styles from "./Task.module.css";
const Task = () => {
  return (
    <>
      <CommonNavArr id={4} navigation={"/Home"}></CommonNavArr>
      <TaskContent />
      <div className={styles.footerCont}>
        <SecFooter
          mt={30}
          mb={35}
          name={"Captcha"}
          link={"/help-center/earning/solve-captcha"}
        />
      </div>
    </>
  );
};
export default Task;
