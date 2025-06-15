import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center top-12 md:left-80 left-20 lg:left-[40%] text-white">
          <h1 className="text-3xl">Register</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-xl">
              Sign-Up
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="market"
          className="object-cover h-60 w-full"
        />
      </div>

      <div className="bg-slate-100 mt-2 shadow-2xl w-3/4 flex mx-auto p-8 h-auto flex-col mb-8 font-quicksand">
        <h1 className="text-3xl text-red-500 flex mx-auto font-semibold">
          Sign-Up
        </h1>

        <form className="flex flex-col mx-auto space-y-4 mt-8 w-full">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-lg border border-gray-400"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="E-mail"
            className="p-4 rounded-lg border border-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-lg border border-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="mt-2 bg-red-500 p-4 rounded-xl text-white text-xl font-semibold"
          >
            Sign-Up
          </button>
        </form>

        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <button className="text-blue-800 hover:underline font-bold">
              Sign-In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
