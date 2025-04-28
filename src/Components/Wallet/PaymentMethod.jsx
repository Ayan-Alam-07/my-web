import style from "./PaymentMethod.module.css";

const PaymentMethod = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row ">
          <div className="col-12 p-0">
            <div className="mt-4 pt-3 pt-lg-0 mt-lg-3">
              <p className={style.tabsPara}>Payment Methods :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
