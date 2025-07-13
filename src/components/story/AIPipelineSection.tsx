
import React from 'react';

interface AIPipelineSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const AIPipelineSection: React.FC<AIPipelineSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={el => sectionsRef.current[3] = el}
      className="relative h-screen flex items-center px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-4">More Than a Script</h2>
        <p className="text-2xl text-gray-300 mb-16">Our Multi-Stage AI Pipeline</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Transcript-Aware Planning</h3>
            <p className="text-gray-300">Deep analysis of video content to understand structure and learning objectives.</p>
          </div>
          
          <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Specialized Question Generation</h3>
            <p className="text-gray-300">Context-aware quiz creation with multiple question types and difficulty levels.</p>
          </div>
          
          <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Quality Verification</h3>
            <p className="text-gray-300">Automated quality assurance ensuring accuracy and educational value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPipelineSection;
