import React from 'react';
// import logo from '../images/CodeSquad-logo.png';
import {Link} from 'react-router-dom'
;
function Footer (){
    return (
        <>

      <div>Footer</div>
      <footer>
      <div className="border">
        <div>
          <h3>VISIT US</h3>
          <p>
            CodeSquad Comics<br />
            123 Dorchester Avenue<br />
            Boston,MA 02124
          </p>
        </div>

        <div>
          <h3>LINKS</h3>
          <Link to="#" className="class1">Home</Link><br />
          <Link to="#" className="class1">About/</Link><br />
          <Link to="#" className="class1">Login</Link><br />
        </div>

        <div>
          <h3>FOLLOW US</h3>
          <i className="fa-brands fa-facebook"></i> &nbsp;
          <i className="fa-brands fa-instagram"></i> &nbsp;
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div>
          <h3>A PRODUCT OF</h3>
          <img src={logo} alt="logo"/>
      </div>
      </div>
    </footer>
    </>

    )
  }

  export default Footer;
