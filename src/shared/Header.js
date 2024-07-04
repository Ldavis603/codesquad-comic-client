import React from "react";
// import logo from '../images/CodeSquad-Comics-logo.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div>Header</div>
      <div className="container">
        <nav>
          <img src={logo} />
          <ul>
            <li>
              <Link to="#" class="class1">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" class="class1">
                About
              </Link>
            </li>
            <li>
              <Link to="#" class="class1">
                Login
              </Link>
            </li>
          </ul>
          {/* <i class="fa fa-bars"></i> */}
        </nav>
      </div>
    </>
  );
}

export default Header;
