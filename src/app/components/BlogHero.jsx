import React from "react";

const BlogHero = () => {
  return (
    <div className="h-[60vh] w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/hero4.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl uppercase font-bold italic">Blogs</h1>
      <h2 className="text-2xl font-medium">
        Thoughts, tutorials, and insights on software development, AI, and
        technology.
      </h2>
    </div>
  );
};

export default BlogHero;
