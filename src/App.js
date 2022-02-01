import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Data from "./Components/Data";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <>
      <BrowserRouter>
      <Data>
        <NavBar />
        {/* Context Data */}
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Data>
      </BrowserRouter>
    </>
  );
}

export default App;
