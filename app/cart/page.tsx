"use client";

import { HeroHeader } from "@/components/hero-header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/sofa1.png",
    },
  ]);

  const handleQuantityChange = (
    id: number,
    type: "increment" | "decrement"
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/cart", label: "Cart" },
        ]}
        title="Cart"
      />
      <div className="bg-gray-100 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Table */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="bg-[#F9F1E7] text-left text-gray-600">
                      <th className="p-4">Product</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Subtotal</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-4 flex items-center space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="rounded-lg"
                          />
                          <span className="text-gray-700">{item.name}</span>
                        </td>
                        <td className="p-4 text-gray-600">
                          Rs. {item.price.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "decrement")
                              }
                              className="text-gray-600 hover:text-black"
                            >
                              -
                            </button>
                            <span className="text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "increment")
                              }
                              className="text-gray-600 hover:text-black"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-gray-700">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-600"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals */}
            <div>
              <div className="bg-[#F9F1E7] p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold mb-6">
                  <span>Total</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <Link href="/checkout">
                  <button className="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#9c7829] transition-colors">
                    Check Out
                  </button>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
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
