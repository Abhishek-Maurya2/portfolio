import Link from "next/link";
import React from "react";

const ContactMe = () => {
  return (
    <div
      id="contact-section"
      className="flex flex-col max-w-screen overflow-x-auto scrollbar-hide items-center py-5"
    >
      <h1 className="text-center text-[2.5rem] font-semibold md:font-normal md:text-[3.4rem] mb-5 md:mb-2">
        Get In Touch
      </h1>
      <div className="max-w-[40rem] text-[1rem] text-HeadingGray flex items-center mb-14 text-center">
        <p>
          I&apos;m always open to new freelance opportunities. Whether you have
          a project in mind or just want to say hi, I would love to hear from
          you. Let&apos;s work together to make your vision a reality and create
          something extraordinary!
        </p>
      </div>
      <div>
        <Link href={"/contact"}>
          <button className="tracking-wide  text-base px-6 py-3 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500  hover:bg-cyan-300/5">
            Say Hello
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
