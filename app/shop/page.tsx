"use client";

import { FilterBar } from "@/components/fiterby";
import { products } from "@/components/forth";
import { HeroHeader } from "@/components/hero-header";
import { ProductCard } from "@/components/ProductCard";
import React from "react";
import Image from "next/image";

const ShopPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/shop", label: "Shop" },
        ]}
        title="Shop"
      />
      <FilterBar />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={{
              ...product,
              image: product.image.src
            }}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8 mb-8">
        <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
        <button className="px-4 py-2 hover:bg-gray-100 rounded">2</button>
        <button className="px-4 py-2 hover:bg-gray-100 rounded">3</button>
        <button className="px-4 py-2 hover:bg-gray-100 rounded">Next</button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white">
        <div className="text-center">
          <h3 className="font-semibold mb-2">High Quality</h3>
          <p className="text-sm text-gray-600">crafted from top materials</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Warranty Protection</h3>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-600">Order over 150 $</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">24 / 7 Support</h3>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>

      <div className="relative w-full h-[270px]">
        <Image
          src="/fr.png"
          alt="footer banner"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ShopPage;
