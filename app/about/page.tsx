"use client";

import { HeroHeader } from "@/components/hero-header";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png" // Updated image path
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        title="About Us"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We believe in crafting furniture that not only looks beautiful but also stands the test of time. Our journey began with a simple idea: to create pieces that bring both comfort and style to your home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in furniture design and manufacturing, we've built a reputation for quality craftsmanship and attention to detail. Every piece in our collection is carefully designed and expertly crafted to meet our high standards.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/our-story.jpg" // Updated image path
              alt="Our Story"
              layout="fill"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-[#F9F1E7] rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
            <p className="text-gray-600 leading-relaxed">
              We source only the finest materials to ensure durability and longevity in every piece.
            </p>
          </div>
          <div className="text-center p-6 bg-[#F9F1E7] rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Expert Craftsmanship</h3>
            <p className="text-gray-600 leading-relaxed">
              Our skilled artisans bring years of experience to create exceptional furniture.
            </p>
          </div>
          <div className="text-center p-6 bg-[#F9F1E7] rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
            <p className="text-gray-600 leading-relaxed">
              We're committed to ensuring every customer finds their perfect piece.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image
                    src={`/images/team-member-${member}.jpg`} // Updated image path
                    alt={`Team Member ${member}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Team Member {member}</h3>
                  <p className="text-gray-600 mt-1">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[270px]">
        <Image 
          src="/fr.png" // Updated image path
          alt="Footer banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPage;
