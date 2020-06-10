import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <nav className="contentLeft">
      {props.hasUser ? (
        <ul className="container">
          <div className="navbarLogo">Logo Here</div>
          <li>
            <Link className="nav-link" to="/products">
              {" "}
              Products{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employees">
              {" "}
              Employees{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/locations">
              {" "}
              Locations{" "}
            </Link>
          </li>
          <li>
            <span className="nav-link" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </span>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default withRouter(NavBar);
