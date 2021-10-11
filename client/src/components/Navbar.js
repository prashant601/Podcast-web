import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark d-flex flex-row py-2 justify-content-end"
      style={{ backgroundColor: "rgb(66 75 84)" }}
    >
      <NavLink className="navbar-brand fs-2 mx-4 my-0" to="/">
        PODCAST
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <NavLink className="nav-link text-white rounded fs-2 py-.2 mx-3" to="/Authors">
              Authors
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link text-white rounded fs-2 py-.2 mx-3" to="/About">
            About
          </NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
