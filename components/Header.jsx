import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1600" data-aos-delay="1100">
      <div className="">
        <h1 className="md:tracking-1 tracking-widest py-2 mt-8  text-[0.75rem] md:text-xs  text-HeadingGray uppercase">
          Hi, My name is
        </h1>
        <h1 className="xl:text-7xl mt-2 lg:6xl md:text-[2.9rem] text-3xl font-bold ">
          Abhishek Kumar Maurya
        </h1>
        <p className="font-extrabold  text-transparent text-[2.5rem] md:text-[3.5rem] lg:text[4.5rem] xl:text-[4.5rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple  leading-tight">
          I am a Full Stack Developer
        </p>
        <p className="text-base md:text-lg pr-1 lg:text-lg md:max-w-md lg:max-w-[33rem] text-HeadingGray font-medium mt-6">
          I am a Full Stack Developer. Constantly seeking new challenges and
          opportunities to enhance my skills. I am passionate about technology
          and always strive to stay updated with the latest industry trends.
        </p>
        <Link href="/contact">
          <button
            type="button"
            className="py-3 px-6 mt-10  border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95"
          >
            Want to Work with me ?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
