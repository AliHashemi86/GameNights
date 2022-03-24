import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useLocalStorage from "use-local-storage";
import "./Login.css";

export default function Register() {
  //Need inoder to redirect
  let navigate = useNavigate();

  //States for database
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["user"]);

  const submitRegister = () => {
    axios
      .post("/api/users/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        setCookie("user", "cookiesvalue");
        navigate("/");
      });
  };

  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <form
      action="/register"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="login-main" data-theme={theme}>
        <div className="login">
          <h1> Register</h1>
          <div className="container">
            <div id="login">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="remember">
                <input type="checkbox" checked="checked" />
                <p>Agree with terms and conditions</p>
              </div>
              <button onClick={submitRegister} type="submit">
                Register
              </button>
            </div>
            <div className="bottom"></div>
          </div>
          <div className="theme-toggle">
            <h4>☀️ 🌒</h4>
            <i onClick={switchTheme} className="fas fa-toggle-on"></i>
          </div>
        </div>
      </div>
    </form>
  );
}
