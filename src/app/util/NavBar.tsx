import React from "react";
import NavBarLinks from "./NavBarLinks";
import { FaGithub , FaLinkedin } from "react-icons/fa";

const NavBar = () => {

   
  return (
    <div className="navbar bg-[#000000]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavBarLinks/>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Portfolie</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-neutral-800 rounded-2xl px-5 py-0">
               <NavBarLinks/>
        </ul>
      </div>
      <div className="navbar-end">
          <div className=" flex flex-row gap-2">
              <FaGithub className="text-2xl"/>
              <FaLinkedin className="text-2xl"/>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
