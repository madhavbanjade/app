import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { CgMailOpen } from "react-icons/cg";
import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <header className="font-quicksand">
      {/* Top Bar */}
      <div className="bg-[#e53424] text-white flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-auto lg:h-[8vh] p-2">
        {/* Contact Info */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 lg:ml-[8%]">
          <span className="flex items-center space-x-2">
            <FaPhoneAlt aria-label="Phone" />
            <span>9749344926</span>
          </span>
          <span className="flex items-center space-x-2">
            <TbDeviceLandlinePhone aria-label="Landline" />
            <span>00-111111</span>
          </span>
          <span className="flex items-center space-x-2">
            <MdLocationOn aria-label="Location" />
            <span>Kathmandu</span>
          </span>
          <span className="flex items-center space-x-2">
            <CgMailOpen aria-label="Email" />
            <span>info@madhavbanjade.com.np</span>
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-4 lg:mr-12 mt-4 lg:mt-0">
          <p className="font-semibold">Follow us:</p>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com/banjade.m/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-300"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-gray-300"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    
      {/* Navigation Bar */}
      <Nav />
    </header>
  );
};

export default Header;
