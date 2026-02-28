import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Register.module.css";
import loginStyle from "../Login/Login.module.css";
import SignInOr from "../CommonComponents/SignInOr";
import { FaLock } from "react-icons/fa";
import { showSuccess, showError, showWarning } from "../../utils/Toast";
import { useList } from "../../Context/ContextStore";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [lockedUntil, setLockedUntil] = useState(null);

  const { setIsLoading } = useList();

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

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const sendOtp = async () => {
    if (!form.email) {
      showWarning("Please enter email first");
      return;
    }

    try {
      setIsSending(true);
      setIsLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/send-otp`,
        { email: form.email },
      );
      setIsLoading(false);
      showSuccess(res.data.message);

      setOtpSent(true);
      setTimer(60); // 🔥 Start 60 second timer
    } catch (error) {
      if (error.response?.status === 403) {
        setLockedUntil(error.response.data.lockUntil);
      }
      setIsLoading(false);
      showError(error.response?.data?.message || error.response?.data);
    } finally {
      setIsSending(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form,
      );
      setIsLoading(false);
      showSuccess("Registered Successfully, Please login");

      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      showError(error.response?.data || "Registration failed");
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
                  type="email"
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
                  <button
                    type="button"
                    disabled={timer > 0 || lockedUntil}
                    className={`${style.sendOtpBtn} ${timer <= 0 && style.sendOtpBtnActive}`}
                    onClick={sendOtp}
                    style={{
                      background: timer > 0 ? "#ccc" : "#007bff",
                      cursor: timer > 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    {lockedUntil
                      ? `Acc ${(<FaLock />)}`
                      : timer > 0
                        ? `Resend OTP (${timer}s)`
                        : "Send OTP"}
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
                  type="number"
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
