import React from "react";
import Container from "../UI/Container";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-center text-3xl my-8 capitalize underline">
        Feature Articles
      </h3>
      <Container>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <Blog
            img="/img/hero1.jpg"
            title="Blog Post 1"
            para="Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
          />
          <Blog
            img="/img/hero2.jpg"
            title="Blog Post 1"
            para="Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
          />
          <Blog
            img="/img/hero3.jpg"
            title="Blog Post 1"
            para="Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
          />
          <Blog
            img="/img/hero4.jpg"
            title="Blog Post 1"
            para="Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
          />
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
