import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const DynamicAboutMe = dynamic(() => import("@/components/AboutMe"));
const DynamicSkills = dynamic(() => import("@/components/Skills"));
const DynamicProjects = dynamic(() => import("@/components/Projects"));
const DynamicContactMe = dynamic(() => import("@/components/ContactMe"));
const DynamicDaysICode = dynamic(() => import("@/components/DaysICode"));

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 96) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Abhishek - Full Stack Developer</title>
        <meta
          name="description"
          content="Abhishek Kumar Maurya is a proficient full stack web developer with a passion for creating innovative and user-friendly web applications. Explore my portfolio to see my work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Abhishek - Full Stack Developer" />
        <meta
          property="og:description"
          content="Discover the innovative and user-centric web development projects by Abhishek. Dive into my portfolio now."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Abhishek",
            sameAs: [
              "https://x.com/Abhishek_6649",
              "https://www.linkedin.com/in/abhishekmaurya208/",
              "https://github.com/Abhishek-Maurya2",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          })}
        </script>
      </Head>
      <main
        className={`bg-primary h-full max-w-screen overflow-y-hidden flex flex-col items-center justify-center relative text-white px-4 sm:px-[1.5rem] md:px-[3.5rem]`}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={`md:px-[4.5rem] transition-all duration-300 ease-in-out w-full `}
          >
            <div
              className={`h-[calc(100dvh-5rem)] min-h-fit flex items-center xl:pb-[5rem] justify-center w-full ${
                isStickyNav && "mt-[5rem]"
              }`}
            >
              <StarsBackground />
              <ShootingStars />
              <Header />
            </div>
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicAboutMe />
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicDaysICode />
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicContactMe />
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicSkills />
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicProjects />
          </div>
        )}
      </main>
    </>
  );
}
