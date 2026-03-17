import React from "react";
import Container from "../UI/Container";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-center text-3xl my-6 capitalize underline">
        Feature Articles
      </h3>
      <Container>
        <div className="grid grid-cols-3 gap-10">
          <Blog img="/img/hero1.jpg" />
          <Blog img="/img/hero1.jpg" />
          <Blog img="/img/hero1.jpg" />
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
