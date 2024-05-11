import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const { user, handleLogout } = useAuth();
  return (
    <div className="nav">
      <div>
        <h3>LOGO</h3>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/employee-list">Employee List</Link>
        </li>
        <li>{user && user.username}</li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
