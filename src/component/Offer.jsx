import React from 'react'

const Offer = () => {
  return (
    <div >

      <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orange dot" className=' absolute top-[280%] left-[46.4%]' id='ser' />
      <h3 className=' absolute top-[279%] left-[48.8%] text-lg font-Jost '>My Service</h3>
      <h3 className=' absolute top-[287.5%] left-[33.8%] text-5xl font-Jost font-bold'>SERVICES I OFFER</h3>
      <div className="cardcontainer cursor-pointer" >
        <div className="card1 absolute top-[305%] left-[6.5%] border border-[#FFE2D1] w-[22%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0 " id='hide'>
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[19%]  text-2xl font-[600] font-Jost'>Web Developer</h2>
          <p className=' text-base absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our web development services provide customized, responsive, and user-friendly websites tailored to meet your business needs.</p>
        </div>
        <div className="card2 absolute top-[305%] left-[38.5%] border border-[#FFE2D1] w-[22%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0 " id='hide'>
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[24.5%]  text-2xl font-[600] font-Jost'>UI/UX Design</h2>
          <p className=' text-base absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our UI/UX Design services focus on creating intuitive and engaging user experiences that enhance user satisfaction and drive business success.</p>
        </div>
        <div className="card3 absolute top-[305%] left-[70.5%] border border-[#FFE2D1] w-[22%] h-[60%] rounded-lg  hover:bg-[#fffaf7] hover:border-0 " id='hide'>
          <img src="https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png" loading='lazy' alt="orange dot" className='absolute top-[13.8%] left-[37%] w-[25%]' />
          <h2 className='absolute  top-[41%] left-[8%]  text-2xl font-[600] font-Jost w-[100%]'>WordPress Developer</h2>
          <p className=' text-base absolute bottom-[10.8%]
            w-[85%] left-[11%] text-[#606060]'>Our WordPress Developer services offer customized theme design and plugin development to enhance your website's functionality and aesthetics.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer
