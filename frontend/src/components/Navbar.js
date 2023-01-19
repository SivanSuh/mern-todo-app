import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Mern Stack To Do App
      </Link>
    </div>
  );
};

export default Navbar;
