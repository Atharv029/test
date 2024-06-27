import React from 'react'




const Manpage = () => {

  return (
    <div className='container h-screen w-full  absolute left-0 top-10 -z-30 bg-[#fff5ea] overflow-hidden' id='home'>
      <img src="src\assets\photo_6253519353194594062_y-removebg-preview (2).png" alt="" className=' w-[35%] absolute bottom-[0%] left-[65.8%]' />
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orang dot" className='logo2' />
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/particleOne.png" loading='lazy' alt="cricle" className='cricle' />
      <h3 className=' absolute top-32 left-32 text-lg font-Jost '>I AM  DEVELOPER</h3>
      <h1 className='absolute top-52 left-24 text-6xl font-bold font-Jost' id='typing1' >Web <p className=' absolute top-0 left-[120%] text-[#ff6b00]' id='typing'>
        <ul className='list'>
          <li> <span>Developer      </span>
          </li>
          
          </ul>
          </p> </h1>
      <p className='absolute top-80 left-24 text-base w-2/4 font-Jost text-[#606060]'>Welcome to my portfolio! I'm a passionate web developer dedicated to creating dynamic and responsive websites that provide seamless user experiences. With expertise in modern web technologies and a keen eye for design. I transform ideas into visually stunning and highly functional digital solutions. Explore my work to see how I can help bring your vision to life.</p>

      <a href="https://online.publuu.com/556425/1250886" target='blank'>

        <button className=' absolute bottom-16 left-24 bg-[#ff6b00] text-white  border w-40 h-10 rounded-lg font-medium text-base  font-Jost'>Download My CV</button>

      </a>

    </div>




  )
}

export default Manpage
