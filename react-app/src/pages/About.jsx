import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  const [productPopUp, setProductPopUp] = useState(false);
  const [marketPopUp, setMarketPopUp] = useState(false);
  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center  top-12 md:left-80 left-20 lg:left-[40%] text-white">
          <h1 className="text-2xl">About us</h1>
          <button className="mt-8 flex space-x-4">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="/about-us//" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-2xl">
              Company Profile
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="About-us"
          className="h-60 w-full object-cover "
        />
      </div>
      <div className="flex font-quicksand flex-col lg:flex-row space-x-4 min-h-fit p-12 lg:items-center lg:justify-center mb-4">
        <div data-aos="fade-right" className="lg:w-[40%] h-auto space-y-2 ">
          <h1 className="text-3xl font-bold ">Welcome to Good Life</h1>
          <h2 className="ml-2 text-[#e53424] text-2xl">
            Great taste Neturally
          </h2>
          <p className="ml-2 text-sm text-[#666666]">
            Good Life Food Product was established on 1st September 2006 with
            crystal clear motive to produce quality products of the Cookies in
            the market of Nepal. Since from the date of establishment, Good Life
            Food Product had created its Brand with the name of "GOLDEN COOKIES"
            in the market. Till the date the products of Golden Cookies are in
            supply on 68 major Districts of Nepal, with the target implementing
            for whole Nepal, which will cover within a year period. Right at the
            moment we do have 42 varieties of Cookies in the brand name of
            Golden Cookies in the market.
          </p>
          <p className="ml-2 text-sm text-[#666666]">
            The unique combination of butter with cashew nuts gives it an
            extraordinary taste. The smooth texture of butter and the
            crunchiness of cashews make every bite crave for another one. Golden
            Cookies takes an edge over other biscuit companies Nepal has by its
            unique combination of ingredients and its genuine line of cookies.
            Golden Cookies is an evident example.
          </p>{" "}
          <p className="ml-2 text-sm text-[#666666]">
            {" "}
            We have a large variety and we have something for everyone. Golden
            Cookies has created a solid reputation in the biscuit industry in
            Nepal. Being one of the most trusted names in biscuit makers, Golden
            Cookies is dedicated to providing quality and hygienic products to
            its customers.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full lg:w-[40%] mt-4 lg:mt-0"
        >
          <img
            src="/about-goodlife.png"
            alt=""
            className="object-cover w-full"
          />
          <div className="flex space-x-6 ml-2 lg:ml-8 mt-8 ">
            <div
              onMouseEnter={() => setProductPopUp(true)}
              onMouseLeave={() => setProductPopUp(false)}
            >
              {setProductPopUp && (
                <button className="bg-[#e53424] hover:bg-black text-white p-2 rounded-full transition duration-150 ease-in-out">
                  See our product
                </button>
              )}
            </div>
            <div
              onMouseEnter={() => setMarketPopUp(true)}
              onMouseLeave={() => setMarketPopUp(false)}
            >
              {setMarketPopUp && (
                <button className="bg-black hover:bg-[#e53424] text-white p-2 rounded-full transition duration-150 ease-in-out">
                  Our Market
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
