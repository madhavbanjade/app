import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Market from "./pages/Market.jsx";
import Product from "./pages/product/Product.jsx";
import Register from "./pages/user/Register.jsx";
import Login from "./pages/user/Login.jsx";
import VerifyUser from "./pages/user/VerifyUser.jsx";
import Items from "./components/Items.jsx";
import Cart from "./components/Cart.jsx";

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

      {/* for cart purpose  */}
      <Route path="/product" element={<Product />} />
      <Route path="product/items/:id" element={<Items />} />
      <Route path="product/items/cart" element={<Cart />} />
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
