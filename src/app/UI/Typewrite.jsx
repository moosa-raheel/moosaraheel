"use client";
import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
    <>
      <span>
        <TypeAnimation
          sequence={[
            "a Developer",
            1000,
            "a Programmer",
            1000,
            "a Teacher",
            1000,
            "an Associate Engineer",
            1000,
            "an AI Enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={200}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </span>
    </>
  );
};

export default TypeWrite;
