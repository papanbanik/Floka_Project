import PortfolioImage from '../assets/Logo.png';
import Close_icon from '../assets/close_icon.svg';
import Menu_icon from '../assets/menu-icon.svg';
import { useState } from 'react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const menuItems = [
    "Services +",
    "Industries +",
    "International +",
    "About +",
    "Work",
    "Careers",
    "Webinar"
  ];

  return (
    <nav className="bg-[] px-6 md:px-12 py-5 flex items-center justify-between relative">
      <a href="#" className="text-3xl text-white font-semibold" style={{ fontFamily: 'sans-serif'}}> 
         Rise at Seven
      </a>

      <div
        className={`
          flex items-center gap-5 text-[17px] font-medium
          max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen
          max-sm:bg-black max-sm:flex-col max-sm:justify-center
          max-sm:transition-all max-sm:duration-300 max-sm:z-50
          ${sidebar ? 'max-sm:w-60' : 'max-sm:w-0 overflow-hidden'}
        `}
      >
        <img
          src={Close_icon}
          alt="close"
          className="w-6 absolute top-5 right-5 sm:hidden cursor-pointer"
          onClick={() => setSidebar(false)}
        />

        {menuItems.map((item, index) => (
          <div key={index} className="relative group inline-block">
            <a
              href="#"
              onClick={() => setSidebar(false)}
              className="cursor-pointer font-bold text-white max-sm:font-extrabold hover:bg-white hover:text-black hover:rounded-full hover:px-2 text-lg transition">
              {item}
            </a>
            <div className="absolute left-32 -translate-x-1/2 top-14 hidden group-hover:flex bg-[#EFEEEC] rounded-[30px] shadow-lg p-8 w-[900px] justify-between z-50 max-sm:hidden">
              <div className="flex gap-20">
                <div>
                  <p className="text-gray-500 text-lg mb-6">{item.replace("+", "")}</p>
                  <ul className="space-y-3 text-3xl font-medium">
                    <li>Search & Growth Strategy</li>
                    <li>Onsite SEO</li>
                    <li>Content Experience</li>
                    <li>B2B Marketing</li>
                  </ul>
                </div>

                <div className="mt-14">
                  <ul className="space-y-3 text-3xl font-medium">
                    <li>Digital PR</li>
                    <li>Social Media & Campaigns</li>
                    <li>Data & Insights</li>
                    <li>Social SEO/Search</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt=""
                  className="w-80 h-96 object-cover rounded-[25px]"
                />

                <button className="absolute bottom-4 left-4 bg-black text-white px-8 py-4 rounded-full text-xl">
                  View All ↗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hidden sm:block bg-white text-black px-8 py-4 rounded-full hover:rounded-md text-lg font-medium">
        Get In Touch ↗
      </button>

      <img
        src={Menu_icon}
        alt="menu"
        onClick={() => setSidebar(true)}
        className={`w-8 bg-white rounded  sm:hidden cursor-pointer ${sidebar ? 'hidden' : 'block'}`}
      />
    </nav>
  );
};

export default Navbar;