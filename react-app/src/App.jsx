import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Market from "./pages/Market.jsx";
import Product from "./pages/product/Product.jsx";
import Register from "./pages/user/Register.jsx";
import Login from "./pages/user/Login.jsx";
import VerifyUser from "./pages/user/VerifyUser.jsx";
import Category from "./pages/product/Category.jsx";
import Items from "./pages/product/Items.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="market" element={<Market />} />
      <Route path="product" element={<Product />} />
      <Route path="register" element={<Register />} />
      <Route path="verify-user" element={<VerifyUser />} />
      <Route path="login" element={<Login />} />
      <Route path="categories" element={<Category />}></Route>
      <Route path="category/items" element={<Items />}></Route>
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
