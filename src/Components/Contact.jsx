import React from 'react';

const Contact = () => {
  const footerLinks = [
    {
      title: "Services",
      links: ["Work", "About", "Culture", "Meet The Risers"],
    },
    {
      title: "Testimonials",
      links: ["Blog & Resources", "Webinars", "Careers"],
    },
    {
      title: "Sheffield",
      links: ["Manchester", "London", "New York", "Contact"],
    },
  ];

  const socialIcons = ['f', '𝕏', 'in', 'yt', 'tk', 'ig'];

  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-semibold mb-6 tracking-tight">Stay updated with Rise news</h3>
            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#222] rounded-full py-4 px-6 text-gray-300 focus:outline-none border border-transparent focus:border-gray-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#b2f2e1] text-black rounded-full px-4 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-lg font-bold">↗</span>
              </button>
            </div>
            
            <div className="flex gap-2 mt-8">
              {socialIcons.map((icon, idx) => (
                <div key={idx} className="w-10 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b2f2e1] transition-colors">
                  <span className="text-black text-xs font-bold">{icon} ↗</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx} className={idx !== 0 ? "border-l border-gray-800 pl-8" : ""}>
                <h4 className="text-xl font-bold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link}`} className="text-xl font-bold hover:text-[#b2f2e1] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-900 pt-10 mb-10">
          <h1 className="text-[12vw] font-bold leading-none tracking-tighter uppercase flex items-center justify-between">
            Rise at Seven <span className="text-4xl border-2 border-white rounded-full w-16 h-16 flex items-center justify-center">®</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-4 uppercase tracking-widest">
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white">Terms & conditions</a>
          </div>
          <div>
            Website MadeByShape
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;