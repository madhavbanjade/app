import React, { useState } from "react";
import Slider from "react-slick";
import NewArrival from "./product/NewArrival";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import TopProduct from "./product/TopProduct";
import About from "./About";
import Nav from "../components/header/nav";

//custom Previous arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-red-500 p-2 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

//custom next arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-red-500 p-2 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const Home = () => {
  const banners = [
    {
      img: "/mainbanner1 (1).jpg",
      title: "Top Cookies Selling Brands In Nepal",
      p: "We are Proud of What we do - we act sensitivley with  the highest standrds of integretiy and quality.",
    },
    {
      img: "/mainbanner2.jpg",
      title: "Top Cookies Selling ",
      p: "We are Proud of What we do - we act sensitivley with  the highest standrds of integretiy and quality.",
    },
    {
      img: "/mainbanner3.jpg",
      title: "Top Cookies",
      p: "We are Proud of What we do - we act sensitivley with  the highest standrds of integretiy and quality.",
    },
  ];
  const setting = {
    dots: true,
    infinity: true,
    speed: 100,
    slidesShow: 3,
    slideToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="w-full font-quicksand">
      <Slider {...setting}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0   bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-sm mt-32 lg:mt-0 md:text-3xl font-bold mb-2">
                {banner.title}
              </h1>
              <p className="text-sm md:text-base ">{banner.p}</p>
              <Link to="product">
                <button className="bg-[#e53424] mt-2 px-6 py-4 rounded-full text-white  text-sm  md:text-base">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center mt-8 lg:mt-12 text-center mb-12 px-4">
        <h1 className="text-[#e53424] text-2xl font-bold">
          Good Life Good Product
        </h1>
        <p className="text-lg md:text-sm mt-2 text-[#666666]">
          We believe that the value of life must not be only living in your
          zone...
        </p>
      </div>
      <p
        data-aos="fade-right"
        className="text-3xl text-[#e53424] font-bold flex  justify-center"
      >
        About Us
      </p>

      <div className="flex flex-col lg:flex-row lg:text-start lg:ml-[10%] text-center space-x-4 mb-12">
        <div
          data-aos="fade-right"
          className="lg:w-[40%] h-auto space-y-2 mt-12 "
        >
          <h1 className="text-3xl font-bold ">Welcome to Good Life</h1>
          <h2 className="ml-2 text-[#e53424] text-2xl">
            Great taste Neturally
          </h2>
          <p className=" text-sm text-[#666666]">
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
          <p className=" text-sm text-[#666666]">
            The unique combination of butter with cashew nuts gives it an
            extraordinary taste. The smooth texture of butter and the
            crunchiness of cashews make every bite crave for another one. Golden
            Cookies takes an edge over other biscuit companies Nepal has by its
            unique combination of ingredients and its genuine line of cookies.
            Golden Cookies is an evident example.
          </p>{" "}
          <p className=" text-sm text-[#666666]">
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
          className="relative  lg:w-[40%] mt-20 lg:mt-0"
        >
          <img src="/about-goodlife.png" alt="" className="lg:w-full w-[90%]" />{" "}
        </div>
      </div>

      <TopProduct />
      <NewArrival />
    </div>
  );
};

export default Home;
