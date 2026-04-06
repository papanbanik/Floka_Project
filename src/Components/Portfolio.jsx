import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import PCar1 from '../assets/portfolio-car.webp';
import PCar2 from '../assets/portfolio-eyes.jpg';
import Cutting from '../assets/cutting.webp'
import Happy_USER from '../assets/happy-user.PNG';
const Portfolio = () => {
  return (
   <div id="portfolio" >
    <div className="mt-10 text-lg pl-5">PORTFOLIO</div>

    <div>
      <div className="flex-1 mt-12 justify-end ">
        <motion.h1
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "50%" }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pt-20 font-semibold text-4xl leading-snug text-black"
        >
          Strategy to build powerful<br/> digital solutions.

        </motion.h1>
      </div>

    </div>
    

    <div className="flex sm:flex-row gap-4 mt-10  ">
      
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 ">
        <a href="https://floka.casethemes.net/portfolio/web3-crypto/" target="_blank" rel="noopener noreferrer">
          <img
            src={PCar1}
            alt="Card 1"
            className="w-full p-2  h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2">
        <a href="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg" target="_blank" rel="noopener noreferrer">
          <img
            src={PCar2}
            alt="Card 2"
            className="w-full h-64 p-2  object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

    </div>

    <div className="w-full mt-4">
        <a href="https://floka.casethemes.net/portfolio/low-code-development/"/>
        <img src={Cutting}
        className="p-2 w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"/>

    </div>


    </div>
  );
};

export default Portfolio;