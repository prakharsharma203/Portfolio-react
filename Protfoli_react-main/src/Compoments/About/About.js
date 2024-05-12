import React from "react";
import about from "../../Assests/ProtofoliImage1.png";
import AboutCard from "./AboutCard";
import Skill from "./Skill";

function About() {
  return (
    <>
      <div className="w-full text-white px-16">
        <div className="flex justify-center">
          <div className="p-4 m-1 w-[60%]">
            <h1 className="text-center mb-4 text-4xl ">
            About  <strong className="text-[#c770f0]">Me</strong>
            </h1>
            <AboutCard/>
          </div>
          <div className="pt-8 pb-10 w-[40%]">
            <img src={about} alt="" className="h-full max-w-full" />
          </div>
        </div>
        <section className="">
        <Skill/>
      </section>
      </div>
      
    </>
  );
}

export default About;
