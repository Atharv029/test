import React from 'react'

const Contaxt = () => {
  return (
    <div className='absolute top-[710%] container h-[70%] w-full border border-red-800 bg-black'>
     <div className="">
        <h3 className=' absolute text-3xl font-bold font-Jost top-[6%] left-[2.2%] text-white'>Get in Touch</h3>
        <p className=" absolute top-[18%] left-[2.5%] text-[#d2d0d0]">I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. If you have any questions, want to collaborate, or just want to say hi, please don't hesitate to reach out!</p>
        <br />

        <div className=' absolute top-[37%] left-[2%] text-[#d2d0d0]'>


        <p className=''>📧 Email: atharvchawan9@gmail.com</p>
        <br />
        <p className="">📞 Phone: +91 9892467712</p>
        <br />
        <p className="">💼 LinkedIn: <a href="https://www.linkedin.com/in/atharv-chawan-ab01152a7/" className='hover:text-[#ff6b00]'>https://www.linkedin.com/in/Atharv Chawan </a></p>
        <br />
        <p className=''>Feel free to connect with me through any of these channels. I look forward to hearing from you! </p>
        </div>
        <hr class=" w-[97.5%] h-[0.1%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[85%] right-[1.5%]"></hr>
        <p className='text-[#d2d0d0] font-Jost  absolute bottom-[5%] right-[2%] hover:text-[#ff6b00] '>Developed by Atharv Chawan</p>
     </div>
     <div className="">
        <h3 className=' text-white absolute top-[37%] right-[17%] text-xl font-bold font-Jost '>Follow Me On</h3>

        <a href="https://twitter.com/AtharvChaw78856" className='' target='blank'><img src="src\assets\5296516_tweet_twitter_twitter logo_icon.svg" loading='lazy' alt="" className='  w-9 absolute top-[49.5%] right-[24%]'/></a>
        <a href="https://www.linkedin.com/in/atharv-chawan-ab01152a7/" target='blank' ><img src="src\assets\5296501_linkedin_network_linkedin logo_icon.svg" loading='lazy' alt="" className=" w-9 absolute top-[49.5%] right-[19%]" /></a>
        <a href="https://wa.me/9892467712" target='blank' ><img src="src\assets\5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg" alt="" loading='lazy' className=" w-9 absolute top-[49.5%] right-[14%]" /></a>
       
        
     </div>

    </div>
  )
}

export default Contaxt