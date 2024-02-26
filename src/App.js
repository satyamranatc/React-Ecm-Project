import React,{useState,useEffect} from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  let [SelectedProduct,setSelectedProduct] = useState();
  let [cartProductsData,setCartProducts] = useState([]);
  let [CartLength,setCartLength] = useState(cartProductsData.length);

  useEffect(()=>{
    setCartLength(cartProductsData.length)
  },[cartProductsData])
  

  return (
    <div>
      <BrowserRouter>
        <Nav CartLength = {CartLength}  />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Shop" element = {<Shop cartProductsData={cartProductsData} setCartProducts = {setCartProducts} setSelectedProduct = {setSelectedProduct}/>}/>
          <Route path="/Products" element = {<Product SelectedProduct = {SelectedProduct}/>}/>
          <Route path="/Cart" element = {<Cart  cartProductsData = {cartProductsData}/>}/>
        </Routes >
      </BrowserRouter>
    </div>
  );
}
