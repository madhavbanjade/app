import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

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

const Items = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find the product with the matching ID
  const product = products.find((p) => p.id === parseInt(id));

  // If the product is not found, display a message
  if (!product) {
    return (
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white z-10">
          <h1 className="text-3xl">Items</h1>
          <button className="mt-8 flex space-x-4">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-3xl" />
            </Link>
            <Link to="/about-us" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </Link>
            <Link to="/product" className="text-2xl">
              Product
            </Link>
            <MdKeyboardDoubleArrowRight className="text-3xl" />
            <Link className="text-2xl">Items</Link>
          </button>
        </div>

        <img
          src="/contact-bg.png"
          alt="About-us"
          className="h-60 w-full object-cover"
        />

        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold">Product Not Found</h2>
          <p className="text-gray-600">The requested product does not exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addItem(product)); // Dispatch the item to the Redux store
    navigate("/product/items/cart"); // Navigate to the shopping cart page
  };

  return (
    <div className="relative min-h-fit">
      {/* Breadcrumb Section */}
      <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white z-10">
        <h1 className="text-3xl">Items</h1>
        <button className="mt-8 flex space-x-4">
          <Link to="/" className="mt-1">
            <IoHomeOutline className="text-3xl" />
          </Link>
          <Link to="/about-us" className="mt-1">
            <MdKeyboardDoubleArrowRight className="text-3xl" />
          </Link>
          <Link to="/product" className="text-2xl">
            Product
          </Link>
          <MdKeyboardDoubleArrowRight className="text-3xl" />
          <Link className="text-2xl">Items</Link>
        </button>
      </div>

      {/* Background Image */}
      <img
        src="/contact-bg.png"
        alt="About-us"
        className="h-60 w-full object-cover"
      />

      {/* Product Details Section */}
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center p-8 bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-64 lg:h-96"
            />
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <hr className="my-4 border-gray-300" />

            {/* Product Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold w-32">Brand:</span>
                <span className="text-gray-700">{product.brand}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Product Code:</span>
                <span className="text-gray-700">{product.code}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Availability:</span>
                <span
                  className={`font-semibold ${
                    product.isAvilable ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.isAvilable ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Price */}
            <p className="text-2xl font-bold text-red-600 mb-6">
              Price: Rs.{product.price}
            </p>

            {/* Add to Cart Button */}
            <button
              className="w-full bg-red-600 text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
              onClick={handleAddToCart}
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