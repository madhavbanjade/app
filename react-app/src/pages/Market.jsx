import React from "react";
import { FaCookieBite, FaGrinHearts, FaUserEdit } from "react-icons/fa";
import { IoHappy, IoHomeOutline, IoTime } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Market = () => {
  return (
    <div className="">
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center  top-12 md:left-80 left-20 lg:left-[40%] text-white">
          <h1 className="text-2xl">Market</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="/about-us//" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-xl">
              Market
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="market"
          className="object-cover h-60 w-full"
        />
      </div>
      <div className="lg:w-[70%] font-quicksand mb-8 lg:mx-auto shadow-4xl rounded-md bg-white flex  flex-col lg:flex-row lg:space-x-4   items-center justify-between p-8 space-y-6 bg-gradient-to-b from-transparent to-black/20">
        <div className=" text-start">
          <p className="text-[#666666]  text-sm mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur libero molestias a.
          </p>
          <p className="text-[#666666]  text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            dolorum ad error maiores commodi molestiae quis, sequi nihil ab
            repellat totam. Possimus, adipisci excepturi!
          </p>
          <span className="text-[#e53424] hover:text-black text-xl flex gap-1 mt-4">
            <IoHappy className="mt-1" /> Happy Customer
          </span>
          <span className="text-[#e53424] hover:text-black text-xl flex gap-1 mt-2">
            <FaCookieBite className="mt-1" /> Feal the Taste
          </span>
          <span className="text-[#e53424] hover:text-black text-xl flex gap-1 mt-2">
            <FaGrinHearts className="mt-1" /> Be fit & healthy
          </span>
        </div>
        <div>
          <img
            src="/public/marketbiscuit (1).png"
            alt=""
            className="object-cover  rounded-sm"
          />
        </div>
        <div>
          <span className="text-[#e53424] hover:text-black text-xl flex gap-1">
            <IoTime className="mt-1" /> Timely Service
          </span>
          <span className="text-[#e53424] hover:text-black text-xl flex gap-1 mt-2">
            <FaUserEdit className="mt-1" /> Updated With Feedback
          </span>

          <p className="text-[#666666]  text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut
            ipsum assumenda esse!
          </p>
          <p className="text-[#666666]  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            porro repellat nemo, mollitia a possimus odit nostrum quam
            voluptatum dolorem sequi fuga consectetur cum. Tenetur, voluptate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Market;
