import CommonNavArr from "../CommonComponents/CommonNavArr";
import styles from "./TapTokenExc.module.css";

const TapTokenExc = () => {
  const vouchers = [
    {
      id: 1,
      name: "Amazon Voucher",
      amount: "₹500",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    },
    {
      id: 2,
      name: "VEs Voucher",
      amount: "₹250",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 3,
      name: "Tap Token",
      amount: "₹1000",
      image: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    },
    {
      id: 4,
      name: "Gems",
      amount: "₹1000",
      image: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    },
    {
      id: 5,
      name: "G-play",
      amount: "₹1000",
      image: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    },
  ];
  return (
    <div className="container-Fluid p-0">
      <CommonNavArr id={15} navigation={"/Home"} />
      <div className="container p-2">
        {/* <div className={styles.container}> */}
        <div className="row justify-content-evenly">
          {vouchers.map((voucher) => (
            <div key={voucher.id} className={`col-lg-4 my-3 ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <img
                  src={voucher.image}
                  alt={voucher.name}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{voucher.name}</h3>
                <p className={styles.amount}>{voucher.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TapTokenExc;
