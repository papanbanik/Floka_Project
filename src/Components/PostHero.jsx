import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

const PostHero = () => {
  return (
    <div id="hero" className="flex flex-col gap-50 max-sm:gap-0 items-center sm:flex-row justify-between md:items-start mt-10 px-5 md:px-20 text-black">
      
      <div className="relative w-64 h-64 md:mr-10 mb-10 md:mb-0 flex justify-center items-center">
        <img
          src={Logo}
          alt="Logo"
          className="absolute w-20  z-10"
        />

        <motion.svg
          className="absolute w-64 h-64"
          style={{ transformOrigin: "center center" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <defs>
            {/* Circle path, inverted so text faces inward */}
            <path
              id="circlePathInside"
              d="M 30 50 m 50, 0 a 60,60 0 1,0 120,120 a 60,60 0 1"
              fill="transparent"
            />
          </defs>

          <text fill="black" fontSize="12" fontWeight="bold" textAnchor="middle">
            <textPath href="#circlePathInside" startOffset="90%">
               EXPLORIOUS OR MORE WANT IT TO SOUND PLAYFUL
            </textPath>
          </text>
        </motion.svg>
      </div>

      {/* Text Section */}
      <div className="flex-1 mt-12">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left font-semibold text-4xl leading-snug text-black"
        >
          Our approach is straightforward— <br/>
          prioritizing functionality, speed,<br/> and clarity for solutions.
        </motion.h1>
      </div>

    </div>
  );
};

export default PostHero;