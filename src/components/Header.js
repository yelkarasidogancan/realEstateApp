import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="conrainer mx-auto">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* buttons */}
        <div>
          <Link to="">Log in</Link>
          <Link to="">Log out</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
