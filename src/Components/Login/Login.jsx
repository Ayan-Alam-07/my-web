import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import style from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post(
      "https://veloop-backend.onrender.com/api/auth/login",
      {
        email,
        password,
      },
    );

    localStorage.setItem("user", JSON.stringify(res.data));
    alert("Login Success");
  };

  return (
    <div>
      <CommonNavArr id={8} navigation={"/"} />

      <div className="container-fluid">
        <div className="container px-0 px-md-2 mt-5">
          <form className="d-flex justify-content-center">
            <div className={style.formContainer}>
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
                Register
              </p>
              <div
                style={{ width: "100%" }}
                className="d-flex align-items-center justify-content-center"
              >
                <button onClick={login}>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
