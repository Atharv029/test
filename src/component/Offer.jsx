import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Offer = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: "800",
      

      easing: "ease-out-in",
    });
  }, []);
  return (
    <div className=' max-w-full ' >

      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orange dot" className=' absolute top-[278%] left-[44.4%] w-[1.5%]' id='ser' />
      <h3 className=' absolute top-[276.9%] left-[46.8%] text-[1.4rem] font-Jost '>My Service</h3>
      <h3 className=' absolute top-[286.5%] left-[37.8%] text-6xl font-Jost font-bold'>SPECIALTIES</h3>
      <div className="cardcontainer cursor-pointer" >
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom" className="card1 absolute top-[305%] left-[6.5%] border-[1.7px] border-[#FFE2D1] w-[22%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0 " >
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[19%]  text-3xl font-[600] font-Jost'>Web Developer</h2>
          <p className=' text-xl absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our web development services provide customized, responsive, and user-friendly websites tailored to meet your business needs.</p>
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom"  className="card2 absolute top-[305%] left-[38.5%] border-[1.7px] border-[#FFE2D1] w-[23%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0  " >
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[24.5%]  text-3xl font-[600] font-Jost'>UI/UX Design</h2>
          <p className=' text-xl absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our UI/UX Design services focus on creating intuitive and engaging user experiences that enhance user satisfaction and drive business success.</p>
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-bottom"    className="card3 absolute top-[305%] left-[71.5%] border-[1.7px] border-[#FFE2D1] w-[22%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0 " >
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[8%]  text-3xl font-[600] font-Jost w-[100%]'>WordPress Developer</h2>
          <p className=' text-xl absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our WordPress Developer services offer customized theme design and plugin development to enhance your website's functionality and aesthetics.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer
