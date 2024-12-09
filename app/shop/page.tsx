import { FilterBar } from "@/components/fiterby";
import { products } from "@/components/forth";
import { HeroHeader } from "@/components/hero-header";
import { ProductCard } from "@/components/ProductCard";
import React from "react";

const ShopPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" }, // Fixed capitalization
          { href: "/shop", label: "Shop" },
        ]}
        title="Shop"
      />
      <FilterBar />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => ( // Added key prop
          <ProductCard 
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
