import style from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={style.overlay}>
        <div className={style.loader}>
          <div className="spinner-grow text-danger me-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning me-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light me-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info me-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;
