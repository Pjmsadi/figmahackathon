'use client'

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="border-t-2 border-gray-300 p-5">
            <div className="flex flex-wrap justify-between gap-6">
                {/* Company Info */}
                <section className="w-[14rem]">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="relative w-8 h-8">
                            <Image 
                                src="/Logos-05.svg"
                                alt="Funiro Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className="font-bold text-2xl">Funiro.</h2>
                    </div>
                    <p className="text-gray-700">
                        400 University Drive Suite 200 Coral Gables, FL 33134 USA
                    </p>
                </section>

                {/* Navigation */}
                <nav>
                    <h4 className="font-semibold text-lg">Navbar</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Help */}
                <nav>
                    <h4 className="font-semibold text-lg">Help</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="/payment">Payment Option</a></li>
                        <li><a href="/returns">Returns</a></li>
                        <li><a href="/privacy">Privacy Policies</a></li>
                    </ul>
                </nav>

                {/* Newsletter */}
                <section>
                    <h4 className="font-semibold text-lg">Newsletter</h4>
                    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded p-2"
                            aria-label="Your Email"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white font-bold p-2 rounded hover:bg-gray-800 transition-colors"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </section>
            </div>

            {/* Footer Bottom */}
            <div className="mt-5 text-center">
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Funiro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
