import style from "./HomeNav.module.css";

const HomeNav = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#151726",
        position: "sticky",
        top: "0px",
        zIndex: "100",
      }}
    >
      <div className="container">
        <nav className={style.homeNav}>
          <div className="row">
            <div className="col-6">
              <h2 className="m-0">
                <span className={style.homeLogoFir}>
                  <strong>VE</strong>
                </span>
                <span className={style.homeLogoLas}>
                  <strong>Loop</strong>
                </span>
              </h2>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default HomeNav;
