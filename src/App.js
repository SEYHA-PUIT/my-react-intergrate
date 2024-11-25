import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SingleBlog from "./Pages/SingleBlog";
import SingleProduct from "./Pages/SingleProduct";
import Tracking from "./Pages/Tracking";
import Elements from "./Pages/Elements";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          {/* <Route path="/single-product" element={<SingleProduct />} /> */}
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
