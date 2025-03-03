import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaSlidersH, FaUser } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";
import Header from "./Header";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(null);
  const [prevScrollpos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollpos) {
      setVisible(true);
    } else {
      setVisible(FaSlidersH);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDropDown = (dropDown) => {
    setOpenDropDown(openDropDown === dropDown ? null : dropDown);
  };
  const dropDown = () => {
    setOpenDropDown(false);
  };

  const dropDownVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <div>
      <div className={`sticky ${visible ? "top-0" : ""} bg-white header-nav`}>
        <nav
          className={`shadow-md flex items-center justify-between p-4 w-full  font-semibold  sticky ${
            visible ? "top-0" : ""
          }`}
        >
          {/* Overlay for mobile menu */}
          {isOpen && (
            <div
              className="absolute inset-0 bg-black opacity-50 z-40 lg:hidden"
              onClick={closeMenu}
            ></div>
          )}

          {/* Logo Section */}
          <Link to="/">
            <div className="flex-shrink-0 lg:ml-[6%] space-x-2">
              <img
                src="/GOOD LIFE FOOD.png"
                alt="Logo"
                className="h-14 lg:h-18"
              />
            </div>
          </Link>

          {/* Hamburger Menu and Navigation Links */}

          <div className="flex items-center ml-[50%] lg:ml-0 space-x-2 lg:space-x-0">
            {/* Hamburger Menu */}
            <button
              className="lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } fixed top-0 left-0 h-full bg-white w-3/4 z-50 transition-transform duration-300 lg:static lg:block lg:w-auto lg:bg-transparent`}
            >
              <ul className="flex flex-col space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0">
                {/* Close Button for Mobile */}
                <button
                  className="self-end mb-4 hover:cursor-pointer lg:hidden"
                  onClick={closeMenu}
                >
                  <IoCloseCircle className="text-3xl text-[#e53424]" />
                </button>
                <li>
                  <Link
                    onClick={closeMenu}
                    to="/"
                    className="block px-2 py-2 text-black hover:text-[#e53424]"
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <button
                    className="flex items-center text-black hover:text-[#e53424]"
                    onClick={() => handleDropDown("about")}
                  >
                    <span className="block px-2 py-2">About Us</span>
                    <MdArrowDropDown className="text-xl" />
                  </button>
                  <motion.div
                    initial=""
                    animate={openDropDown === "about" ? "visible" : "hidden"}
                    variants={dropDownVariants}
                    className="absolute text-start ml-28 lg:ml-0 bg-white shadow-lg lg:w-[30vh] border border-t-2 border-t-[#e53424] rounded-md mt-2 lg:mt-4 overflow-hidden "
                  >
                    {openDropDown === "about" && (
                      <button onClick={dropDown}>
                        {" "}
                        <Link
                          onClick={closeMenu}
                          to="about-us"
                          className="block px-4 py-2 text-black hover:text-[#e53424]"
                        >
                          About Company
                        </Link>
                        <Link
                          onClick={dropDown}
                          className="block px-4 py-2 text-black hover:text-[#e53424]"
                        >
                          Employees
                        </Link>
                        <Link
                          onClick={dropDown}
                          className="block px-4 py-2 text-black hover:text-[#e53424]"
                        >
                          History
                        </Link>
                      </button>
                    )}
                  </motion.div>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    to="product"
                    className="block px-2 py-2 text-black hover:text-[#e53424]"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    to="market"
                    className="block px-2 py-2 text-black hover:text-[#e53424]"
                  >
                    Market
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    to="contact"
                    className="block px-2 py-2 text-black hover:text-[#e53424]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Cart and User Section */}
          <div className="flex items-center space-x-4 lg:mr-10">
            <button onClick={() => handleDropDown("user")}>
              <FaUser className="text-xl text-[#e53424] hover:text-black" />

              {openDropDown === "user" && (
                <div className="absolute lg:right-20 right-8 z-10 flex flex-col bg-white border border-gray-200 shadow-lg mt-6 border-t-[#e53424] rounded-xl">
                  <Link
                    to="register"
                    className="block px-4 py-2 text-black hover:text-[#e53424]"
                  >
                    Register
                  </Link>
                  <Link
                    to="login"
                    className="block px-4 py-2 text-black hover:text-[#e53424]"
                  >
                    Login
                  </Link>
                </div>
              )}
            </button>

            <button
              onClick={() => {
                navigate("/addtocart");
              }}
            >
              <FaShoppingCart className="text-xl text-[#e53424] hover:text-black" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
