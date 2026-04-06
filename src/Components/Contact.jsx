import React from "react";
import Contact1 from '../assets/contact.jpg'
const Contact = () => {
  const imageUrl = "https://source.unsplash.com/600x400/?furniture";

  const socialIcons = [
    {
      href: "https://facebook.com",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://twitter.com",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
      alt: "Twitter",
    },
    {
      href: "https://linkedin.com",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://behance.net",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg",
      alt: "Behance",
    },
  ];

  return (
    <div id="contact" className="bg-black text-white px-6 md:px-16 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={Contact1}
            alt="Floka"
            className="rounded-2xl w-full object-cover"
          />

          {/* Overlay Logo Block */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-40 h-40 md:w-52 md:h-52 flex items-center justify-center text-black text-6xl font-bold rounded-md">
              F
            </div>
          </div>

          {/* Envato Badge */}
          <div className="absolute bottom-4 left-4 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
            <span>Buy on</span>
            <span className="text-green-400 font-semibold">envato</span>
          </div>
        </div>

        {/* CENTER MENU */}
        <div className="flex flex-col gap-6 text-3xl md:text-4xl font-light">
          <a href="#" className="hover:opacity-70">About Us</a>
          <a href="#" className="hover:opacity-70">Journal</a>
          <a href="#" className="hover:opacity-70">Faq</a>
          <a href="#" className="hover:opacity-70">Get In Touch</a>
          <a href="#" className="hover:opacity-70 blur-sm hover:blur-0 transition">
            Careers
          </a>
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-6 text-zinc-300">
          <p className="leading-relaxed max-w-sm">
            At Floka, we believe furniture should be more than just
            functional—it should tell your story. With a focus on timeless
            design, sustainable materials, and expert craftsmanship, we create
            pieces that feel personal.
          </p>

          <div className="space-y-2 text-white">
            <p>info@floka-design.com</p>
            <p>+123 (456 789 00)</p>
            <p className="text-zinc-400">12/A, Booston Tower, NYC</p>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 pt-4">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-zinc-700 rounded-full hover:bg-white hover:text-black transition"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-5 h-5 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BIG BACKGROUND TEXT */}
      <div className="mt-16 text-[80px] md:text-[140px] font-bold text-white/5 select-none leading-none">
        Floka
      </div>   
    </div>



  );
};

export default Contact;