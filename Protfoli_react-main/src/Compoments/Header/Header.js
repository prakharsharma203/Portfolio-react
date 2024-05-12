import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Style.css"
function Header() {
  return (
    <>
      <header className="shadow sticky z-[1001] top-0 ">
        <nav className="bg-[#1b1a2ea9!important] border-gray-200 px-4 lg:px-6 py-2.5  ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl w-[85%] m-auto">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl text-[#cd5ff8]">Prakhar Sharma</h1>
            </Link>
            <div className="flex items-center lg:order-2">
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 mr-2"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3 text-2xl">
                  <li>
                    <NavLink to="/"
                      className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-purple-500" : "text-white"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
                        
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/About"
                      className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-purple-500" : "text-white"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Projects"
                      className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-purple-500" : "text-white"} border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0`
                      }
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact"
                      className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-purple-500" : "text-white"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:p-0`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
