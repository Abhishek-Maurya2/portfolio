import React from "react";
import SocialLinksData from "@/socialLinksData";

const SocialLinks = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1300"
      data-aos-delay="1600"
      className="hidden md:fixed justify-end bottom-0 z-[2] left-5 px-10 md:flex flex-col items-center text-white h-fit  space-y-8"
    >
      <div className="flex flex-col space-y-7">
        {SocialLinksData &&
          SocialLinksData.map((link, index) => (
            <a key={index} target="_new" href={link.link}>
              <link.Icon className="text-2xl  transition-all hover:text-secondary duration-200 hover:-translate-y-[2px] hover:scale-105 cursor-pointer" />
            </a>
          ))}
      </div>
      <div className="w-px bg-white h-[5.5rem]"></div>
    </div>
  );
};

export default SocialLinks;
