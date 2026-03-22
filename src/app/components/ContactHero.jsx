import Link from "next/link";
import Container from "../UI/Container";

const ContactHero = () => {
  return (
    <>
      <div className="w-full h-90 bg-[#060606] flex flex-col items-center justify-center gap-4">
        <h1 className="md:text-5xl text-3xl font-bold max-w-[90%] text-center">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-[90%] text-center">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        <ul className="flex gap-5 max-w-[90%] text-center">
          <li>
            <Link href="/" className="text-gray-600">
              Home
            </Link>
          </li>
          <li className="text-gray-600">/</li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactHero;
