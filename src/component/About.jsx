import React from 'react'


const About = () => {
    
    
    return (
        
        <div className='container h-full   absolute left-0 top-full' >
            <div className="  absolute top-[25%] w-[43%] left-[5%] h-[138%] rounded-xl object-fill " id='Abouts'>
            <img src="src\assets\photo_6253519353194594062_y-removebg-preview (3).png" alt="profile photo" className=' bg-[#ebecf1] border rounded-xl h-[89%]
             ' />
            </div>
           
            <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orange dot" className='logo3' />
            <div className=" absolute top-[31%] left-[53.5%] text-lg font-Jost" id='block'>About Me</div>
            <div className="absolute top-[40%] left-[50.8%] text-4xl font-bold font-Jost">Your Vision, My Web Expertise</div>
            <div className="absolute top-[52%] left-[51%] w-[40%] text-base  font-Jost  text-[#606060]">Hi, I'm currently pursuing a BSc in IT and have achieved a CGPA of 9.5 in my first year. Over the past six months, I've been passionately developing websites, honing my skills in front-end and back-end technologies. My goal is to create innovative and user-friendly digital experiences. I'm eager to apply my knowledge and grow in the tech industry. Let's connect and build something amazing together!</div>
            <div className="project" >
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconOne.png" loading='lazy' alt="chekbox" className='pro' />
                <p className=" absolute top-[93%] left-[56.5%] font-[500] text-[1.3rem]">Complete Project</p>
                <p className="absolute top-[88.2%] left-[56.5%] font-[700] text-[1.3rem] text-[#ff6b00]">20</p>
                <p className="absolute top-[88%] left-[58.5%] font-extrabold text-[1.3rem] text-[#ff6b00]">+</p>
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconTwo.png" loading='lazy' alt="check box" className=' absolute top-[88%] right-[23%]' />
                <p className="absolute top-[93%] left-[78%] font-[500] text-[1.3rem]">Year of experience</p>
                <p className="absolute top-[88%] left-[77.9%] font-[700] text-[1.3rem] text-[#ff6b00]">1</p>
                <p className="absolute top-[88%] left-[78.9%] font-[1000] text-[1.3rem] text-[#ff6b00]">+</p>
            </div>
            <div className="advantges" >
               <div className="wait">


               
                <img src="src\assets\approved.png" loading='lazy' alt="tick" className=' absolute  top-[112%] right-[46.4%] w-[2%] ' />
                <p className="absolute top-[112.3%] right-[29.4%] font-[1rem] font-Jost">Work simple and clean design</p>
                <img src="src\assets\approved.png" loading='lazy' alt="tick" className='absolute top-[120%] right-[46.4%] w-[2%] ' />
                <p className="absolute top-[120.3%] right-[27%] font-[1rem] font-Jost">New idea and user friendly design</p>
                <img src="src\assets\approved.png" loading='lazy' alt="tick" className='absolute top-[112%] right-[22.4%] w-[2%] ' />
                <p className="absolute top-[120.3%] right-[11.2%] font-[1rem] font-Jost">Unlimited Revisions</p>
                <img src="src\assets\approved.png" loading='lazy' alt="tick" className='absolute top-[120%] right-[22.4%] w-[2%] ' />
                <p className="absolute top-[112.3%] right-[9.8%] font-[1rem] font-Jost">Web Design Full stack</p>

               </div>


                <a href="https://online.publuu.com/556425/1250886" target='blank'>
                <button  className=' absolute top-[138%] left-[53.5%] bg-[#ff6b00] text-white  border w-40 h-10 rounded-lg font-medium text-base  font-Jost' id='hide'>Download My CV</button>


                </a>
            </div>

        </div>
    )
}

export default About 
