import PortfolioImage from '../assets/Logo.png';
import Close_icon from '../assets/close_icon.svg';
import Menu_icon from '../assets/menu-icon.svg';
import { useState } from 'react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex justify-between sm:justify-around items-center px-0 sm:py-7 max-sm:px-3 max-sm:py-3 
     bg-[#F5F5F5] text-black relative ">

      <a href="#">
        <img src={PortfolioImage} alt="Logo" className="w-24 rounded-lg mr-60 " />
      </a>

      <div
        className={`
          flex items-center gap-30 max-sm:gap-6 sm:text-lg font-medium
          max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen
          max-sm:bg-[#F5F5F5] max-sm:text-black max-sm:text-lg
          max-sm:flex-col max-sm:justify-center
          max-sm:transition-all max-sm:duration-300 max-sm: z-50
          
          ${sidebar ? 'max-sm:w-60' : 'max-sm:w-0 overflow-hidden'}`}>
        <img
          src={Close_icon}
          alt="close"
          className="w-6 top-5 right-5 sm:hidden cursor-pointer  "
          onClick={() => setSidebar(false)}
        />

        <a href="#about" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Home
        </a>
        <a href="#hero" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Pages
        </a>
        <a href="#portfolio" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Portfolio
        </a>
        <a href="#contact" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition">
          Blog
        </a>
        <a href="#" onClick={() => setSidebar(false)} className="hover:text-[#4A90E2] transition mas-sm:hidden pl-7">
          info@floka.com
        </a>
      </div>

      {/* Menu Icon */}
      <img
        src={Menu_icon}
        alt="menu"
        onClick={() => setSidebar(true)}
        className={` justify-start w-8 sm:hidden cursor-pointer ${sidebar ? 'hidden' : 'block'}`}
      />
    </nav>
  );
};

export default Navbar;