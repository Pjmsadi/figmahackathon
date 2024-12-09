"use client";

import { HeroHeader } from "@/components/hero-header";
import React, { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Page = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/comparision", label: "comparision" },
        ]}
        title="Comparision"
      />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">
              Go to Product page for more Products
            </h1>
            <a href="#" className="text-blue-500 underline font-medium">
              View More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Cards */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative w-full h-48">
                <Image
                  src="/sofa1.png"
                  alt="Asgard Sofa"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4">Asgard Sofa</h3>
              <p className="text-gray-600">Rs. 250,000.00</p>
              <p className="text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐ (4.7)</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative w-full h-48">
                <Image
                  src="/sofa2.png"
                  alt="Outdoor Sofa Set"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4">Outdoor Sofa Set</h3>
              <p className="text-gray-600">Rs. 224,000.00</p>
              <p className="text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐ (4.2)</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Choose a Product
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-medium text-gray-600">General</th>
                  <th className="p-4 font-medium text-gray-600">Asgard Sofa</th>
                  <th className="p-4 font-medium text-gray-600">
                    Outdoor Sofa Set
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Table Rows */}
                <tr className="border-t">
                  <td className="p-4">Sales Package</td>
                  <td className="p-4">1 Sectional Sofa</td>
                  <td className="p-4">1 Three Seater, 2 Single Seater</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Model Number</td>
                  <td className="p-4">TCEU108896458</td>
                  <td className="p-4">DTLU8861568</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Primary Material</td>
                  <td className="p-4">Solid Wood</td>
                  <td className="p-4">Solid Wood</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Filling Material</td>
                  <td className="p-4">Foam</td>
                  <td className="p-4">Matt</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Weight</td>
                  <td className="p-4">45 KG</td>
                  <td className="p-4">66 KG</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Warranty</td>
                  <td className="p-4">1 Year Manufacturing Warranty</td>
                  <td className="p-4">12 Year Manufacturing Warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[270px]">
        <Image
          fill
          alt="footer banner"
          src="/fr.png"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
