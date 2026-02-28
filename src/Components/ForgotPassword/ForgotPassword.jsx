import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginStyle from "../Login/Login.module.css";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { showError, showSuccess, showWarning } from "../../utils/Toast";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [timer, setTimer] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  // 🔥 Countdown logic
  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  // ========================
  // SEND RESET OTP
  // ========================
  const sendResetOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      showWarning("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/forgot-password/send-otp`, {
        email,
      });

      showSuccess(res.data.message);
      setStep(2);
      setTimer(60);
    } catch (error) {
      if (error.response?.status === 403) {
        setLockedUntil(error.response.data.lockUntil);
      }

      showError(error.response?.data?.message || error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // ========================
  // RESET PASSWORD
  // ========================
  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/forgot-password/reset`, {
        email,
        otp,
        newPassword,
      });

      showSuccess(res.data.message);

      navigate("/login");
    } catch (error) {
      if (error.response?.status === 403) {
        setLockedUntil(true);
      }

      showError(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommonNavArr id={10} navigation={"/login"} />
      <div className="container">
        <div
          className="mt-5 pt-4 pt-lg-2 mt-lg-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mb-lg-5">Change Your Password</h2>

          {step === 1 && (
            <form className={loginStyle.formContainer}>
              <label>
                Email :
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <div
                style={{ position: "relative" }}
                className="mt-2 mb-5 mb-lg-5"
              >
                <p
                  className="pt-lg-2 "
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    position: "absolute",
                    right: "0",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Back to Login
                </p>
              </div>

              {/* <br /> */}

              <button
                type="button"
                disabled={timer > 0 || lockedUntil || loading}
                onClick={sendResetOtp}
                className={` ${loginStyle.forgetPssBtn}`}
              >
                {lockedUntil
                  ? "Account Locked"
                  : timer > 0
                    ? `Resend OTP (${timer}s)`
                    : "Send Reset OTP"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={resetPassword} className={loginStyle.formContainer}>
              <label>OTP:</label>
              <input
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <br />
              <br />

              <label>New Password:</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <br />
              <br />

              <button
                type="submit"
                disabled={loading}
                className={loginStyle.forgetPssBtn}
              >
                Reset Password
              </button>

              <br />
              <br />

              <button
                type="button"
                disabled={timer > 0}
                onClick={sendResetOtp}
                className={`${loginStyle.forgetPssBtn} ${timer <= 0 && loginStyle.forgetPssResendBtn}`}
                style={{
                  background: timer > 0 ? "#ccc" : "#007bff",
                  cursor: timer > 0 ? "not-allowed" : "pointer",
                }}
              >
                {timer > 0 ? `Resend OTP (${timer}s)` : "Resend OTP"}
              </button>
            </form>
          )}

          <br />
        </div>
      </div>
    </div>
  );
}
