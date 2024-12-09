"use client";

import { HeroHeader } from "@/components/hero-header";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/uifiles/button";

const Page = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/comparision", label: "Comparison" },
        ]}
        title="Product Comparison"
      />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">
              Go to Product page for more Products
            </h1>
            <a href="#" className="text-[#B88E2F] underline font-medium">
              View More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Cards */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/sofa1.png"
                  alt="Asgaard Sofa"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4">Asgaard Sofa</h3>
              <p className="text-gray-600">Rs. 250,000.00</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                <span className="text-sm text-gray-500">(4.7)</span>
                <span className="text-sm text-gray-500">204 Reviews</span>
              </div>
              <Button className="w-full mt-4 bg-[#B88E2F] hover:bg-[#B88E2F]/90">Add To Cart</Button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/sofa2.png"
                  alt="Outdoor Sofa Set"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4">Outdoor Sofa Set</h3>
              <p className="text-gray-600">Rs. 224,000.00</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                <span className="text-sm text-gray-500">(4.2)</span>
                <span className="text-sm text-gray-500">145 Reviews</span>
              </div>
              <Button className="w-full mt-4 bg-[#B88E2F] hover:bg-[#B88E2F]/90">Add To Cart</Button>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
              <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90">
                Choose a Product
              </Button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-medium text-gray-600">General</th>
                  <th className="p-4 font-medium text-gray-600">Asgaard Sofa</th>
                  <th className="p-4 font-medium text-gray-600">Outdoor Sofa Set</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Sales Package</td>
                  <td className="p-4">1 sectional sofa</td>
                  <td className="p-4">1 Three Seater, 2 Single Seater</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Model Number</td>
                  <td className="p-4">TFCBLIGRBL6SRHS</td>
                  <td className="p-4">DTUBLIGRBL568</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Secondary Material</td>
                  <td className="p-4">Solid Wood</td>
                  <td className="p-4">Solid Wood</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Configuration</td>
                  <td className="p-4">L-shaped</td>
                  <td className="p-4">L-shaped</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Upholstery Material</td>
                  <td className="p-4">Fabric + Cotton</td>
                  <td className="p-4">Fabric + Cotton</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Upholstery Color</td>
                  <td className="p-4">Bright Grey & Lion</td>
                  <td className="p-4">Bright Grey & Lion</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Filling Material</td>
                  <td className="p-4">Foam</td>
                  <td className="p-4">Matte</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Finish Type</td>
                  <td className="p-4">Bright Grey & Lion</td>
                  <td className="p-4">Bright Grey & Lion</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Adjustable Headrest</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Maximum Load Capacity</td>
                  <td className="p-4">280 KG</td>
                  <td className="p-4">300 KG</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Origin of Manufacture</td>
                  <td className="p-4">India</td>
                  <td className="p-4">India</td>
                </tr>
                <tr className="border-t bg-gray-100">
                  <td colSpan={3} className="p-4 font-medium">Dimensions</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Width</td>
                  <td className="p-4">265.32 cm</td>
                  <td className="p-4">265.32 cm</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Height</td>
                  <td className="p-4">76 cm</td>
                  <td className="p-4">76 cm</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Depth</td>
                  <td className="p-4">167.76 cm</td>
                  <td className="p-4">167.76 cm</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Weight</td>
                  <td className="p-4">45 KG</td>
                  <td className="p-4">65 KG</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Seat Height</td>
                  <td className="p-4">41.52 cm</td>
                  <td className="p-4">41.52 cm</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Leg Height</td>
                  <td className="p-4">5.46 cm</td>
                  <td className="p-4">5.46 cm</td>
                </tr>
                <tr className="border-t bg-gray-100">
                  <td colSpan={3} className="p-4 font-medium">Warranty</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Warranty Summary</td>
                  <td className="p-4">1 Year Manufacturing Warranty</td>
                  <td className="p-4">1.2 Year Manufacturing Warranty</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Warranty Service Type</td>
                  <td className="p-4">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
                  <td className="p-4">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Covered in Warranty</td>
                  <td className="p-4">Warranty Against Manufacturing Defect</td>
                  <td className="p-4">Warranty of the product is limited to manufacturing defects only.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Not Covered in Warranty</td>
                  <td className="p-4">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                  <td className="p-4">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Domestic Warranty</td>
                  <td className="p-4">1 Year</td>
                  <td className="p-4">3 Months</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">crafted from top materials</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
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

export default Page;
