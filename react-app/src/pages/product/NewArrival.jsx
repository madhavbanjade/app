import "swiper/css";

import Slider from "react-slick";

const NewArrival = () => {
  const products = [
    {
      title: "Coconut",
      description:
        "This is a high-quality product designed to meet your needs.",
      image: "/coconut-medium.png",
    },
    {
      title: "Parle-G ",
      description:
        " A popular brand in Nepal, known for its classic taste and affordability.",
      image: "/parle-g.webp",
    },
    {
      title: "Britannia Milk Bikis",
      description:
        " A favorite among children and adults, these biscuits are known for their creamy milk flavor.",
      image: "/britannia.webp",
    },
    {
      title: "Tasty-Tasty Biscuits",
      description:
        " Manufactured by Kwality Nepal, these are Nepal’s first tea-time salt and sweet biscuits with added glucose and milk for nutrition",
      image: "/tasty-tasty.webp",
    },
    {
      title: "Oreo Chocolate Cream Biscuits",
      description:
        ": Known for their rich chocolate filling and crispy biscuit base, a favorite for indulgence.",
      image: "/oreo.webp",
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
