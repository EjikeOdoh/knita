import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Jobs from "./pages/Jobs";
import Hire from "./pages/Hire";
import About from "./pages/About";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <marquee>Hello world</marquee>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="hire" element={<Hire />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
