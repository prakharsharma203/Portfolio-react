import React from 'react'
// import javaScript from '../../Assests/Skill/javascript.png'
import Data from'./Data.json'
import SkillName from './SkillName';
function Skill() {
  return (
    <div className='px-6 py-6 m-10'>
      <h1 className='text-4xl pt-4 font-medium text-center'>Tech<span className='text-[#c770f0]'> Stack</span> </h1>
      <div className='pb-12 flex flex-wrap gap-32 pt-10 '>
        {
          Data.map((e,i)=>{
            console.log(e);
            return(
              <SkillName key={i} name = {e.name} img_url = {e.img_url} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Skill
