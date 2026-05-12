import Hero_Card from '../assets/hero_card.jpg';
import bgImage from '../assets/home-1.JPG';
import Navbar from './Navbar';
export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="bg"
      />
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-6">
          <div className='flex gap-5'>
          <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=590d094eb1537f802651cf997f550bbb" alt="hero-logo"
              className='w-12 mb-2'/>
           <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=e302afbd58f1be1cd9a3b75a2d8969fe" alt="hero-logo"
              className='w-10 mb-2'/>
            <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8ab3593005a19fec2b91467ddd4869ea" alt="hero-logo"
              className='w-18 mb-2'/>   
          </div>
           <div className="mb-8">
            <p className="text-white text-sm md:text-lg font-semibold uppercase tracking-wide">
              #1 Most Recommended
            </p>
            <p className="text-white text-sm md:text-lg font-semibold uppercase">
              Content Marketing Agency
            </p>
            <div className="flex items-center gap-6 justify-center mt-5 flex-wrap opacity-80">
              <span className="text-white text-xs md:text-sm">
                GLOBAL SEARCH AWARDS
              </span>
              <span className="text-white text-xs md:text-sm">
                The Drum
              </span>
              <span className="text-white text-xs md:text-sm">
                UK Social Media Awards
              </span>
              <span className="text-white text-xs md:text-sm">
                Content Awards
              </span>
            </div>
          </div>

          <div className="leading-none">
            <h1 className="text-white font-bold text-[70px] sm:text-[100px] md:text-[150px] lg:text-[120px]">
              We Create
            </h1>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <h1 className="text-white font-bold text-[70px] sm:text-[100px] md:text-[150px] lg:text-[120px]">
                Category
              </h1>
              <h1 className="text-white font-bold text-[70px] sm:text-[100px] md:text-[150px] lg:text-[120px]">
                Leaders
              </h1>
            </div>
          </div>
          <p className="text-white/90 mt-8 text-xl md:text-4xl font-medium">
            on every searchable platform
          </p>
        </div>
      </div>
    </div>
  );
}