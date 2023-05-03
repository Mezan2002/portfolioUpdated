import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8">
      <div className="lg:px-40 md:px-20 mx-auto px-5 flex items-center justify-between">
        {/* logo */}
        <Link to="home">
          <img src={Logo} alt="" />
        </Link>
        {/* button */}
        <button className="btn btn-sm">Work with me</button>
      </div>
    </header>
  );
};

export default Header;
