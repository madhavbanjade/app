import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: "/public/about-goodlife.png",
      title: "Category 1",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 2",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 3",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 4",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
    {
      image: "/public/about-goodlife.png",
      title: "Category 5",
    },
  ];

  return (
    <div className="p-2 ">
      <div className="p-4">
        <h1 className="text-xl mb-4">Category</h1>

        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7  gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-2rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/category/items`)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-contain rounded-lg"
              />
              <h1 className="mt-4 text-center py-2">{category.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
