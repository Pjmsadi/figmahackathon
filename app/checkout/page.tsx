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
          { href: "/", label: "Home" },
          { href: "/checkout", label: "Checkout" },
        ]}
        title="Checkout"
      />
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full">
                  <option>Country / Region</option>
                  <option>Sri Lanka</option>
                </select>
                <input
                  type="text"
                  placeholder="Street address"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <input
                  type="text"
                  placeholder="Town / City"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full">
                  <option>Province</option>
                  <option>Western Province</option>
                </select>
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
                <textarea
                  placeholder="Additional information"
                  rows={4}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#B88E2F]/20 w-full"
                />
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Product</h2>
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex justify-between">
                  <span>Asgaard sofa × 1</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                </div>
              </div>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  Direct Bank Transfer
                </label>
                <p className="text-gray-600 text-sm ml-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  Cash On Delivery
                </label>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button className="bg-[#B88E2F] text-white font-medium py-3 px-6 rounded-lg mt-6 w-full hover:bg-[#9c7829] transition-colors">
                Place order
              </button>
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
