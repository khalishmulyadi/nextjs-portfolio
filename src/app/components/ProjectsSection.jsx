import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Project 1 title",
    description: "Project 1 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Project 2 title",
    description: "Project 2 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 3 title",
    description: "Project 3 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 4 title",
    description: "Project 1 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 5 title",
    description: "Project 1 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white my-7">My Works and Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            projectTitle={project.title}
            projectDescription={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
