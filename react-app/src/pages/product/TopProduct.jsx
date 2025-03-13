import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-red-500 p-2 rounded-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
        <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute bg-red-500  right-4 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full p-2  "
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </div>
  );
};

const TopProduct = () => {
  const products = [
    {
      image: "/nabico.webp",
      title: "Nebico Biscuits",
      description:
        "Founded in 1964, Nebico Private Limited is one of the pioneer biscuits industry in Nepal. The factory where Nebico Biscuits are produced and manufactured is in the busy Balaju Industrial District in Balaju.",
    },
    {
      image: "/sudur.webp",
      title: "Sudur Biscuits",
      description:
        "Sudur Biscuits is specially made from the far western region in Nepal. Sudur Biscuits company has made a name for itself in the Nepalese market for providing rich and quality biscuits.",
    },
    {
      image: "/kwality.webp",
      title: "Kwality Biscuits",
      description:
        "Kwality Biscuits is manufactured by Kabra Group. The company was established in 1985. Kabra Group has been Nepal’s top manufacturer of biscuits for over 35 years.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow  />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 md:p-8 flex flex-col justify-center items-center">
      <h1 className="text-[#e53424] text-xl md:text-2xl font-bold text-center">
        Top Products
      </h1>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6 text-white">
        <button className="bg-[#e53424] w-24 md:w-32 p-2 rounded-2xl hover:bg-black transition-colors">
          Nebico Biscuits
        </button>
        <button className="bg-[#e53424] w-24 md:w-32 p-2 rounded-2xl hover:bg-black transition-colors">
          Sudur Biscuits
        </button>
        <button className="bg-[#e53424] w-24 md:w-40 p-2 rounded-2xl hover:bg-black transition-colors">
          Kwality Biscuits
        </button>
      </div>

      <div className="w-full  mt-6 md:mt-8 mb-8 md:mb-12 px-2 md:px-4">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 md:min-h-fit object-contain rounded-lg"
              />
              <h2 className="text-center mt-2 text-sm md:text-base bg-[#e53424] text-white px-6 py-4 rounded-full  rounded-t-none">
                {product.title}
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProduct;
