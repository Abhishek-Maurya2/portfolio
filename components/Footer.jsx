import React from "react";
import { AiFillHeart } from "react-icons/ai";
import SocialLinksData from "@/socialLinksData";

const Footer = () => {
  return (
    <div className="text-center pb-10 bg-primary pt-5 text-white ">
      <div className=" md:hidden pb-10 flex items-center justify-center  space-x-5 ">
        {SocialLinksData &&
          SocialLinksData.map(
            (link, index) =>
              link.link && (
                <a key={index} target="_new" href={link.link}>
                  <link.Icon className="text-[1.8rem]  transition-all hover:text-secondary duration-200 hover:-translate-y-[2px] hover:scale-105 cursor-pointer" />
                </a>
              )
          )}
      </div>
      <p className="text-HeadingGray  hover:text-HeadingBlue  transition-all duration-300 cursor-pointer text-base">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Abhishek-Maurya2"
        >
          Made in <AiFillHeart className="inline mx-[0.15rem]" /> with Abhishek
        </a>
      </p>
    </div>
  );
};

export default Footer;
