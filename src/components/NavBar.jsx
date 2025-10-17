import React, { useEffect, useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userAuth.user);

    const location = useLocation();

  useEffect(() => {
  setOpen(false)
  }, [location]);
  console.log(user);
  return (
    <div className="flex justify-center h-16">
      <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 fixed  shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center  justify-between mx-auto text-slate-800">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 rounded-lg text-base bg-white text-blue-950 font-semibold border border-blue-300 px-2"
          >
            Chat Machans
          </a>

          {/* Nav Links (hidden on mobile) */}
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/">
                  <span className="flex items-center font-semibold gap-3">
                    Home <FaHome />
                  </span>
                </Link>
              </li>
              {user && (   <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/chat">
                  <span className="flex items-center font-semibold gap-3">
                    Chat Now <IoLogoWechat />
                  </span>
                </Link>
              </li>)}
           
              {user ? (
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <Link to="/profile">
                    <span className="flex items-center font-semibold">
                      profile
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <Link to="/login">
                    <span className="flex items-center font-semibold">
                      Login
                    </span>
                  </Link>
                </li>
              )}
              
              {user&& (  <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/settings">
                  <span className="flex items-center gap-2 font-semibold">
                    Settings <IoIosSettings />
                  </span>
                </Link>
              </li>)}
            
            </ul>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative ml-auto h-6 border p-4 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
