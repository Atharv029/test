import React from 'react';

const About = () => {
    console.log(10)
    return (
        <div className='container h-full absolute left-0 top-full'>
            <div className="absolute top-[25%] w-[43%] left-[5%] h-[138%] rounded-xl object-fill" id='Abouts'>
                <img src="https://i.postimg.cc/dQzYHfqQ/photo-6253519353194594062-y-removebg-preview-3.png" alt="profile photo" className='bg-[#ebecf1] border rounded-xl h-[89%]' />
            </div>
           
            <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" loading='lazy' alt="orange dot" className='logo3' />
            <div className="absolute top-[31%] left-[53.5%] text-2xl font-Jost" id='block'>About Me</div>
            <div className="absolute top-[40%] left-[50.8%] text-5xl font-bold font-Jost">Your Vision, My Web Expertise</div>
            <div className="absolute top-[53.5%] left-[51%] w-[45%] text-xl font-Jost text-[#606060]">
                Hi, I'm currently pursuing a BSc in IT and have achieved a CGPA of 9.5 in my first year. Over the past six months, I've been passionately developing websites, honing my skills in front-end and back-end technologies. My goal is to create innovative and user-friendly digital experiences. I'm eager to apply my knowledge and grow in the tech industry. Let's connect and build something amazing together!
            </div>
            <div className="project">
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconOne.png" loading='lazy' alt="checkbox" className='pro w-[5%]' />
                <p className="absolute top-[93.6%] left-[56.8%] font-[500] text-[1.5rem]">Complete Project</p>
                <p className="absolute top-[88.5%] left-[56.8%] font-[700] text-[1.5rem] text-[#ff6b00]">20</p>
                <p className="absolute top-[88.3%] left-[58.8%] font-extrabold text-[1.5rem] text-[#ff6b00]">+</p>
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconTwo.png" loading='lazy' alt="checkbox" className='absolute top-[88%] w-[5%]  right-[23%]' />
                <p className="absolute top-[93.6%] left-[78%] font-[500] text-[1.5rem]">Year of experience</p>
                <p className="absolute top-[88.5%] left-[77.9%] font-[700] text-[1.5rem] text-[#ff6b00]">1</p>
                <p className="absolute top-[88.3%] left-[78.9%] font-[1000] text-[1.5rem] text-[#ff6b00]">+</p>
            </div>
            <div className="advantages">
                <div className="wait">
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[112%] right-[46.4%] w-[2.5%]' />
                    <p className="absolute top-[112.8%] right-[29.4%] text-[1.2rem] font-Jost">Work simple and clean design</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[120%] right-[46.4%] w-[2.5%]' />
                    <p className="absolute top-[120.8%] right-[27%] text-[1.2rem]  font-Jost">New idea and user friendly design</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[112%] right-[22.4%] w-[2.5%]' />
                    <p className="absolute top-[120.8%] right-[11%] text-[1.2rem]  font-Jost">Unlimited Revisions</p>
                    <img src="https://i.postimg.cc/DwvYBQby/approved.png" loading='lazy' alt="tick" className='absolute top-[120%] right-[22.4%] w-[2.5%]' />
                    <p className="absolute top-[112.8%] right-[9.8%] text-[1.2rem]  font-Jost">Web Design Full stack</p>
                </div>
                <a href="https://drive.google.com/file/d/1V8zXVEIab52zxnfxt5-yHPPeFOj29EYA/view?usp=drive_link" target="_blank">
                    <button className='absolute top-[138%] left-[53.5%] bg-[#ff6b00] text-white border w-[12%] h-12 rounded-lg font-medium text-[1.2rem] font-Jost' id='hide'>Download My CV</button>
                </a>
            </div>
        </div>
    );
}

export default About;