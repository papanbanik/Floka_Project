import React from 'react';

const PostHero = () => {
  return (
    <section className="bg-[#f0f0f0] min-h-[400px] flex items-center px-8 py-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Sub-headline */}
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-medium leading-tight text-gray-900 tracking-tight">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
          </h2>
        </div>

        {/* Right Column: Main Heading & Buttons */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-semibold text-gray-900 leading-[0.9] tracking-tighter">
              Driving Demand & <br />
              <span>Discovery</span>
              {/* Integrated Image Asset */}
              <div className="inline-block align-middle ml-4">
                <img 
                  src="image_fc3e15.png" 
                  alt="Marketing professional" 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-sm"
                />
              </div>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-sm">
              Our Story <span className="text-xl">↗</span>
            </button>
            <button className="text-black font-medium flex items-center gap-2 hover:underline transition-all">
              Our Services <span className="text-xl">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PostHero;