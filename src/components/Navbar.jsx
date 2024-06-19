import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 my-4 ml-4 font-raleway">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>PORTFOLIO</a>
              <ul className="p-2">
                <li>
                  <a>WEDDING</a>
                </li>
                <li>
                  <a>ENGAGEMENT</a>
                </li>
                <li>
                  <a>FAMILY PORTRAITS</a>
                </li>
                <li>
                  <a>SENIOR/GRADUATION</a>
                </li>
                <li>
                  <a>MATERNITY</a>
                </li>
                <li>
                  <a>NATURE</a>
                </li>
              </ul>
            </li>
            <li>
              <a>ABOUT ME</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Prieto Photography</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <details>
              <summary>PORTFOLIO</summary>
              <ul className="p-2">
                <li>
                  <a>WEDDING</a>
                </li>
                <li>
                  <a>ENGAGEMENT</a>
                </li>
                <li>
                  <a>FAMILY PORTRAITS</a>
                </li>
                <li>
                  <a>SENIOR/GRADUATION</a>
                </li>
                <li>
                  <a>MATERNITY</a>
                </li>
                <li>
                  <a>NATURE</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>ABOUT ME</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-8">
        <a className="btn">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
