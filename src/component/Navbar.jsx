import React from 'react'

const Navbar = () => {
  return (

    <div className="navbar z-0">
     <a href="#home"><li>Home</li>  </a>
      <a href="#ser">Service</a>
     <a href="https://online.publuu.com/556425/1250886" target='blank'> <li>Resume</li></a> 
     <a href="#Project"><li>Portfolio</li>  </a> 
      <a href="#Abouts"><li>About</li> </a>
      <div className="contact font-bold">
        <a href="https://wa.me/9892467712" target='blank'>Contact Us</a>
      </div>
      
    </div>

  )
}

export default Navbar