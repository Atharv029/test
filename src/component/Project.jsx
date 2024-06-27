import React from 'react'

const Project = () => {
  
  return (
    <div className=' absolute top-[590%] container h-[120%] w-full' id='Project'>
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" alt="resume" className=' absolute top-[7%] left-[46.5%] ' />
      <h3 className=' absolute top-[6.6%] left-[48.8%] text-lg font-Jost '>My Resume</h3>
      <h3 className=' absolute top-[14.5%] left-[36.8%] text-5xl font-Jost font-bold'>MY PORTFOLIO
      </h3>

      <div id='hide' className="grid grid-cols-3  gap-28 absolute top-[29.5%] left-[7.5%]  w-[85%] h-[50%] cursor-pointer">
        <div className="text-center bg-[#fef3e8] rounded-lg hover:border-[2.5px] border-[#f5b372]">
          <a href="https://atharv029.github.io/spotify-clone/" target='blank'>
            <img src="src\assets\12505004-d908-4c3f-83fa-eac7bdebcdc4-cover.png" loading='lazy' alt="spotify clone" className="mx-auto w-[100%] h-[80%]   object-fill p-4" />
          </a>
          <h2 className="mt-2 mr-2 text-3xl font-semibold font-Jost">Spotify Clone</h2>
        </div>
        <div className="text-center bg-[#fef3e8]  rounded-lg hover:border-[2.5px] border-[#f5b372]">
          <a href="">
            <img src="src\assets\portfolio-website-builders.jpg" loading='lazy' alt="Protfolio website" className="mx-auto w-[100%] h-[80%]  object-fill p-4 " />
          </a>
          <h2 className="mt-2 mr-2 text-2xl font-semibold font-Jost">This Portfolio Webstie</h2>
        </div>
        <div className="text-center bg-[#fef3e8]  rounded-lg  hover:border-[2.5px] border-[#f5b372]">
          <a href="https://atharv029.github.io/task/" target='balnk'>
            <img src="src\assets\caremed-free-healthcare-website-templates.jpg" alt="health care" loading='lazy' className="mx-auto w-[100%] h-[80%]  object-fill p-4" />
          </a>
          <h2 className="mt-2 mr-2 text-2xl font-semibold font-Jost">Health Care Website</h2>
        </div>
      </div>
    </div>
  )
}

export default Project
