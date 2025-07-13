
import React from 'react';

interface NavigationDotsProps {
  currentSection: number;
  onScrollToSection: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ currentSection, onScrollToSection }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          onClick={() => onScrollToSection(index)}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            currentSection === index
              ? 'bg-white border-white scale-125'
              : 'bg-transparent border-white/50 hover:border-white'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
