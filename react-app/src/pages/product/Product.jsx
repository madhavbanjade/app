import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import TopProduct from "./TopProduct";
import Category from "./Category";

const Product = () => {
  return (
    <div className="relative min-h-fit ">
      {/* <Nav /> */}
      {/* Header Section */}
      <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white z-10">
        <h1 className="text-3xl">Product</h1>
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

      {/* Description Section */}
      <div className="p-4 text-center text-md mt-4 lg:mt-8">
        <p>
          Good Life Food Product had created its Brand with the name of{" "}
          <span className="uppercase text-[#e53424]">"Golden COOKIES"</span> in
          the market. Till the date the products of Golden Cookies are in supply
          on 68 major Districts of Nepal, with the target implementing for whole
          Nepal, which will cover within a year period. Right at the moment we
          do have 42 varieties of Cookies in the brand name of Golden Cookies in
          the market.
        </p>
      </div>
      <Category />
      <TopProduct />
    </div>
  );
};

export default Product;
