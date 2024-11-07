import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Exp = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: "800",
      

      easing: "ease-out-in",
    });
  }, []);
  return (
    <div className='container h-[200%] max-w-full absolute left-0 top-[390%] bg-[#fff5ea]'>
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orangedot" className='absolute top-[6.6%] left-[44.4%] w-[1.5%]' />
      <h3 className='absolute top-[6.1%] left-[46.8%] text-[1.4rem] font-Jost'>My Resume</h3>
      <h3 className='absolute top-[11.5%]  left-[29.8%] text-6xl font-Jost font-bold'>1+ YEARS OF EXPERIENCE</h3>

      <div className="bd"></div>

      <img src="https://i.postimg.cc/4yRJj2z9/icons8-orange-circle-48.png" alt="dot" loading='lazy' className='w-[35px] absolute top-[31.62%] left-[5.9%]' />
      <p className='font-Jost font-[500] text-3xl absolute top-[31.5%] left-[9%]'>Education</p>

      <img src="https://i.postimg.cc/4yRJj2z9/icons8-orange-circle-48.png" alt="dot" loading='lazy' className='w-[35px] absolute top-[57.6%] left-[5.9%]' />
      <p className='font-Jost font-[500] text-3xl absolute top-[57.4%] left-[9%]'>Skills</p>

      <img src="https://i.postimg.cc/4yRJj2z9/icons8-orange-circle-48.png" alt="dot" loading='lazy' className='w-[35px] absolute top-[84.7%] left-[5.9%]' />
      <p className='font-Jost font-[500] text-3xl absolute top-[84.5%] left-[9%]'>Experience</p>

      <div  className="cardcon">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom"  className="absolute border rounded-lg  w-[70%] top-[22%] left-[23%] h-[22%] bg-white" >
          <div className="text-2xl  p-11 ">
            <h2 className='font-Jost font-[500] w-[30%]' >BSc in Information Technology</h2>
            <br />
            <p className='text-[#606060]'>University of Mumbai (2023 - 2025)</p>
            <br />
            <p className='text-[#606060]'>First Year CGP - 9.5</p>
          </div>
          <div className="line"></div>
          <div className='top-[2%] text-2xl  pl-4 right-[15%] absolute '>
            <h2 className='font-Jost font-[500]  w-[100%] top-1.5 p-8 relative right-[26%]'>Higher School Education</h2>
            <br />
            <p className='top-[70%] right-[10.5%] w-[100%]  absolute text-[#606060]'>Shri SVKM's Mithibai College of Arts & Science (2021 - 2023)</p>
            <br />
            <p className='top-[125.5%] right-[10.5%] w-[100%] absolute text-[#606060]'>HSC - 52% & CET - 85%</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom" className="absolute border rounded-lg w-[70%] top-[48%] left-[23%] h-[22%] bg-white" >
          <div className="p-12 font-Jost font-[500] absolute text-2xl top-[0%] left-[9.5%]">UI/UX Design</div>
          <br />
          <hr className="w-[20.5%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[50%] left-[11%]" />
          <p className="font-Jost absolute text-xl top-[45%] left-[4.5%] text-[#606060]">Figma</p>
          <p className='font-Jost absolute text-xl top-[45%] left-[33%] text-[#606060]'>90%</p>

          <div className='p-12 font-Jost font-[500] absolute text-2xl top-[0%] right-[17%]'>Web Developer</div>
          <p className='font-Jost absolute text-xl top-[45%] right-[42%] text-[#606060]'>React Js</p>
          <p className='font-Jost absolute text-xl top-[45%] right-[10%] text-[#606060]'>90%</p>

          <hr className="w-[26%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[50%] right-[15%]" />
          <p className='font-Jost absolute text-xl top-[60%] right-[44.8%] text-[#606060]'>Java</p>
          <p className='font-Jost absolute text-xl top-[60%] right-[10%] text-[#606060]'>80%</p>

          <hr className="w-[27%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[65%] right-[15%]" />
          <p className='font-Jost absolute text-xl top-[78%] right-[38%] text-[#606060]'>HTML & CSS</p>
          <p className='font-Jost absolute text-xl top-[78%] right-[10%] text-[#606060]'>95%</p>

          <hr className="w-[22%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[83%] right-[15%]" />
          
        </div>

        <div className="line2" data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom" ></div>

        <div className="">
          <div data-aos="fade-up" data-aos-easing="linear" className="absolute border rounded-lg w-[70%] top-[75%] left-[23%] h-[22%] bg-white" >
            
            <div className=' line4'></div>
            <div className="  p-10 ">
            <h2 className='font-Jost text-2xl font-[500] text-black w-[30%]' >Web Devlopment</h2>
            <br />
            <p className='text-[#606060] w-[30%] text-xl'>Frontend Developer Intern (July 2024 - July 2024)</p>
            <br />
            <p className='text-[#606060] w-[40%] text-xl'>I interned at Neuzware, where I gained extensive knowledge and valuable experience throughout my time there</p>
          </div>
            
              

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
