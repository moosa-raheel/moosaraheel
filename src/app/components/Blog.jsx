import Image from "next/image";
import React from "react";

const Blog = ({ img, title, para }) => {
  return (
    <div className="h-120 rounded-2xl overflow-hidden shadow-lg shadow-neutral-900">
      <div className="h-1/2 w-full">
        <Image
          src={img}
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="Blog Image"
        />
      </div>
      <div className="h-1/2 w-full px-2 flex flex-col justify-evenly items-center">
        <h3 className="text-center text-2xl">{title}</h3>
        <p className="text-sm">{para}...</p>
        <button className="bg-gray-300 text-black rounded-full px-4 py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
