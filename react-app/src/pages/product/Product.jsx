import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TopProduct from "./TopProduct";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Britannia Milk Bikis",
      brand: "Britannia",
      code: "P001",
      description:
        "A favorite among children and adults, these biscuits are known for their creamy milk flavor.",
      image: "/britannia.webp",
      price: 10,
    },
    {
      id: 2,
      name: "Tasty-Tasty Biscuits",
      brand: "Kwality Biscuits",
      code: "P002",
      description:
        " Manufactured by Kwality Nepal, these are Nepal’s first tea-time salt and sweet biscuits with added glucose and milk for nutrition",

      image: "/tasty-tasty.webp",
      price: 20,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="relative min-h-fit">
      {/* Breadcrumb Section */}
      <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white z-10">
        <h1 className="text-3xl">Product</h1>
        <div className="mt-8 flex space-x-4">
          <Link to="/" className="mt-1">
            <IoHomeOutline className="text-3xl" />
          </Link>
          <Link to="/about-us" className="mt-1">
            <MdKeyboardDoubleArrowRight className="text-3xl" />
          </Link>
          <Link to="/" className="text-2xl">
            Product
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <img
        src="/contact-bg.png"
        alt="About-us"
        className="h-60 w-full object-cover"
      />

      {/* Product Description */}
      <div className="p-4 text-center text-md mt-4 lg:mt-8">
        <p>
          Good Life Food Product had created its Brand with the name of{" "}
          <span className="uppercase text-[#e53424]">"Golden COOKIES"</span> in
          the market. Till date, Golden Cookies products are supplied in 68
          major districts of Nepal, with plans to cover the entire country
          within a year. Currently, we offer 42 varieties of Cookies under the
          Golden Cookies brand.
        </p>
      </div>

      {/* Product Cards */}
      <div className="p-6 lg:flex lg:flex-wrap lg:justify-start lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-slate-200 rounded-xl overflow-hidden border border-slate-400 mb-6 lg:mb-0 lg:flex-1 lg:max-w-[30%]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                className="text-start underline text-blue-600 w-full"
                onClick={() => navigate(`/product/items/${product.id}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <TopProduct />
    </div>
  );
};

export default Product;
