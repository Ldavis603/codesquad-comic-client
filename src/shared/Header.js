import React from "react";
// import logo from '../images/CodeSquad-Comics-logo.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(user, setUser) {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:8080/api/authRoutes/logout", {
      method: "GET",

    })
      .then((response) => response.json()).then((response) => {
        if (response.statusCode === 200) {
          setUser ({});
          localStorage.removeItem("user");
          navigate("/");
        } else {
          throw new Error(response.error)
        }
      })
      .catch ((error) => {
        console.log("errLogout", error);
        navigate ("/admin");
    
    });
  };
  return (
    <>
      <div className="container">
        <nav>
        {/* <img src={logo} alt="logo"/> */}
          <ul>
            <li>
              <Link to="/" className="class1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="class1">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="class1">
                Login
              </Link>
            </li>
            <a href="#"></a>
            <li>
              <Link to="" className="class1" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>

          {/* {user.username ? (
  ... <li><Link to="/admin" className="class1">
  Admin
</Link>
</li>
<li><Link to="/login" className="class1">
                Login
              </Link></li>
) : (
  ... <li><Link to="/" className="class1">
    Home
  </Link>
  </li>
)} */}
          {/* <i class="fa fa-bars"></i> */}
        </nav>
      </div>
    </>
  );
}

export default Header;
