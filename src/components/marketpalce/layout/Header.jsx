import React from "react";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="btn btn-primary">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </NavLink>
          <div className="flex items-center gap-4 lg:order-2">
            <NavLink to="/login" className="btn btn-primary">
              Log in
            </NavLink>

            <NavLink to="/register" className="btn btn-primary">
              Get started
            </NavLink>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>Home</li>
              <li>Company</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
