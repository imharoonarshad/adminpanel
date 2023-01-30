import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Nose Drivers Admin Panel</span>
        </div>
        <div className="topRight">
        <Link to="/newUser">
          <button className="navUserAddButton">Create New User</button>
        </Link>
          
          
        </div>
      </div>
    </div>
  );
}
