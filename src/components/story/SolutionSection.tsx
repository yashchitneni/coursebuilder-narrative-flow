
import React from 'react';
import { CheckCircle, Zap, Brain, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={el => sectionsRef.current[2] = el}
      className="relative h-screen flex items-center px-8 lg:px-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Features */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-white mb-8">The Solution</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Full Transcript & Curriculum</h3>
                <p className="text-gray-300">AI generates a complete, timestamped transcript and a structured lesson plan.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Assessments</h3>
                <p className="text-gray-300">Context-aware quizzes appear at the perfect moment to reinforce learning.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Brain className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Adaptive Learning Path</h3>
                <p className="text-gray-300">Personalized progression based on comprehension and engagement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Demo */}
        <div className="relative">
          <Card className="bg-black/40 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Play className="w-6 h-6 text-white" />
                  <span className="text-white text-sm">Course in Progress</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/3" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>12:34</span>
                    <span>45:67</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Introduction to Machine Learning</h4>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Quiz Available</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Progress: 33%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
