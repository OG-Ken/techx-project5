import React, { useState } from "react";
//import UserPool

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("It worked"); //verify it worked
    //UserPool.signUp(email, password, [], null, (err,data) => )
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
