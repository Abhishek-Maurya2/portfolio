import React, { useEffect, useState } from "react";
import ProjectContainer from "@/components/ProjectContainer";
import Spinner from "@/components/Spinner";
import projects from "@/projectsItem";

const Projects = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 96) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projects;
    } else {
      return projects.filter(
        (project) => project.categories[0].title === selectedCategory
      );
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    setIsLoading(true);
    setFilteredProjects(filterProjects());
    setIsLoading(false);
  }, [selectedCategory]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`bg-primary pb-5 min-h-screen overflow-hidden px-[1.5rem] md:px-[7rem] xl:px-[10rem] text-white ${
            isStickyNav && "mt-[5rem]"
          } `}
        >
          <h1 className="text-4xl uppercase text-center py-5 pb-10">
            My Works
          </h1>
          <div className="flex space-x-5 justify-start sm:justify-center overflow-scroll scrollbar-hide">
            <div
              onClick={() => handleCategory("All")}
              className={`inline-block flex-shrink-0  px-4 py-2 text-center uppercase  ${
                selectedCategory == "All"
                  ? "bg-gradient-to-tl from-blue-600 to-cyan-400   "
                  : "border-2  border-cyan-400 hover:bg-cyan-400/5"
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}
            >
              All
            </div>

            <div
              onClick={() => handleCategory("WebApp")}
              className={`inline-block px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == "WebApp"
                  ? "bg-gradient-to-tl from-blue-600 to-cyan-400   "
                  : "border-2  border-cyan-400 hover:bg-cyan-400/5"
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}
            >
              Web App
            </div>

            <div
              onClick={() => handleCategory("WebPage")}
              className={`inline-block px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == "WebPage"
                  ? "bg-gradient-to-tl from-blue-600 to-cyan-400  "
                  : "border-2  border-cyan-400 hover:bg-cyan-400/5"
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}
            >
              web page
            </div>

            <div
              onClick={() => handleCategory("python")}
              className={` px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == "python"
                  ? "bg-gradient-to-tl from-blue-600 to-cyan-400"
                  : "border-2  border-cyan-400 hover:bg-cyan-400/5"
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}
            >
              python
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <ProjectContainer projects={filteredProjects} />
          )}
        </div>
      )}
    </>
  );
};

export default Projects;
