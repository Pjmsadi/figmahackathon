import React from "react";
import Image from "next/image";

const Mid = () => {
  return (
    <div className="my-8 flex items-center flex-col max-w-7xl mx-auto px-4">
      <h1 className="mt-2 font-bold text-3xl flex justify-center items-center">
        Browse The Range
      </h1>
      <h4 className="flex justify-center font-normal text-xl items-center mb-2">
        Lorem ipsum dolor sit dih wjhs didbnsi
      </h4>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="text-center">
          <div className="relative aspect-[381/480] w-full">
            <Image 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              alt="Dining room furniture" 
              src="/midpic.png"
              priority
            />
          </div>
          <p className="font-semibold text-2xl mt-8">Dining</p>
        </div>
        <div className="text-center">
          <div className="relative aspect-[381/480] w-full">
            <Image 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              alt="Living room furniture" 
              src="/midimg2.png"
            />
          </div>
          <p className="font-semibold text-2xl mt-8">Living</p>
        </div>
        <div className="text-center">
          <div className="relative aspect-[381/480] w-full">
            <Image 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              alt="Bedroom furniture" 
              src="/midimg3.png"
            />
          </div>
          <p className="font-semibold text-2xl mt-8">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Mid;
