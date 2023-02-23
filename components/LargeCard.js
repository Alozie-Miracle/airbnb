import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, desc, buttonText }) => {
  return (
    <div>
      <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src={img}
            fill
            className="rounded-2xl object-cover"
            alt="Large Images"
            sizes={96}
          />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-5xl mb-3 w-64 text-white">{title}</h3>
          <p className="text-white">{desc}</p>
          <button className="text-sm text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 mt-5">
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LargeCard;
