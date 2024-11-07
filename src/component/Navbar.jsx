import React from 'react'

const Navbar = () => {
  return (

    <div className="navbar z-0 w-full text-[1.3rem]  ">
      <img src="https://i.postimg.cc/PNG83Mq3/photo-6318869767389298229-x-1-removebg-preview.png" alt=""  className=' absolute w-[15%] left-0 m-4'/>
     <a href="#home "><li>Home</li>  </a>
      <a href="#ser">Service</a>
     <a href="https://drive.google.com/file/d/1V8zXVEIab52zxnfxt5-yHPPeFOj29EYA/view?usp=drive_link" target='blank'> <li>Resume</li></a> 
     <a href="#Project"><li>Portfolio</li>  </a> 
      <a href="#Abouts"><li>About</li> </a>
      <div className="contact font-bold text-[1.2rem] " >
        <a href="https://wa.me/9892467712" target='blank'>Contact Us</a>
      </div>
      
    </div>

  )
}

export default Navbar