import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
function ProjectsCard({
  imgPath,
  isBlog,
  title,
  description,
  gitLink,
  demoLink,tech
}) {
  return (
    <div className="shadow-lg bg-transparent w-[30%] rounded-lg text-white" style={{"border" : "1px solid rgba(0,0,0,.125)" ,
    "boxShadow" : "0 4px 5px 3px rgba(119,53,136,.459)"}}>
      <img src={imgPath} alt="" className="py-3 px-4 w-full rounded-lg"/>
      
        <div className="w-full text-center text-3xl">{title}</div>
        <p className="p-4  text-lg text-justify">{description}</p>
        <p className="text-center mt-2 text-xl">Tech Stack : {tech}</p>
        <div className="flex justify-evenly mt-3 items-center pb-5">
        <button className="flex items-center py-2 px-4 bg-[#623686!important] rounded-lg ">
          <BsGithub /> &nbsp; <a href={gitLink}>{isBlog ? "Blog" : "GitHub"}</a>
        </button>
        {!isBlog && demoLink && (
            <button className="flex items-center py-2 px-4 bg-[#623686!important] rounded-lg"> <CgWebsite /> &nbsp; <a href={demoLink}>Demo</a></button>
        ) }
        </div>
      
    </div>
  );
}

export default ProjectsCard;
