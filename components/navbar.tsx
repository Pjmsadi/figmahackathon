import { Heart, Search, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import React from "react";
import { Button } from "./uifiles/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./uifiles/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image 
              src="/Logos-05.svg"
              alt="Furniro Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-700">
            Furniro
          </h1>
        </Link>
        <div className="gap-x-24 hidden md:flex items-center justify-center mx-auto">
          <Link href="/" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
            Contact
          </Link>
        </div>
        <div className="gap-4 hidden md:flex">
          <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
            <User />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
            <Heart />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
              <ShoppingCart />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
            <Search />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Furniro</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <Link href="/" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
                Shop
              </Link>
              <Link href="/blog" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-md font-normal hover:text-[#B88E2F] transition-colors">
                Contact
              </Link>

              <div className="mt-4">
                <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
                  <User />
                </Button>
                <div className="flex mt-6 gap-4">
                  <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
                    <Heart />
                  </Button>
                  <Link href="/cart">
                    <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
                      <ShoppingCart />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="hover:text-[#B88E2F]">
                    <Search />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
