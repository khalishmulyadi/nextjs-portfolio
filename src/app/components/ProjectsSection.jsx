"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";



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
    id: 3,
    title: "Project 3 title",
    description: "Project 3 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Project 4 title",
    description: "Project 1 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Project 5 title",
    description: "Project 1 description",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white my-7">
        My Works and Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              projectTitle={project.title}
              projectDescription={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
