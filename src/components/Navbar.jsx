import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Prieto Photography</a>
      </div>
      <div className="flex-none">
        <div className="block lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`menu menu-horizontal px-1 hidden lg:flex ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex="0" role="button" className="px-1">
                Portfolio
              </div>
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu mt-56 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Wedding & Engagement</a>
                </li>
                <li>
                  <a>Family Portraits</a>
                </li>
                <li>
                  <a>Senior & Graduation</a>
                </li>
                <li>
                  <a>Maternity</a>
                </li>
                <li>
                  <a>Nature</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        {isOpen && (
          <ul className="menu menu-vertical lg:hidden">
            <li>
              <a>Home</a>
            </li>
            <li>
              <div className="dropdown">
                <div tabIndex="0" role="button" className="px-1">
                  Portfolio
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu mt-52 mr-60 p-2 shadow bg-base-100 rounded-box w-52 relative"
                >
                  <li>
                    <a>Wedding & Engagement</a>
                  </li>
                  <li>
                    <a>Family Portraits</a>
                  </li>
                  <li>
                    <a>Senior & Graduation</a>
                  </li>
                  <li>
                    <a>Maternity</a>
                  </li>
                  <li>
                    <a>Nature</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
