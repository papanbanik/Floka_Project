import React, { useState } from 'react';
import {motion} from 'framer-motion'
import  Personimage from '../assets/home1.webp';
const Card = () => {
    const [count, setCount]= useState(0)

    const startCount = ()=>{
            const end=25;
            const duration= 1000;
            const stepTime= duration/end;
            let current =0;
            const interval= setInterval(()=>{
                current+=1;
                setCount(current);
                if(current>=end)
                    clearInterval(interval);
            }, stepTime)
             };
  return (

   <>
    <div className="flex max-sm:flex-col justify-center items-start gap-4 mt-10 px-2">
      
      {/* Left Card */}
      <div className=" flex-col  gap-5 pt-10 pl-10  max-sm:pt-10 bg-white w-[30%] max-sm:w-[100%] h-80 rounded-lg flex items-center justify-center text-black font-bold  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        <div>
        <motion.h1
        className='text-5xl font-bold text-gray-700'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        onViewportEnter={startCount}>
            <span className='sm:text-8xl'>{count} </span> <span className="text-6xl text-gray-300">+</span> <br/> <span className='text-gray-300 text-xl'>Years of Expereince </span>
        </motion.h1>
      </div>

       <div> 
        <p className='text-gray-300'>Explore how we transform ideas into extraordinary digital experiences.</p>
       </div> 

       </div>


      {/* Middle Card (wider) */}
      <div className=" relative bg-black w-[40%] max-sm:w-[100%] h-80 rounded-lg flex items-center justify-center text-black font-bold transform transition-all duration-300 hover:scale-110 hover:translate-y-4 ">
        <div>
            <img src={Personimage} className='pr-35 pb-10 object-cover scale-180 w-70'/>
        </div>
         <div className="absolute bottom-0 w-full  text-white text-center px-4 py-2">
         <p className="sm:text-xl font-normal">
         “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
         <br/> Merizo H. Yelso  /CEO
       </p>
  </div>
      </div>

      {/* Right Card */}
      <div className="bg-white w-[30%] max-sm:w-[100%] h-80 rounded-lg flex flex-col items-center justify-center text-black font-bold gap-4 p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:- translate-y-2">
  
  {/* Card Title */}
  <p className="text-lg">For check updates
 </p>

  {/* Social Buttons */}
  <div className="flex gap-3">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-blue-200 text-black px-3 py-1 rounded-full border text-sm font-semibold transition-colors"
    >
      Facebook
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-blue-200 text-black  px-3 py-1 rounded-full border text-sm font-semibold transition-colors"
    >
      YouTube
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-white hover:bg-blue-200 text-black px-3 py-1 rounded-full border text-sm font-semibold transition-colors"
    >
      LinkedIn
    </a>
  </div>
</div>
    </div>


<div className="relative w-full overflow-hidden mt-10">
  
  {/* LEFT BLUR */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-150 bg-gradient-to-r from-white to-transparent z-10"></div>

  {/* RIGHT BLUR */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-150 bg-gradient-to-l from-white to-transparent z-10"></div>

  {/* MOVING TEXT */}
  <motion.p
    className="whitespace-nowrap text-5xl font-semibold mt-5"
    initial={{ x: "100%" }}
    animate={{ x: "-100%" }}
    transition={{
      duration: 30,
      ease: "linear",
      repeat: Infinity
    }}
  >
    See how our team combines technology, creativity and strategy
  </motion.p>

</div>

    </> 
  );
};

export default Card;