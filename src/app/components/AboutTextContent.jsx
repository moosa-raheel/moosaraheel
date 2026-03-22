"use client";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const AboutTextContent = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const split = SplitText.create(".text", { type: "words" });
    [];
    gsap.from(split.words, {
      opacity: 0,
      y: 15,
      stagger: 0.06,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <div>
        <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2 text">
          I am a passionate software developer with a strong interest in
          building modern, efficient, and user-friendly digital solutions. Over
          the past few years, I have explored multiple programming languages and
          technologies, allowing me to develop a solid foundation in both
          frontend and backend development. I enjoy turning ideas into
          real-world applications and continuously improving my skills by
          working on practical projects.
        </p>
        <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2 text">
          I focus on writing clean, maintainable code and creating systems that
          are scalable and reliable. Problem-solving is at the core of my work,
          and I always strive to understand challenges deeply before
          implementing solutions. Whether it's web development, automation, or
          experimenting with new technologies, I approach each task with
          curiosity and dedication.
        </p>
        <p className="lg:text-xl sm:text-lg text-md text-gray-400 lg:my-4 my-2 text">
          Beyond coding, I value continuous learning and personal growth. I
          believe technology is constantly evolving, and staying updated is
          essential to delivering meaningful work. My goal is to keep improving
          my craft while building impactful solutions that provide real value to
          users.
        </p>
      </div>
    </>
  );
};

export default AboutTextContent;
