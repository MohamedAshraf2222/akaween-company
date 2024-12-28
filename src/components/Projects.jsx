import React from "react";
import HeaderText from "../utilities/HeaderText";
import ProjectCard from "../utilities/ProjectCard";

const Projects = ({ projects }) => {
  return (
    <div className="mb-[60px] px-[50px]">
      <HeaderText header={"اهم المشروعات"} />
      <div className="flex flex-wrap gap-[70px] justify-center items-center my-10">
        {projects.slice(1,4).map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
