import { useState } from "react";
import axios from "axios";
import GoogleButton from "../GoogleButton/GoogleButton";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import SignInOr from "../CommonComponents/SignInOr";
import { useList } from "../../Context/ContextStore";
import { showSuccess, showError } from "../../utils/Toast";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setIsLoading } = useList();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
      );
      login(res.data);
      setIsLoading(false);
      showSuccess("Login successful");
      navigate("/Home");
    } catch (error) {
      setIsLoading(false);
      showError(error.response?.data || "Login failed");
    }
  };

  return (
    <div>
      <CommonNavArr id={8} navigation={"/"} />

      <div className="container-fluid">
        <div className="container-md px-0 px-md-2 my-5 pb-3">
          <h3 className="text-center mb-md-4" style={{ fontFamily: "outfit" }}>
            Login To Your Account
          </h3>
          <form
            onSubmit={handleLogin}
            className="d-flex justify-content-center"
          >
            <div className={style.formContainer}>
              <GoogleButton />
              <SignInOr />
              <label htmlFor="email">
                Email :{" "}
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <br />

              <label htmlFor="password">
                Password :{" "}
                <input
                  id="password"
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <br />

              <div className={style.actionsContainer}>
                <p
                  className="mb-3 pb-1 mb-md-0 pb-md-0"
                  onClick={() => {
                    navigate("/register");
                    showSuccess(
                      "We welcome you to our platform where you can earn by just completing simple task and get paid",
                    );
                  }}
                >
                  Don't have Account?
                </p>
                {/* <br /> */}
                <p
                  className="mb-4 mb-md-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </p>
              </div>

              <div
                style={{ width: "100%" }}
                className="d-flex align-items-center justify-content-center"
              >
                <button type="submit" className={style.submitBtn}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
