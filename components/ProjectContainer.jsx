import React, { useEffect, useState } from "react";
import ProjectItemCard from "./ProjectItemCard";


const ProjectContainer = ({projects}) => {
  

  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    setAnimationKey(Date.now());
  }, []);

  return (
    <div
      key={animationKey}
      className="mt-10 gap-x-8 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectItemCard
          key={project.id}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
