import React from "react";

const Signup = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(handleSignUp)
    }

    return (
        <>
              <div className="upper-container">
        <div className="form">
          <h1>Signup</h1>
          <form on Submit ={handleSignup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <br />
            <label htmlFor="userName">Username:</label>
            <input
              type="userName"
              id="userName"
              name="userName"
              placeholder="Username"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

        </>
    )
}