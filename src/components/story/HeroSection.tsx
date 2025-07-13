
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  onScrollToSection: (index: number) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ sectionsRef, onScrollToSection }) => {
  return (
    <section 
      ref={el => sectionsRef.current[0] = el}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/nuMz-Y0Q7sM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&playlist=nuMz-Y0Q7sM"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The world's best teachers are on YouTube.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-medium">
            But the classroom is broken.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-white cursor-pointer hover:text-blue-300 transition-colors"
          onClick={() => onScrollToSection(1)}
        />
      </div>
    </section>
  );
};

export default HeroSection;
