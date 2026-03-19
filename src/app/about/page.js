import React from "react";
import Container from "../UI/Container";

const page = () => {
  return (
    <Container>
      <h1 className="lg:pt-42 pt-28 lg:text-6xl text-4xl font-extrabold lg:after:w-[25%] after:w-44 after:h-1 after:bg-white after:block after:my-3">
        About Me
      </h1>
      <h2 className="font-bold lg:text-2xl text-xl lg:my-6 my-3 text-gray-500">
        I'm Moosa Raheel — a Full Stack Developer, Educator, and AI Enthusiast.
      </h2>
      <div className="grid gap-5 xl:grid-cols-2 grid-cols-1">
        <div>
          <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2">
            I am a passionate software developer with a strong interest in
            building modern, efficient, and user-friendly digital solutions.
            Over the past few years, I have explored multiple programming
            languages and technologies, allowing me to develop a solid
            foundation in both frontend and backend development. I enjoy turning
            ideas into real-world applications and continuously improving my
            skills by working on practical projects.
          </p>
          <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2">
            I focus on writing clean, maintainable code and creating systems
            that are scalable and reliable. Problem-solving is at the core of my
            work, and I always strive to understand challenges deeply before
            implementing solutions. Whether it’s web development, automation, or
            experimenting with new technologies, I approach each task with
            curiosity and dedication.
          </p>
          <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2">
            Beyond coding, I value continuous learning and personal growth. I
            believe technology is constantly evolving, and staying updated is
            essential to delivering meaningful work. My goal is to keep
            improving my craft while building impactful solutions that provide
            real value to users.
          </p>
        </div>
        <div className="bg-[url('/img/about.jpg')] bg-cover bg-center xl:h-full lg:h-200 md:h-140 h-120 "></div>
      </div>
    </Container>
  );
};

export default page;
