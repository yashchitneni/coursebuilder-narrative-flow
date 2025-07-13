
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface InteractiveLearningSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const InteractiveLearningSection: React.FC<InteractiveLearningSectionProps> = ({ sectionsRef }) => {
  const questionTypes = [
    {
      id: 'hotspot',
      headline: 'Go Beyond Text.',
      body: 'Directly test visual knowledge. With Hotspot Questions, users identify key elements right on the video frame, proving they didn\'t just listen—they saw.',
      demo: (
        <div className="aspect-video bg-gray-800 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-400 rounded-full animate-pulse" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded p-2">
            <div className="text-white text-sm">Click on the highlighted element</div>
          </div>
        </div>
      )
    },
    {
      id: 'matching',
      headline: 'Understand Key Relationships.',
      body: 'Move beyond simple facts. Our Matching Questions ensure learners grasp how core concepts connect and relate to each other, reinforcing deeper understanding.',
      demo: (
        <div className="aspect-video bg-gray-800 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-2">
              <div className="h-8 bg-blue-500/50 rounded flex items-center px-3 text-white text-sm">Concept A</div>
              <div className="h-8 bg-green-500/50 rounded flex items-center px-3 text-white text-sm">Concept B</div>
              <div className="h-8 bg-purple-500/50 rounded flex items-center px-3 text-white text-sm">Concept C</div>
            </div>
            <div className="space-y-2">
              <div className="h-8 bg-purple-500/50 rounded flex items-center px-3 text-white text-sm">Definition 3</div>
              <div className="h-8 bg-blue-500/50 rounded flex items-center px-3 text-white text-sm">Definition 1</div>
              <div className="h-8 bg-green-500/50 rounded flex items-center px-3 text-white text-sm">Definition 2</div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded p-2">
            <div className="text-white text-sm">Drag to match concepts with definitions</div>
          </div>
        </div>
      )
    },
    {
      id: 'sequencing',
      headline: 'Master Processes and Flows.',
      body: 'For procedural knowledge, our Sequencing Questions challenge users to reconstruct workflows, proving they have mastered the entire process from start to finish.',
      demo: (
        <div className="aspect-video bg-gray-800 rounded-lg p-4">
          <div className="space-y-3">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center gap-3 h-8 bg-gray-700 rounded px-3">
                <span className="w-6 h-6 bg-yellow-500 rounded text-black text-sm flex items-center justify-center font-bold">{num}</span>
                <div className="flex-1 h-2 bg-gray-600 rounded"></div>
                <div className="text-white text-xs">Step {num}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded p-2">
            <div className="text-white text-sm">Arrange steps in correct order</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      ref={el => sectionsRef.current[4] = el}
      className="relative h-screen bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden"
    >
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Deeply Interactive Learning</h2>
            <p className="text-xl text-gray-300">Innovative quiz types that make learning engaging</p>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {questionTypes.map((type) => (
                <CarouselItem key={type.id}>
                  <div className="flex items-center gap-12 h-96">
                    {/* Left side - Demo with spotlight effect */}
                    <div className="flex-1 relative">
                      <div className="relative">
                        {/* Spotlight effect */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          {type.demo}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Modal content */}
                    <div className="flex-1 max-w-lg">
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-3xl font-bold text-white mb-4">{type.headline}</h3>
                        <p className="text-lg text-gray-200 leading-relaxed">{type.body}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLearningSection;
