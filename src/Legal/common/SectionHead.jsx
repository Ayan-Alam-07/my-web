import styles from "./SectionHead.module.css";

const SectionHead = ({ title, Icon }) => {
  return (
    <div className={styles.sectionHead}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};
export default SectionHead;
