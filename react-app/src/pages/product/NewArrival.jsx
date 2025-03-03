import "swiper/css";

import Slider from "react-slick";

const NewArrival = () => {
  const products = [
    {
      title: "Product 1",
      description:
        "This is a high-quality product designed to meet your needs.",
      image: "/chocolate-cookies-on-rustic-wooden-background.webp",
    },
    {
      title: "Product 2",
      description: "Experience the superior design and unmatched quality.",
      image: "/chocolate-cookies-on-rustic-wooden-background.webp",
    },
    {
      title: "Product 3",
      description: "Get the best value with this exceptional product.",
      image: "/chocolate-cookies-on-rustic-wooden-background.webp",
    },
    {
      title: "Product 4",
      description: "Crafted with precision for your everyday use.",
      image: "/chocolate-cookies-on-rustic-wooden-background.webp",
    },
    {
      title: "Product 5",
      description: "Innovation meets excellence in this fantastic product.",
      image: "/chocolate-cookies-on-rustic-wooden-background.webp",
    },
  ];

  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-8">
          New Arrivals
        </h1>

        <Slider {...setting}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-black">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrival;
