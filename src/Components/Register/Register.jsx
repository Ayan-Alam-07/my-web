import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Register.module.css";
import loginStyle from "../Login/Login.module.css";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
    otp: "",
    referralInput: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref");
    if (ref) {
      setForm((prev) => ({ ...prev, referralInput: ref }));
    }
  }, [location]);

  const sendOtp = async () => {
    await axios.post("https://veloop-backend.onrender.com/api/auth/send-otp", {
      email: form.email,
    });
    alert("OTP Sent to Email");
  };

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered Successfully");
  };

  return (
    <div>
      <CommonNavArr id={9} navigation={"/login"} />

      <div className="container-fluid">
        <div className="container my-5 pb-3">
          <form className="d-flex justify-content-center">
            <div className={`${loginStyle.formContainer} ${style.formCont}`}>
              <label htmlFor="email">
                Email :
                <input
                  required
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>

              <label htmlFor="emailOtp">
                OTP :
                <div className={style.emailOtpCont}>
                  <input
                    required
                    id="emailOtp"
                    type="number"
                    placeholder="Enter OTP"
                    onChange={(e) => setForm({ ...form, otp: e.target.value })}
                  />
                  <a onClick={sendOtp}>Send OTP</a>
                </div>
              </label>

              <label htmlFor="password">
                Password :
                <input
                  required
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </label>

              <label htmlFor="refferCode">
                Reffer Code :
                <input
                  id="refferCode"
                  placeholder="Referral Code (Optional)"
                  value={form.referralInput}
                  onChange={(e) =>
                    setForm({ ...form, referralInput: e.target.value })
                  }
                />
              </label>
              <p
                className="float-end mt-3 pt-1"
                onClick={() => navigate("/login")}
              >
                Login
              </p>
              <div style={{ width: "100%" }} className="mt-5 pt-2">
                <button style={{ width: "90%" }} onClick={register}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
