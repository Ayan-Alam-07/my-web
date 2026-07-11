import style from "./HomeHeading.module.css";

const HomeHeading = ({ title, children }) => {
  return (
    <div className="pt-2 mb-4 pb-4 pb-lg-3">
      <div className="col-12">
        <div className="mt-2">
          <p className={`${style.HomeEarnpara}`}>
            {title} : <span className={style.homeEarnTaskUnd}></span>{" "}
            <span
              className={`d-block mt-1 ${style.homeEarnTaskUnd}`}
              style={{ width: "42px" }}
            ></span>
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
export default HomeHeading;
