import React from "react";;
import {useNavigate} from "react"

const Signup = ({user, setUser}) => {
  const navigate = useNavigate();
  const body = {
    username: e.target.username.value,
    password: e.target.password.value,
  };


    const handleSignUp = (e) => {
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      .then((response) => response.json()).then((response) => {
        if (response.statusCode === 200) {
          setUser ({});
          localStorage.setItem("user");
          navigate("/admin");
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
          <h1>Signup</h1>
          <form on Submit ={handleSignUp}>
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
    );
// };

export default Signup;
