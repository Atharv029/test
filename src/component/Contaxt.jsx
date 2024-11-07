import React from 'react';

const Contaxt = () => {
  return (
    <div className='absolute top-[710%] container h-[70%] max-w-full border border-black bg-black'>
      <div>
        <h3 className='absolute text-4xl font-bold font-Jost top-[6%] left-[2.2%] text-white'>Get in Touch</h3>
        <p className=" text-xl absolute top-[18%] left-[2.5%] text-[#d2d0d0]">
          I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. If you have any questions, want to collaborate, or just want to say hi, please don't hesitate to reach out!
        </p>
        <br />
        <div className='absolute top-[37%] left-[2%] text-[1.2rem] text-[#d2d0d0]'>
          <p>📧 Email: atharvchawan9@gmail.com</p>
          <br />
          <p>📞 Phone: +91 9892467712</p>
          <br />
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/atharv-chawan-ab01152a7/" className='hover:text-[#ff6b00]' target='_blank'>https://www.linkedin.com/in/Atharv Chawan</a></p>
          <br />
          <p>Feel free to connect with me through any of these channels. I look forward to hearing from you!</p>
        </div>
        <hr className="w-[100.5%] h-[0.1%] bg-gray-200 border-0 dark:bg-gray-700 absolute top-[85%] right-[0%]" />
        <p className='text-[#d2d0d0] font-Jost absolute bottom-[5%] text-xl right-[2%] hover:text-[#ff6b00]'>Developed by Atharv Chawan</p>
      </div>
      <div>
        <h3 className='text-white absolute top-[37%] right-[5.5%] text-2xl font-bold font-Jost'>Follow Me On</h3>
        <a href="https://twitter.com/AtharvChaw78856" target='_blank'><img src="https://i.postimg.cc/xCKJ4zWt/5296516-tweet-twitter-twitter-logo-icon.png" loading='lazy' alt="" className=' absolute top-[49.5%] w-[2.5%] right-[14%]' /></a>
        <a href="https://www.linkedin.com/in/atharv-chawan-ab01152a7/" target='_blank'><img src="https://i.postimg.cc/CxKq9hRj/5296501-linkedin-network-linkedin-logo-icon.png" loading='lazy' alt="" className=" w-[2.5%] absolute top-[49.5%] right-[9%]" /></a>
        <a href="https://wa.me/9892467712" target='_blank'><img src="https://i.postimg.cc/hGz7P2bv/5296520-bubble-chat-mobile-whatsapp-whatsapp-logo-icon.png" alt="" loading='lazy' className=" w-[2.5%] absolute top-[49.5%] right-[4%]" /></a>
      </div>
    </div>
  );
}

export default Contaxt;
