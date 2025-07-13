
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, ExternalLink, Linkedin, Play, CheckCircle, Brain, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Story = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionsRef.current.findIndex(ref => ref === entry.target);
          if (sectionIndex !== -1) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: '-10% 0px -10% 0px'
    });

    sectionsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? 'bg-white border-white scale-125'
                : 'bg-transparent border-white/50 hover:border-white'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section 1: The Hook - Above the Fold */}
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
            onClick={() => scrollToSection(1)}
          />
        </div>
      </section>

      {/* Section 2: The Problem & The Guide */}
      <section 
        ref={el => sectionsRef.current[1] = el}
        className="relative h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
      >
        {/* Library Background Effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
        </div>

        {/* Curio Character */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <Brain className="w-32 h-32 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="flex-1 max-w-xl">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Curio</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              "The world's best teachers are on YouTube. But the content is chaotic—a library with no librarian, a classroom with no curriculum."
            </p>
            <p className="text-lg text-gray-300">
              I'm here to bring order to the chaos, transforming scattered video content into structured, interactive learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution in Action */}
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

      {/* Section 4: The AI Engineering Pipeline */}
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

      {/* Section 5: Interactive Learning Features */}
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

      {/* Section 6: Vision and Team */}
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
    </div>
  );
};

export default Story;
