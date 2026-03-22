"use client";
import React, { useRef } from "react";
import Header from "./components/Header";
import TypeWrite from "./UI/Typewrite";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
const page = () => {
  const router = useRouter();
  const nameHeadRef = useRef();
  const nameSubRef = useRef();
  useGSAP(() => {
    gsap.from(nameHeadRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(nameSubRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    tl.from(".btn", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <Header>
        <div className="text-white">
          <h1
            className="lg:text-[5vw] text-[8vw] font-extrabold"
            ref={nameHeadRef}
          >
            MOOSA RAHEEL
          </h1>
          <div className="lg:text-[2vw] text-[5vw]" ref={nameSubRef}>
            I'm <TypeWrite />
          </div>
          <div className="buttons flex lg:gap-9 gap-4 lg:mt-7 mt-2 overflow-hidden">
            <button
              className="border md:px-12 sm:px-8 px-6  md:py-3  py-2 rounded-full btn cursor-pointer"
              onClick={() => router.push("/about")}
            >
              About Me
            </button>
            <button
              className="border md:px-12 sm:px-8 px-6  md:py-3  py-2 rounded-full btn cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Read Blog
            </button>
          </div>
        </div>
      </Header>
    </>
  );
};

export default page;
