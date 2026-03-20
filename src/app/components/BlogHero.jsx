import React from "react";
import Container from "../UI/Container";

const BlogHero = () => {
  return (
    <div className="h-[60vh] w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/hero4.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-3">
      <h1 className="text-4xl uppercase font-bold italic sm:text-5xl xl:text-6xl">
        Blogs
      </h1>
      <Container>
        <h2 className="text-xl sm:text-2xl xl:text-3xl text-center font-medium">
          Thoughts, tutorials, and insights on software development, AI, and
          technology.
        </h2>
      </Container>
    </div>
  );
};

export default BlogHero;
