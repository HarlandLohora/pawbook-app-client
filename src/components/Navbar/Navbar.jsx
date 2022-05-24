import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        Pawbook
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={"/all-mascotas"} className="authLink">
              Todas
            </Link>
            <Link to={"/nueva"} className="authLink">
              Nueva
            </Link>
            <Link to={PATHS.USER} className="authLink">
              Usuario
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
