"use client";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 50) {
        navRef.current.classList.add("bg-black");
      } else {
        navRef.current.classList.remove("bg-black");
      }
    });
  }, []);
  const [show, setShow] = useState(false);
  const navbarRef = useRef();
  useEffect(() => {
    if (show) {
      navbarRef.current.classList.add("-translate-x-full");
      document.documentElement.style.overflowY = "hidden";
    } else {
      navbarRef.current.classList.remove("-translate-x-full");
      document.documentElement.style.overflowY = "auto";
    }
  }, [show]);
  const pathname = usePathname();
  const handleNav = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <nav
        className="w-full h-22 fixed top-0 left-0 flex lg:px-15 px-10 justify-between items-center z-999"
        ref={navRef}
      >
        <Link href={"/"}>
          <div className="logo lg:text-5xl text-3xl font-extrabold text-white">
            MR
          </div>
        </Link>
        <ul className="text-white text-lg lg:flex gap-10 uppercase  hidden">
          <li>
            <Link href="/" className={pathname == "/" ? "border-b py-1" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname == "/about" ? "border-b py-1" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname == "/blog" ? "border-b py-1" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <a href="">Research</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname == "/contact" ? "border-b py-1" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="lg:hidden text-white lg:text-5xl text-3xl relative z-999">
          <TbMenuDeep onClick={handleNav} />
        </div>
      </nav>
      <div
        className="navbar w-full h-screen bg-black fixed top-0 left-full lg:hidden  transition-all duration-500 z-900 flex items-center"
        ref={navbarRef}
      >
        <ul className="text-white w-full h-[60%] lg:text-xl text-lg flex flex-col justify-between items-center uppercase">
          <li onClick={handleNav}>
            <Link href="/" className={pathname == "/" ? "border-b py-1" : ""}>
              Home
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link
              href="/about"
              className={pathname == "/about" ? "border-b py-1" : ""}
            >
              About
            </Link>
          </li>
          <li onClick={handleNav}>
            <a href="">Projects</a>
          </li>
          <li onClick={handleNav}>
            <Link
              href="/blog"
              className={pathname == "/blog" ? "border-b py-1" : ""}
            >
              Blog
            </Link>
          </li>
          <li onClick={handleNav}>
            <a href="">Research</a>
          </li>
          <li onClick={handleNav}>
            <a href="">Resume</a>
          </li>
          <li onClick={handleNav}>
            <Link
              href="/contact"
              className={pathname == "/contact" ? "border-b py-1" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
