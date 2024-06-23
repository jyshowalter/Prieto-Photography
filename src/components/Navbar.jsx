import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Prieto Photography
        </Link>
      </div>
      <div className="flex-none">
        <div className="block lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              to=""
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
            <Link to="/">Home</Link>
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
                  <Link to="/portfolio/wedding-and-engagement">
                    Wedding & Engagement
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/family-portraits">Family Portraits</Link>
                </li>
                <li>
                  <Link to="/portfolio/senior-and-graduation">
                    Senior & Graduation
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/maternity">Maternity</Link>
                </li>
                <li>
                  <Link to="/portfolio/nature">Nature</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {isOpen && (
          <ul className="menu menu-vertical lg:hidden">
            <li>
              <Link to="/">Home</Link>
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
                    <Link to="/portfolio/wedding-and-engagement">
                      Wedding & Engagement
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/family-portraits">
                      Family Portraits
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/senior-and-graduation">
                      Senior & Graduation
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/maternity">Maternity</Link>
                  </li>
                  <li>
                    <Link to="/portfolio/nature">Nature</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
