'use client'

import React from "react";
import Image from "next/image";
import { HeroHeader } from "@/components/hero-header";

const BlogLayout = () => {
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      category: "Wood",
      date: "03 Aug 2022",
      image: "/blog1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      category: "Handmade", 
      date: "03 Aug 2022",
      image: "/blog2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      category: "Wood",
      date: "03 Aug 2022", 
      image: "/blog1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    }
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    { title: "Going all-in with millennial design", date: "03 Aug 2022" },
    { title: "Exploring new ways of decorating", date: "03 Aug 2022" },
    { title: "Handmade pieces that took time to make", date: "03 Aug 2022" },
    { title: "Modern home in Milan", date: "03 Aug 2022" },
    { title: "Colorful office redesign", date: "03 Aug 2022" },
  ];

  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
        title="Blog"
      />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3 space-y-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 space-x-3">
                      <span>Admin</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-gray-800">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-[#B88E2F] hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex justify-center gap-2 mt-8">
                <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded">2</button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded">3</button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded">Next</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className="flex justify-between text-gray-600"
                    >
                      <span>{category.name}</span>
                      <span>{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <li key={index} className="space-y-1">
                      <h4 className="text-gray-800 hover:text-[#B88E2F] cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#B88E2F]/20"
                />
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

export default BlogLayout;
