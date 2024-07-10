import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(handleLogin)
    
  
  }


  return (
    <>
      <div className="upper-container">
        <div className="form">
          <h1>LOGIN</h1>
          <form on Submit ={handleLogin}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
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
};

export default Login;
