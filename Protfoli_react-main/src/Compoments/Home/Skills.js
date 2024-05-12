import React from 'react'
import Typewriter from "typewriter-effect";

function Skills() {
  return (
    <div className='text-[#cd5ff8]'>
      <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front End Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  )
}

export default Skills
