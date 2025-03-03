import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { CgMailOpen } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Footer = () => {
  const [toggleArrow, setToggleArrow] = useState({
    arrow: false,
    brands: false,
    info: false,
  });

  const handleArrow = (dropDown) => {
    setToggleArrow((prev) => ({
      ...prev,
      [dropDown]: !prev[dropDown],
    }));
  };

  const year = new Date().getFullYear();

  return (
    <div className="text-white bg-[#e53424] w-full h-auto bottom-0 font-quicksand">
      <div className="p-6 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-around lg:items-start">
        {/* Contact Section */}
        <div className="w-full lg:w-[25%] lg:ml-20">
          <button
            className={`flex justify-between items-center w-full lg:cursor-text lg:hidden${
              toggleArrow.arrow ? "block" : "hidden"
            }`}
            onClick={() => handleArrow("arrow")}
          >
            <span className="text-lg font-semibold">Contact</span>
            <BiDownArrow
              className={` lg:hidden transition-transform duration-300 ${
                toggleArrow.arrow ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-[max-height] duration-300 overflow-hidden lg:max-h-full ${
              toggleArrow.arrow ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="mt-4 flex flex-col space-y-2 p-4">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>9749344926</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbDeviceLandlinePhone />
                <span>00-111111</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdLocationOn />
                <span>Kathmandu</span>
              </li>
              <li className="flex items-center space-x-2">
                <CgMailOpen />
                <span>info@madhavbanjade.com.np</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="lg:hidden w-full h-2" />

        {/* Our Brands Section */}
        <div className="w-full lg:w-[25%]">
          <button
            className={`flex justify-between items-center w-full lg:cursor-text lg:hidden${
              toggleArrow.arrow ? "block" : "hidden"
            }`}
            onClick={() => handleArrow("brands")}
          >
            <span className="text-lg font-semibold">Our Brands</span>
            <BiDownArrow
              className={`lg:hidden transition-transform duration-300 ${
                toggleArrow.brands ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-[max-height] duration-300 overflow-hidden lg:max-h-full ${
              toggleArrow.brands ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="mt-4 flex flex-col space-y-2 p-4">
              <li>Brand 1</li>
              <li>Brand 2</li>
              <li>Brand 3</li>
              <li>Brand 4</li>
            </ul>
          </div>
        </div>
        <hr className="lg:hidden w-full h-2" />

        {/* Information Section */}
        <div className="w-full lg:w-[25%]">
          <button
            className={`flex justify-between items-center w-full lg:cursor-text lg:hidden${
              toggleArrow.info ? "block" : "hidden"
            }`}
            onClick={() => handleArrow("info")}
          >
            <span className="text-lg font-semibold">Information</span>
            <BiDownArrow
              className={`lg:hidden transition-transform duration-300 ${
                toggleArrow.info ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-[max-height] duration-300 overflow-hidden lg:max-h-full ${
              toggleArrow.info ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="mt-4 flex flex-col space-y-2 p-4">
              <li>Info 1</li>
              <li>Info 2</li>
              <li>Info 3</li>
              <li>Info 4</li>
            </ul>
          </div>
        </div>
        <hr className="lg:hidden w-full h-2" />

        {/* Logo & Social Media */}
        <div className="flex justify-between lg:mr-12 lg:flex-col lg:space-y-8">
          <div className="w-20">
            <img src="/light-logo.png" alt="Logo" />
            <p className="w-28 mt-2">product name</p>
          </div>
          <div className="flex space-x-3">
            <p className="font-semibold">Follow us:</p>
            <ul className="flex space-x-3">
              <a
                href="https://www.instagram.com/banjade.m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4 w-full bg-white" />

      <p className="flex justify-center text-center p-2">
        © {year} xyz product. All rights reserved. Design and Develop by Mr.
        Madhav
      </p>
    </div>
  );
};

export default Footer;
