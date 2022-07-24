import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="logo">
          <Link to="/">
            <img src="/images/logoNewNew.png" alt="My-Store" />
          </Link>
        </div>
        {/* <nav> */}
        <div className="listElements">
          <nav>
            <Link to="/products">Products</Link>
            <Link to="/add">Add-Products</Link>
            <Link to="/update">Update-Products</Link>
          </nav>
        </div>
        {/* </nav> */}
        <div className="profileSection">
          <Link to="/logout">LogOut</Link>
          <Link to="/profile">
            Profile
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
