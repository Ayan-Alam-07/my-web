import { useState } from "react";
import axios from "axios";
import GoogleButton from "../GoogleButton/GoogleButton";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import SignInOr from "../CommonComponents/SignInOr";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
      );

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/Home"); // ✅ SPA navigation
    } catch (error) {
      alert(error.response?.data || "Login failed");
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

              <p className="float-end" onClick={() => navigate("/register")}>
                Don't have Account?
              </p>
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
