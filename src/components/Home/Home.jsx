import React from "react";
import { CgMouse } from "react-icons/all";
import "./home.css";
import ProductCard from "./ProductCard";
import MetaData from "../Layout/MetaData";

const product = {
  name: "Blue teshirt",
  images: [
    { url: "https://m.media-amazon.com/images/I/811YYjhs62L._AC_UL320_.jpg" }
  ],
  price: "$5000",
  _id: "122324335345"
};

const Home = () => {
  return (
    <>
      <MetaData title="Ecommerce" />
      <div className="banner">
        <p>Welcome To Ecommerce</p>
        <h1>Find Amazing Products Below</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </>
  );
};

export default Home;
