import Hero_Card from '../assets/hero_card.jpg';
import video from '../assets/home-1-video.mp4';
export default function Hero() {
  return (
  
    <div  className="relative min-h-screen items-center  overflow-hidden">
      {/* Background Video */}
     <video
      autoPlay
      loop
      muted
      playsInline
      className='absolute inset-09 w-full h-full object-cover'>
      <source 
      src={video}
      type='video/mp4'
      />
      </video>  

    <div className='sm:mt-30 flex justify-center max-sm:flex-col '>
      <div className="mt-20 relative z-10 w-full max-w-6xl px-5 ">

        <h1 className="ml-20 leading-20 max-sm:leading-15 text-9xl max-sm:text-6xl font-bold mb-10 text-white">
          Floka <br />
          <span className="text-gray-300 ml-30 text-7xl max-sm:text-5xl">
            Studio
          </span>
        </h1>
       </div>
        {/* CARD */}
        <div className="z-10 mr-30 flex items-center gap-6 bg-[#e9e9e9] rounded-3xl p-6 w-[700px] shadow-xl">

          <div className="w-40 h-40   rounded-2xl overflow-hidden">
            <img
              src={Hero_Card}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-1">
            <p className="text-gray-500 text-sm tracking-widest mb-2">
              HEAD OF IDEA
            </p>

            <h2 className="text-2xl font-semibold text-black mb-6">
              Almond D. Nelsi
            </h2>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-xl 
                              group-hover:rotate-45 transition">
                +
              </div>

              <p className="text-black font-medium tracking-wide">
                LET’S TALK
              </p>
            </div>
          </div>
        </div>
        
      </div>
      
      <div  className='flex-col ml-5 sm:ml-185 mt-10 '>
          <p>
            No cookie-cutter websites. No fluff.
          </p>
          <p className='text-gray-500'>Just real tools and smart strategies to grow your <br/> business and elevate your brand.
         </p>
       </div>


    </div>
     
  );
}