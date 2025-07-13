
import React from 'react';
import { Brain } from 'lucide-react';

interface MeetCurioSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  scrollY: number;
}

const MeetCurioSection: React.FC<MeetCurioSectionProps> = ({ sectionsRef, scrollY }) => {
  return (
    <section 
      ref={el => sectionsRef.current[1] = el}
      className="relative h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden"
    >
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/30f9ef9e-c142-4b13-af37-e23958f44a05.png')`
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Effect */}
      <div 
        className="absolute inset-0 opacity-20 z-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
      </div>

      {/* Curio Character */}
      <div className="flex-1 flex justify-center items-center relative z-30">
        <div className="relative">
          {/* Main Character Circle */}
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
            <Brain className="w-40 h-40 text-white" />
            
            {/* Animated elements around the character */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-3xl">🤖</span>
            </div>
            
            {/* Floating knowledge symbols */}
            <div className="absolute -left-8 top-16 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-float">
              <span className="text-xl">📚</span>
            </div>
            
            <div className="absolute -right-4 bottom-20 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-lg">✨</span>
            </div>
          </div>
          
          {/* "Meet Curio" text above */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <h2 className="text-3xl font-bold text-white text-center bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              Meet Curio
            </h2>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className="flex-1 max-w-xl relative z-30">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-xl text-gray-200 leading-relaxed">
            "I'm your personalized AI librarian. I turn any passive video into an active learning experience by building a structured course with interactive quizzes—all in seconds. Here's how it works."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetCurioSection;
