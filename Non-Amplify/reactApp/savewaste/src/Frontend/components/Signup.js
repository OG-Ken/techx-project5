import React, { useState } from "react";
import "./css/Signup.css";
import UserPool from "./UserPool";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(username, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div className="main">
      <div className="sub-main">
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setusername(event.target.value)}
            ></input>
          </div>
          <div className="second-input">
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="submit">
            <h2> rror message pop up</h2>
            <button block size="+1g" type="submit" disabled={!validateForm()}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
