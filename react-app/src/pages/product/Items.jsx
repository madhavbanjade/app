import React from "react";
import { FaPencilAlt, FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-fit">
      {/* Page Header */}
      <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white z-10">
        <h1 className="text-3xl">Items</h1>
        <button className="mt-8 flex space-x-4">
          <Link to="/" className="mt-1">
            <IoHomeOutline className="text-3xl" />
          </Link>
          <Link to="/about-us" className="mt-1">
            <MdKeyboardDoubleArrowRight className="text-3xl" />
          </Link>
          <Link to="/" className="text-2xl">
            Company Profile
          </Link>
        </button>
      </div>

      {/* Background Image */}
      <img
        src="/contact-bg.png"
        alt="About-us"
        className="h-60 w-full object-cover"
      />

      {/* Image & Description Row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/digestive.png"
            alt="items-img"
            className="object-contain p-8 max-w-xs lg:max-w-md"
          />
        </div>

        {/* Product Description */}
        <div className=" p-6 w-full lg:w-1/2 rounded-lg">
          <h1 className="text-xlfont-semibold">Butter Pride</h1>
          <div className="flex space-x-6  mt-2">
            <span>Reviews</span>
            <span className="flex items-center">
              <FaPencilAlt className="mr-1" />
              Write a Review
            </span>
          </div>
          <hr className="mt-4 border-gray-300" />

          <div className="py-4 ">
            <ul>
              <li>Brand: Golden Aaja</li>
              <li>Product code: Product 3</li>
              <li>Availability: In Stock</li>
            </ul>
          </div>

          <p className=" font-semibold">Price: Rs.20</p>
          <hr className="mt-4 border-gray-300" />

          <h1 className="font-semibold mt-4">Available Options</h1>
          <div className="flex flex-col items-start space-y-2 mt-4 w-full">
            <label htmlFor="options" className="font-medium w-full text-left">
              Select:
            </label>
            <select
              name="options"
              id="options"
              defaultValue=""
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 bg-white text-gray-700 w-full"
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="volvo">Small</option>
              <option value="saab">Medium</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <div className="flex mt-6 justify-center">
            <button
              className="bg-red-600 text-white flex items-center space-x-2 px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition"
              onClick={() => navigate("/addtocart")}
            >
              <FaShoppingCart className="text-lg" />
              <span className="text-sm font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
