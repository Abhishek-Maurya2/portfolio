import React, { useState } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';

const ProjectItem = ({ project, index }) => {
  return (
    <div
      className={`flex max-w-sm md:max-w-none  first:mt-[3rem] md:first:mt-[5rem] mt-[5rem] flex-col ${
        index % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'
      } border-gray-800 border shadow-lg md:border-none md:shadow-none rounded-lg px-5  py-5 lg:px-0 lg:py-0  gap-[5rem]`}>
      <div className="max-w-md md:flex-1">
        <Image
          className="rounded-lg mt-5 lg:h-[14rem] object-cover w-full"
          width={600}
          height={300}
          src={project.imageUrl}
          alt={project.title}
        />
      </div>
      <div className="max-w-md  flex-1">
        <h1 className="text-xl uppercase text-center my-4 md:mb-2">
          {project.title}
        </h1>
        <p className="text-HeadingGray">{project.description}</p>
        <div className="flex  gap-x-10 gap-y-5 mt-4 flex-wrap">
          {project.techstack.map((tech, i) => (
            <p key={i} className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-5 items-center justify-around">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <button className="py-2 px-4 mt-10 lg:w-[9rem] w-[7rem] border-HeadingBlue border-2 rounded-full cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95">
              GitHub
            </button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <button className="py-2 px-4 mt-10 lg:w-[9rem] w-[7rem] border-HeadingBlue border-2 rounded-full cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95">
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
