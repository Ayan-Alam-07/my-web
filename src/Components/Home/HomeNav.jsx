import style from "./HomeNav.module.css";
import { useList } from "../../Context/ContextStore";

const HomeNav = () => {
  const { locationData } = useList(); // Or show a loader

  // const { loading, error, country, country_code } = locationData;

  // Don’t render if there was an error fetching location
  // if (error) return console.log(error);

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
          <div className="row justify-content-between align-items-center">
            <div className="col-5">
              <h2 className="m-0">
                <span className={style.homeLogoFir}>
                  <strong>VE</strong>
                </span>
                <span className={style.homeLogoLas}>
                  <strong>Loop</strong>
                </span>
              </h2>
            </div>
            <div className="col-5 p-0 ">
              <div className="d-flex justify-content-end align-items-center">
                <p className={style.countryPara}>
                  <img
                    src={`https://flagcdn.com/w40/${locationData.country_code.toLowerCase()}.png`}
                    alt={`${locationData.country} flag`}
                  />
                  {locationData.loading ? "Reg..." : locationData.country_code}
                  {locationData.error ? "Err. 404..." : ""}
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default HomeNav;
