import { useState } from "react";
import React from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const data = {email, password };
    try {
      const url = "http://localhost:5000/api/user/login";
      const { data: res } = await axios.post(url,data);
      localStorage.setItem("token",res.data);
      window.location="/"
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginContainer">
        <h1>Login</h1>
        <div className="LoginForm">
          <form className="LogIn" onSubmit={handleSubmit}>
            <div className="DataInput">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="janedoe@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
              ></input>
            </div>
            <div className="DataInput">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              ></input>
            </div>
            {err && <span className="errorLogin">Email or password might are incorrect. Please try again.</span>}
            <div className="LoginButton">
              <input type="submit" value="Log in" className="submitBtn"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
