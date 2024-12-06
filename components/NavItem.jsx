import Link from "next/link";
import React from "react";

const NavItem = ({ text, toggleNav, delay, link }) => {
  return (
    <div className="active:scale-90 ">
      <div
        className="inline-block"
        data-aos="fade-down"
        data-aos-duration="1250"
        data-aos-delay={(-delay + 500).toString()}
        onClick={toggleNav}
      >
        <div>
          <Link href={link}>
            <li
              className="flex space-x-2
         items-center  px-1 py-2 cursor-pointer group "
            >
              <p className=" md:block hidden font-extrabold text-transparent  text-[1.2rem]  bg-clip-text bg-gradient-to-r from-HeadingBlue to-secondary opacity-0 group-hover:animate-giggleLeft group-hover:opacity-100 ">
                &lt;
              </p>
              <p className="text-[1.2rem]">{text}</p>
              <p className="md:block hidden font-extrabold text-transparent text-[1.2rem] bg-clip-text bg-gradient-to-r opacity-0 from-HeadingBlue to-secondary group-hover:animate-giggleRight group-hover:opacity-100">
                /&gt;
              </p>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
