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
      className="absolute bg-red-500 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full p-2  "
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </div>
  );
};

const TopProduct = () => {
  const products = [
    {
      image: "/digestive.png", // Ensure this path is correct
      title: "Golden Aaja",
      description: "",
    },
    {
      image: "/butter-pride-small.png",
      title: "Butter Pride",
      description: "",
    },
    {
      image: "/diet-digestive.png",
      title: "Diet Digestive",
      description: "",
    },
    {
      image: "/coconut-medium.png",
      title: "Coconut Krunch",
      description: "",
    },
    {
      image: "/digestive.png",
      title: "Golden Aaja",
      description: "",
    },
  ];

  // Slider Settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust for smaller screens (e.g., tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Adjust for even smaller screens (e.g., large phones)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust for mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 md:p-8 flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-[#e53424] text-xl md:text-2xl font-bold text-center">
        Top Products
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6 text-white">
        <button className="bg-[#e53424] w-24 md:w-32 p-2 rounded-2xl hover:bg-black transition-colors">
          Featured
        </button>
        <button className="bg-[#e53424] w-24 md:w-32 p-2 rounded-2xl hover:bg-black transition-colors">
          Golden
        </button>
        <button className="bg-[#e53424] w-24 md:w-32 p-2 rounded-2xl hover:bg-black transition-colors">
          Adguri
        </button>
      </div>

      {/* Slider Container */}
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
