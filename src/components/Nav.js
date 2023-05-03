import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner  */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
          >
            <BiUser />
          </Link>
          <Link
            to="service"
            className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            className="cursor-pointer flex items-center justify-center w-[60px] h-[60px]"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
