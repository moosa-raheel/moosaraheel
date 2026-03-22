import { FaLongArrowAltRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form className="grid grid-cols-2 gap-5 my-7">
      <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
        <label htmlFor="fullname" className="text-[#8d8d8d] font-semibold">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="border border-[#333] p-2 rounded-md placeholder:text-[#333] placeholder:font-semibold"
          placeholder="Moosa Raheel"
        />
      </div>
      <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
        <label htmlFor="email" className="text-[#8d8d8d] font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-[#333] p-2 rounded-md placeholder:text-[#333] placeholder:font-semibold"
          placeholder="contact@moosaraheel.com"
        />
      </div>
      <div className="flex flex-col col-span-2 w-full gap-2">
        <label htmlFor="subject" className="text-[#8d8d8d] font-semibold">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="border border-[#333] p-2 rounded-md placeholder:text-[#333] placeholder:font-semibold col-span-2"
          placeholder="Reason For Contact"
        />
      </div>
      <div className="flex flex-col col-span-2 w-full gap-2">
        <label htmlFor="message" className="text-[#8d8d8d] font-semibold">
          Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="border border-[#333] p-2 rounded-md placeholder:text-[#333] placeholder:font-semibold col-span-2 resize-none h-24"
          placeholder="Write a message..."
        ></textarea>
      </div>
      <button className="sm:w-1/2 w-full bg-white text-black py-2 rounded-sm flex justify-center items-center gap-2 cursor-pointer">
        Send Message
        <FaLongArrowAltRight />
      </button>
    </form>
  );
};

export default ContactForm;
