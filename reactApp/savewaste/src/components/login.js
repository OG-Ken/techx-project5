import React, { useState } from "react";
import "./css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(password);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <form onSubmit={onSubmit}>
          <div>
            <h1 className="login"> Login Page </h1>
            <input
              className="input"
              placeholder="Username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="second-input">
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="submit">
            <h2 className="error"> it to have error message pop up</h2>
            <button block size="+1g" type="submit" disabled={!validateForm()}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
