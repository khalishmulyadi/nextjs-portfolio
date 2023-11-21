import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const ProjectCard = ({ imgUrl, projectTitle, projectDescription, projectUrl, projectRepoUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={projectRepoUrl ? projectRepoUrl : `#`} className="mr-3 h-14 w-14 border-2 border-white relative rounded-full hover:border-opacity-80 group/link">
                <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-opacity-80" />
            </Link>
            <Link href={projectUrl ? projectUrl : `#`} className="h-14 w-14 border-2 border-white relative rounded-full hover:border-opacity-80 group/link">
                <EyeIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-opacity-80" />
            </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{projectTitle}</h5>
        <p className="text-[#adb7BE] line-clamp-2">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
