import React from "react";
import Image from "next/image";
import { Button } from "./uifiles/button";
import { ProductCard } from "./ProductCard";

export const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair", 
    price: 2500000,
    image: {
      src: "/for1.png",
      alt: "Syltherine cafe chair",
      width: 285,
      height: 301
    }
  },
  {
    name: "Lolito", 
    description: "Luxury big sofa",
    price: 7000000,
    image: {
      src: "/for4.png", 
      alt: "Lolito luxury sofa",
      width: 285,
      height: 301
    }
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: {
      src: "/for3.png",
      alt: "Respira outdoor furniture",
      width: 285,
      height: 301
    }
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: {
      src: "/for5.png",
      alt: "Grifo night lamp",
      width: 285,
      height: 301
    }
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: {
      src: "/for6.png",
      alt: "Muggo small mug",
      width: 285,
      height: 301
    }
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    image: {
      src: "/for7.png",
      alt: "Pingky bed set",
      width: 285,
      height: 301
    }
  },
];

const Forth = () => {
  return (
    <div className="my-8 flex items-center flex-col max-w-7xl w-full">
      <h1 className="mt-2 mb-2 font-bold text-3xl flex justify-center items-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            product={{
              ...product,
              image: product.image.src // Convert image object to string
            }} 
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 mb-3">
        <Button className="text-[#B88E2F] bg-white border border-[#B88E2F] rounded">
          Explore more
        </Button>
      </div>
    </div>
  );
};

export default Forth;
