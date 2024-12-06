import React from "react";
import { FaGithub } from "react-icons/fa";
import DownloadPdfButton from "./ResumeButton";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="about-section" className="pt-[7rem]">
      <div
        data-aos="fade-up"
        data-aos-duration="1150"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <h1 className="uppercase  text-HeadingGray text-xl text-center mb-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-fit mx-auto">
          <div className="flex-1 max-w-lg mx-auto flex">
            <div className="lg:w-[25rem] max-w-lg p-4">
              <Image
                src="/abhishek.jpg"
                width={500}
                height={500}
                alt="My Logo"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 max-w-lg mr-auto">
            <h1 className="text-transparent text-[2.4rem] lg:text-[3rem] bg-clip-text bg-gradient-to-r from-purple-300 to-secondaryPurple">
              I&rsquo;m Abhishek
            </h1>
            <p className="text-[1rem] mt-3">
              In the realm of full stack development where the lines between art
              and science blur, I strive to strike a harmonious balance. I am a
              creator of visually stunning and functionally sound websites and
              applications.
            </p>

            <p className="text-[1rem] mt-2">
              As a seasoned professional, I am not only adept at utilizing these
              technologies to their fullest potential, but also deeply committed
              to staying physically and mentally fit through hobbies such as
              cycling and jogging
            </p>

            <p className="text-[1rem]  mt-2">
              I am always eager to expand my skillset and welcome new and
              challenging projects.
            </p>

            <button className="hidden md:block py-3 px-6 mt-10  border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95 ">
              <a
                href="https://github.com/Abhishek-Maurya2"
                target="_new"
                className="flex items-center justify-center gap-3"
              >
                <FaGithub /> My github
              </a>
            </button>
            <div className="md:hidden mt-10 animate-none">
              {/* <DownloadPdfButton /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
