import React from "react";
import ProjectsCard from "./ProjectsCard";
import image from "../../Assests/ProtofoliImage1.png";
import Data from './Data.json'
function Projects() {
  return (
    <>
      <div className="w-full p-10 px-36 text-white">
        <div>
          <h1 className="text-center text-5xl font-medium ">
            My Recent <strong className="text-[#c770f0]">Works </strong>{" "}
          </h1>
          <p className="text-center mb-4 text-white text-lg mt-2">Here are a few projects I've worked on recently.</p>
          <div className="mt-6">
            <div className="flex flex-wrap rounded-lg gap-10">
              {
                Data.map((e,i)=>{
                  return(
                    <ProjectsCard
                    key={i}
                imgPath={e.image_url}
                isBlog={false}
                title={e.title}
                description={e.disc}
                gitLink={e.github_link}
                demoLink={e.Demo_link}
                tech = {e.tech}
              />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
