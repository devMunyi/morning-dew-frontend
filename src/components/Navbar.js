import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("currentUser");
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/home">
          MORNING DEW
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"><i className="fa fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mr-3">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <i className="fa fa-user"></i> {user.name}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink to="/profile" className="dropdown-item">
                      Profile
                    </NavLink>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink className="nav-link active" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
