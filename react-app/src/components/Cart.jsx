import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Items = useSelector((state) => state.items); // ✅ Access state.cart.items

  // Calculate total price of all items in the cart
  const totalPrice = Items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center top-16 md:left-80 left-32 lg:left-[40%] text-white">
          <h1 className="text-2xl">Shopping Cart</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="/about-us/" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/product" className="text-xl">
              Product
            </Link>
            <MdKeyboardDoubleArrowRight className="text-xl" />
            <Link to="/product/items" className="text-xl">
              Items
            </Link>
            <MdKeyboardDoubleArrowRight className="text-xl" />
            <Link to="/product/items/cart" className="text-xl">
              Cart
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="Contact"
          className="object-cover h-60 w-full"
        />
      </div>

      {Items.length === 0 ? ( // ✅ Display message if cart is empty
        <div className="text-center mt-8">
          <p className="text-xl font-semibold">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-red-600 text-white px-6 mb-4 py-4 rounded-full hover:bg-red-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto mt-8 p-6">
            <table className="w-full border-2 border-gray-300 text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2 border-r-2 border-gray-300">
                    Image
                  </th>
                  <th className="border px-4 py-2 border-r-2 border-gray-300">
                    Product Name
                  </th>
                  <th className="border px-4 py-2 border-r-2 border-gray-300">
                    Quantity
                  </th>
                  <th className="border px-4 py-2">Total Price</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {Items.map((item) => (
                  <tr
                    key={item.id}
                    className="border border-y-2 border-gray-300"
                  >
                    <td className="border border-r-2 border-gray-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-12 object-contain mx-auto"
                      />
                    </td>
                    <td className="border border-r-2 border-gray-300">
                      {item.name}
                    </td>
                    <td className="border border-r-2 border-gray-300 flex justify-center items-center space-x-2">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </td>
                    <td className="border border-r-2 border-gray-300">
                      Rs.{item.quantity * item.price}
                    </td>
                    <td className="border border-gray-300">
                      <button
                        className="text-red-600 hover:text-red-700 transition"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between">
            <div>
              <button className="bg-red-600 text-white p-2 rounded-full">
                Continue Shopping
              </button>
            </div>

            <h1 className="p-1 ">
              <strong>Total Price :</strong> Rs. {totalPrice.toFixed(2)}
            </h1>
            <div>
              <button className="bg-red-600  text-white p-2 rounded-full">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
