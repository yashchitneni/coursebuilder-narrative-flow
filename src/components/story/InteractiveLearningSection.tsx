
import React from 'react';

interface InteractiveLearningSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const InteractiveLearningSection: React.FC<InteractiveLearningSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={el => sectionsRef.current[4] = el}
      className="relative h-screen bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden"
    >
      <div className="h-full flex items-center">
        <div className="w-full">
          <div className="text-center mb-12 px-8">
            <h2 className="text-5xl font-bold text-white mb-4">Deeply Interactive Learning</h2>
            <p className="text-xl text-gray-300">Innovative quiz types that make learning engaging</p>
          </div>
          
          <div className="flex overflow-x-auto gap-8 px-8 pb-8 scrollbar-hide">
            {/* Hotspot Questions */}
            <div className="flex-shrink-0 w-80 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hotspot Questions</h3>
              <p className="text-gray-300">Click on specific areas of images or videos to answer questions.</p>
            </div>
            
            {/* Matching Questions */}
            <div className="flex-shrink-0 w-80 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-2">
                    <div className="h-8 bg-blue-500/50 rounded"></div>
                    <div className="h-8 bg-green-500/50 rounded"></div>
                    <div className="h-8 bg-purple-500/50 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-purple-500/50 rounded"></div>
                    <div className="h-8 bg-blue-500/50 rounded"></div>
                    <div className="h-8 bg-green-500/50 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Matching Questions</h3>
              <p className="text-gray-300">Drag and drop to connect related concepts and terms.</p>
            </div>
            
            {/* Sequencing Questions */}
            <div className="flex-shrink-0 w-80 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 p-4">
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-3 h-8 bg-gray-700 rounded px-3">
                      <span className="w-6 h-6 bg-yellow-500 rounded text-black text-sm flex items-center justify-center font-bold">{num}</span>
                      <div className="flex-1 h-2 bg-gray-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sequencing Questions</h3>
              <p className="text-gray-300">Arrange items in the correct order to test understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLearningSection;
