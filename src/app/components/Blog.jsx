import Image from "next/image";
import React from "react";

const Blog = ({ img }) => {
  return (
    <div className="h-100 border">
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
      <div className="h-1/2 w-full"></div>
    </div>
  );
};

export default Blog;
