import React from "react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="block">
      {showScroll && (
        <button
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-once="true"
          onClick={scrollToTop}
          className={`fixed bottom-10 z-20
           opacity-100 translate-y-0
         md:right-[5rem] right-2 active:scale-95 transition-transform bg-slate-100/10  shadow-sm text-white p-2 rounded-full  hover:bg-white/25`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
