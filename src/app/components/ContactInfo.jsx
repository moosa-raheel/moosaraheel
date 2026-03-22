import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="flex flex-col mt-5">
      <Link href={"mailto:contact@moosaraheel.com"} target="_blank">
        <div className="flex gap-3 my-3">
          <div className="w-15 h-12 bg-[#888] rounded-md flex justify-center items-center">
            <MdOutlineMailOutline className="text-4xl" />
          </div>
          <div>
            <h4 className="md:text-xl text-lg text-[#f2f2f2] font-bold">
              Email
            </h4>
            <h5 className="md:text-lg text-md text-[#777] font-semibold">
              contact@moosaraheel.com
            </h5>
          </div>
        </div>
      </Link>
      <Link href={"tel:+923162394940"} target="_blank">
        <div className="flex gap-3 my-3">
          <div className="w-15 h-12 bg-[#888] rounded-md flex justify-center items-center">
            <CiPhone className="text-4xl" />
          </div>
          <div>
            <h4 className="md:text-xl text-lg text-[#f2f2f2] font-bold">
              Phone
            </h4>
            <h5 className="md:text-lg text-md text-[#777] font-semibold">
              +92 316-2394940
            </h5>
          </div>
        </div>
      </Link>
      <Link href={"https://www.instagram.com/moosa_thefinest"} target="_blank">
        <div className="flex gap-3 my-3">
          <div className="w-15 h-12 bg-[#888] rounded-md flex justify-center items-center">
            <FaInstagram className="text-4xl" />
          </div>
          <div>
            <h4 className="md:text-xl text-lg text-[#f2f2f2] font-bold">
              Instagram
            </h4>
            <h5 className="md:text-lg text-md text-[#777] font-semibold">
              @moosa_thefinest
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContactInfo;
