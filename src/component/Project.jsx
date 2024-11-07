import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Project = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: "800",


      easing: "ease-out-in",
    });
  }, []);
  return (
    <div className='absolute top-[590%] container h-[120%] max-w-full' id='Project'>
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" alt="resume" className='absolute top-[7%]  left-[44.4%] w-[1.5%]' />
      <h3 className='absolute top-[6.2%] left-[46.8%] text-[1.4rem] font-Jost'>My Resume</h3>
      <h3 className='absolute top-[14.5%] left-[38.8%] text-5xl font-Jost font-bold'>MY PORTFOLIO</h3>

      <div className="grid grid-cols-3 gap-24 absolute top-[29.5%] left-[7.5%] w-[85%] h-[50%] cursor-pointer">
        <div data-aos="fade-right" data-aos-duration="1350" data-aos-anchor-placement="center-bottom" className="text-center bg-[#fef3e8] rounded-lg hover:border-[2.5px] border-[#f5b372]">
          <a href="https://atharv029.github.io/spotify-clone/" target='_blank'>
            <img src="https://i.postimg.cc/sX08bM7G/12505004-d908-4c3f-83fa-eac7bdebcdc4-cover.png" loading='lazy' alt="spotify clone" className="mx-auto w-[100%] h-[80%] object-fill p-4" />
          </a>
          <h2 className="mt-2 mr-2 text-3xl font-semibold font-Jost">Spotify Clone</h2>
        </div>



        <div data-aos="fade-up"  data-aos-duration="1350" data-aos-anchor-placement="center-bottom" className="text-center bg-[#fef3e8] rounded-lg hover:border-[2.5px] border-[#f5b372]">
          <a href="#">
            <img src="https://i.postimg.cc/sxxBDNM0/portfolio-website-builders.jpg" loading='lazy' alt="Portfolio website" className="mx-auto w-[100%] h-[80%] object-fill p-4" />
          </a>
          <h2 className="mt-2 mr-2 text-2xl font-semibold font-Jost">This Portfolio Website</h2>
        </div>



        <div data-aos="fade-left" data-aos-duration="1350" data-aos-anchor-placement="center-bottom" className="text-center bg-[#fef3e8] rounded-lg hover:border-[2.5px] border-[#f5b372]">
          <a href="https://atharv029.github.io/task/" target='blank'>
            <img src="https://i.postimg.cc/CxQcF3d9/caremed-free-healthcare-website-templates.jpg" alt="health care" loading='lazy' className="mx-auto w-[100%] h-[80%] object-fill p-4" />
          </a>
          <h2 className="mt-2 mr-2 text-2xl font-semibold font-Jost">Health Care Website</h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
