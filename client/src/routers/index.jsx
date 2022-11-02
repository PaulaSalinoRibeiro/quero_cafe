import { Routes, Route  } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { DetailsProduct } from "../pages/DetailsProduct";
import { NotFound } from "../pages/NotFound";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<DetailsProduct/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}