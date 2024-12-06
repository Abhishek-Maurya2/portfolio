import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeDownload = () => {
  return (
    <button
      type="button"
      className="active:scale-90  shadow-lg hover:scale-110 transition-all duration-200   bg-HeadingBlue text-base md:text-[1.1rem] border-2 text-primary  border-HeadingBlue rounded-md tracking-wide flex gap-2 items-center px-3 py-1 sm:py-2 sm:px-5 cursor-pointer group whitespace-nowrap"
    >
      <a href="./resume.pdf" target="_blank" download>
        Download CV
      </a>
      <MdOutlineFileDownload className="text-[1.25rem] leading-[0.5] group-hover:animate-giggleDown" />
    </button>
  );
};

export default ResumeDownload;
