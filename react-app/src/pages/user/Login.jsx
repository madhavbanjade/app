import React, {  useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../../urls";
import { useAuth } from "../../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const Navigate = useNavigate();

  const { storeTokenInLs } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("");
    try {
      let response = await fetch(`${baseurl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        console.log("Error:");
        setAlertMessage("❌ Invalid Credintals");
      } else {
        const data = await response.json();
        console.log("response from server", data);
        storeTokenInLs(data.token);
        setUser("");
        Navigate("/");
        localStorage.setItem("token", result.token); 
        console.log("Token:", result.token); 
        setAlertMessage("✅ Login Successful");
      }
    } catch (error) {
      setAlertMessage(`⚠️ ${error.message}`);
    }
  };

  return (
    <div>
      <div className="relative min-h-fit">
        <div className="absolute font-ribeye flex flex-col items-center  top-12 md:left-80 left-20 lg:left-[40%] text-white">
          <h1 className="text-3xl">Login</h1>
          <button className="mt-4 flex space-x-2">
            <Link to="/" className="mt-1">
              <IoHomeOutline className="text-xl" />
            </Link>
            <Link to="" className="mt-1">
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            <Link to="/" className="text-xl">
              Login
            </Link>
          </button>
        </div>
        <img
          src="/contact-bg.png"
          alt="market"
          className="object-cover h-60 w-full"
        />
      </div>
      <div className="mt-2 shadow-2xl w-3/4 flex mx-auto p-8 h-auto flex-col mb-8 font-quicksand bg-slate-100">
        <h1 className="text-3xl text-red-500 flex mx-auto font-semibold">
          Sign-In
        </h1>
        {alertMessage && (
          <div
            className={`${
              alertMessage.includes("Success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {alertMessage}
          </div>
        )}
        <form
          action=""
          className="flex flex-col mx-auto space-y-4 mt-8 w-full"
          onSubmit={handleSubmit}
        >
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="e-mail"
            className="p-4 rounded-lg border border-gray-400 "
          />
          <label htmlFor="Email">Password:</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="p-4 rounded-lg border border-gray-400 "
          />
          <button
            className="absloute mt-2 bg-red-500 p-4 rounded-xl text-white text-xl font-semibold"
            type="submit"
          >
            Sign-In
          </button>
        </form>
        <p className="mt-2">
          Don't have an account ?{" "}
          <Link to="/register">
            <button className="text-blue-800 hover:underline font-bold">
              Sign-Up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
