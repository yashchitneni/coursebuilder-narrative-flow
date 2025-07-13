
import React from 'react';
import { Github, ExternalLink, Linkedin, Cpu, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface VisionAndTeamSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const VisionAndTeamSection: React.FC<VisionAndTeamSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={el => sectionsRef.current[5] = el}
      className="relative min-h-screen py-16 px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Vision */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-8">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">LMS Integration</h3>
                <p className="text-gray-300 text-sm">Canvas, Blackboard, Moodle</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Advanced AI</h3>
                <p className="text-gray-300 text-sm">Personalized Learning Paths</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-300 text-sm">Learning Progress Insights</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Alex Chen", role: "AI Engineer & Product Vision", avatar: "👨‍💻" },
              { name: "Sarah Kim", role: "Full-Stack Developer", avatar: "👩‍💻" },
              { name: "Marcus Johnson", role: "UX/UI Designer", avatar: "👨‍🎨" }
            ].map((member, index) => (
              <div key={index} className="group">
                <Card className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-300 mb-4">{member.role}</p>
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* The Ask */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We are a team of AI Engineers passionate about building intelligent, user-centric products. 
              We are seeking opportunities to bring our skills in product vision, AI engineering, and 
              full-stack development to a forward-thinking company.
            </p>
          </div>
          
          {/* Final CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Linkedin className="w-5 h-5 mr-2" />
              Contact Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndTeamSection;
