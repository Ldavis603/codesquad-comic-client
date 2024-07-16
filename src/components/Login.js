import React from "react";
import { useState } from "react";
import {useNavigate} from "react";

const Login = ({user, setUser}) => {
  const navigate = userNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(user));
  };


  const body = {
    username: e.target.username.value,
    password: e.target.password.value
  };

  fetch("http://localhost:8080/local/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result.data),
  })
  .then((response) => response.json()).then((response) => {
    if (response.statusCode === 200) {
      setUser ({});
      localStorage.removeItem("user");
      navigate("/exercise");
    } else {
      throw new Error(response.error)
    }
  })
  .catch ((error) => {
    console.log("errLogout", error);
    navigate ("/account");
});
};

e.preventDefault();
console.log(handleSignUp)
};



  return (
    <>
      <div className="upper-container">
        <div className="form">
          <h1>LOGIN</h1>
          <form on Submit={handleLogin}>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
// };


export default Login;
