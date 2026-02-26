import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Register.module.css";
import loginStyle from "../Login/Login.module.css";
import SignInOr from "../CommonComponents/SignInOr";

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
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/send-otp`,
        { email: form.email },
      );

      alert(res.data.message);
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "OTP sending failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form,
      );

      alert("Registered Successfully");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data || "Registration failed");
    }
  };

  return (
    <div>
      <CommonNavArr id={9} navigation={"/login"} />

      <div className="container-fluid">
        <div className="container px-0 px-md-2 my-5 pb-3">
          <h3 className="text-center mb-md-4" style={{ fontFamily: "outfit" }}>
            Create Your New Account
          </h3>
          <form
            onSubmit={handleRegister}
            className="d-flex justify-content-center"
          >
            <div className={`${loginStyle.formContainer} ${style.formCont}`}>
              <GoogleButton referralInput={form.referralInput} />
              <SignInOr />
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
                  {/* <a onClick={sendOtp}>Send OTP</a> */}
                  <button
                    type="button"
                    className={style.sendOtpBtn}
                    onClick={sendOtp}
                  >
                    Send OTP
                  </button>
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
                Already have an account?
              </p>
              <div style={{ width: "100%" }} className="mt-5 pt-2">
                <button
                  type="submit"
                  className={loginStyle.submitBtn}
                  style={{ width: "90%" }}
                >
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
