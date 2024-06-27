import React from 'react'

const Exp = () => {
  return (
    <div className=' container h-[200%] w-full  absolute left-0 top-[390%] bg-[#fff5ea]'>
      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orangedot" className=' absolute top-[7%] left-[46.4%]' />
      <h3 className=' absolute top-[6.6%] left-[48.8%] text-lg font-Jost '>My Resume</h3>
      <h3 className=' absolute top-[12.5%] left-[28.3%] text-5xl font-Jost font-bold '>1+ YEARS OF EXPERIENCE</h3>
      <div className="bd"></div>
      <img src="src\assets\icons8-circle-48.png" alt="dot" loading='lazy' className=' w-[23px] absolute top-[31.8%] left-[6.2%]' />
      <p className=' font-Jost font-[500] text-2xl absolute top-[31.5%] left-[9%]'>Education</p>
      <img src="src\assets\icons8-circle-48.png" alt="dot" loading='lazy' className=' w-[23px] absolute top-[57.8%] left-[6.2%]' />
      <p className=' font-Jost font-[500] text-2xl absolute top-[57.4%] left-[9%]'>Skills</p>
      <img src="src\assets\icons8-circle-48.png" alt="dot" loading='lazy' className=' w-[23px] absolute top-[84.8%] left-[6.2%]' />
      <p className=' font-Jost font-[500] text-2xl absolute top-[84.5%] left-[9%]'>Experience</p>
      <div className="cardcon" >
        <div className=" absolute border rounded-lg  w-[70%] top-[22%] left-[23%] h-[22%] bg-white  " id='hide'>
          <div className="c p-8" >
            <h2 className=' font-Jost font-[500] text-xl  w-[30%]' id='hide'>BSc in  Information Technology</h2>
            <br />
            <p className='text-[#606060] '>University of Mumbai (2023 - 2025)</p>
            <br />
            <p className='text-[#606060]'>First Year CGP - 9.5</p>
          </div>
          <div className="line"></div>
          <div className='top-[2%]  right-[15%] absolute text-base'>
            <h2 className=' font-Jost font-[500] text-xl  w-[100%] p-8 relative right-[2%]'>Higher School Education</h2>
            <br />
            <p className='top-[65%]  right-[10%] w-[80%] absolute text-[#606060]'>Shri SVKM's Mithibai College of Arts & Science (2021 - 2023)</p>
            <br />
            <p className='top-[115%]  right-[30.5%] absolute text-[#606060]'>HSC - 52%  &  CET - 85%</p>
          </div>

        </div>
        <div className="absolute border rounded-lg  w-[70%] top-[48%] left-[23%] h-[22%] bg-white" id='hide' >

          <div className=" p-12 font-Jost font-[500] absolute text-xl top-[0%]  left-[6%]">UI/UX Design</div>
          <br />
          <hr className=" w-[15%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[50%] left-[13%]"></hr>
          <p className="font-Jost  absolute text-base top-[45%]  left-[6%] text-[#606060]" >Figma</p><p className='font-Jost  absolute text-base top-[45%]  left-[30%] text-[#606060]'>90%</p>
          <div className='p-12 font-Jost font-[500] absolute text-xl top-[0%]  right-[18%]'>Web Developer</div>
          <p className='font-Jost  absolute text-base top-[45%]  right-[40%] text-[#606060]'>React Js</p><p className='font-Jost  absolute text-base top-[45%]  right-[15%] text-[#606060]'>90%</p>
          <hr className=" w-[18%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[50%] right-[20%]"></hr>
          <p className='font-Jost  absolute text-base top-[60%]  right-[42.8%] text-[#606060]'>Java</p><p className='font-Jost  absolute text-base top-[60%]  right-[15%] text-[#606060]'>80%</p>
          <hr className=" w-[21%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[65%] right-[20%]"></hr>
          <p className='font-Jost  absolute text-base top-[78%]  right-[36%] text-[#606060]'>HTML & CSS</p><p className='font-Jost  absolute text-base top-[78%]  right-[15%] text-[#606060]'>95%</p>
          <hr className=" w-[15%] h-[0.7%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[83%] right-[20%]"></hr>

        </div>
        <div className="line2"></div>

        <div className="" >

        <div className="absolute border rounded-lg  w-[70%] top-[75%] left-[23%] h-[22%] bg-white" id='hide' >



          <div className='font-Jost font-bold absolute text-xl top-[30%]  left-[3.5%] text-[#606060]'>I am actively seeking an internship opportunity to gain hands-on experience in frontend development. Although I do not have prior professional experience, I am eager to apply my skills and learn from industry experts.</div>





        </div>

        </div>


      </div>

    </div>
  )
}

export default Exp
