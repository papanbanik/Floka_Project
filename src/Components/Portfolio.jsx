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
    <div className="flex sm:flex-row gap-4 mt-10  ">
      
      <div className="w-full sm:w-1/2 ">
        <a href="https://floka.casethemes.net/portfolio/web3-crypto/" target="_blank" rel="noopener noreferrer">
          <img
            src={PCar1}
            alt="Card 1"
            className="w-full p-2  h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

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