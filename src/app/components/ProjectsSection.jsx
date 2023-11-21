"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";



const projectData = [
  {
    id: 1,
    title: "Second-Hand Online Store",
    description: "Second-Hand Online Store project using React.js",
    image: "/images/projects/project-binar.png",
    url: "https://fejs6-kel6.vercel.app/",
    repoUrl: "https://github.com/khalishmulyadi/fejs6-kel6",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Employee Management Dashboard",
    description: "Employee management dashboard app using Angular and Material UI",
    image: "/images/projects/project-employee-management-dashboard.png",
    repoUrl: "https://github.com/khalishmulyadi/employee-management-dashboard",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Employee API",
    description: "Employee API using Node.js and MySQL",
    image: "/images/projects/project-employee-api.png",
    repoUrl: "https://github.com/khalishmulyadi/employee-api",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Artdigest.co",
    description: "Artdigest.co. Unique home decor website.",
    image: "/images/projects/project-artdigest.png",
    url: "https://artdigest.co/",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Million Bloom",
    description: "Million Bloom website. Online flower shop",
    url: "https://millionbloom.com/",
    image: "/images/projects/project-mb.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Enigwatch",
    description: "Enigwatch website. Watch winder online store",
    image: "/images/projects/project-enigwatch.png",
    url: "https://enigwatch.com/",
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
        Some of My Works and Projects
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
              key={project?.id}
              imgUrl={project?.image}
              projectTitle={project?.title}
              projectDescription={project?.description}
              projectUrl={project?.url}
              projectRepoUrl={project?.repoUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
