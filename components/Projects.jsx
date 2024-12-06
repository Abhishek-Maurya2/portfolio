import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem.jsx";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import projects from "@/projectsItem";

const Projects = () => {
  const [filterProjects, setFilterProjects] = React.useState([]);
  useEffect(() => {
    setFilterProjects(projects.slice(0, 3));
  }, []);

  return (
    <div id="project-section" className="pt-[7rem] mb-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1150"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <h1 className="text-xl uppercase text-center text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
          Projects
        </h1>

        <div className="flex items-center flex-col">
          {filterProjects &&
            filterProjects.map((project, index) => (
              <ProjectItem
                project={project}
                key={project._id}
                index={index + 1}
              />
            ))}
        </div>

        <div className="flex justify-center mt-16 md:mt-24 ">
          <Link href="/projects">
            <span className="group text-base md:text-xl border-[1.5px] hover:bg-textGreen/5 border-textGreen  px-6 pl-10 py-3 rounded-lg  text-white transition-all duration-200 cursor-pointer">
              View All Projects
              <BsArrowRight className="text-xl ml-1 inline-block opacity-0 group-hover:animate-giggleRight group-hover:opacity-100 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
