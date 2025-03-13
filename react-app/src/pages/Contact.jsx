import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = ({ user }) => {
  const [formData, setFormData] = useState({
    email: user?.email || "",
    fullName: user?.fullName || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        fullName: user.fullName || "",
      });
    }
  }, [user]);

  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute  font-ribeye flex flex-col items-center  top-16 md:left-80 left-32 lg:left-[40%] text-white">
          <h1 className="text-2xl ">Contact</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="/about-us//" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-xl">
              Contact
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="Contact"
          className="object-cover h-60 w-full"
        />
      </div>
      <div className=" flex font-quicksand flex-col lg:flex-row w-full lg:w-[90%]  p-4 mx-auto mt-5 min-h-fit ">
        <div className=" w-full p-4 lg:ml-12">
          <h1 className="text-2xl font-semibold leading-2 text-[#e73d2d]">
            Love to Listen from you. Get In Touch
          </h1>
          <p className="text-sm text-[#666666]">
            We are very much dedicated in providing quality product.
          </p>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-16 space-y-4">
            <span>
              <h1 className="text-xl font-semibold">Head Office</h1>
              <p className="text-sm text-[#666666]">
              Nepal <br /> Email: info@mdhavbanjade.com.np
              </p>
            </span>
            <span>
              <h1 className="text-xl font-semibold">Fax No.</h1>
              <p className="text-sm text-[#666666]">+99999999999</p>
            </span>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-32 space-y-4">
            <span>
              <h1 className="text-xl font-semibold">Factory</h1>
              <p className="text-sm text-[#666666]">
                Goodlife Food Products <br /> Nepal{" "}
              </p>
            </span>
            <span>
              <h1 className="text-xl font-semibold">Phone</h1>
              <p className="text-sm text-[#666666]">+9775565856985</p>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-4 lg:mr-12 mt-6 lg:mt-9 mb-8 text-[#e53424]">
            <p className="font-semibold ">Follow us:</p>
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
        <div className="bg-slate-200 p-6 w-[90%]   lg:mr-20 ml-4 ">
          <h1 className="mb-4 text-black text-xl">Send Us A Message</h1>
          <form action="" className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="subject"
              className="p-2 rounded-md"
            />
            <textarea
              name="message"
              id=""
              placeholder="message"
              className="p-2 rounded-md"
            ></textarea>
            <button className="text-white bg-[#e53424] rounded-lg     p-4">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="object-cover flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7100784835325!2d85.33393177410898!3d27.695354226022744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a77520a339%3A0x4df14616bdef4f1c!2sSoftech%20Foundation!5e0!3m2!1sen!2snp!4v1738133690576!5m2!1sen!2snp"
          className="h-[450px] w-full "
          // style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
