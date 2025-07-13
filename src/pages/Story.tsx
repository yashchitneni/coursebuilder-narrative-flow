
import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/story/HeroSection';
import MeetCurioSection from '@/components/story/MeetCurioSection';
import SolutionSection from '@/components/story/SolutionSection';
import AIPipelineSection from '@/components/story/AIPipelineSection';
import InteractiveLearningSection from '@/components/story/InteractiveLearningSection';
import VisionAndTeamSection from '@/components/story/VisionAndTeamSection';
import NavigationDots from '@/components/story/NavigationDots';

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
      <NavigationDots 
        currentSection={currentSection} 
        onScrollToSection={scrollToSection} 
      />
      
      <HeroSection 
        sectionsRef={sectionsRef} 
        onScrollToSection={scrollToSection} 
      />
      
      <MeetCurioSection 
        sectionsRef={sectionsRef} 
        scrollY={scrollY} 
      />
      
      <SolutionSection 
        sectionsRef={sectionsRef} 
      />
      
      <AIPipelineSection 
        sectionsRef={sectionsRef} 
      />
      
      <InteractiveLearningSection 
        sectionsRef={sectionsRef} 
      />
      
      <VisionAndTeamSection 
        sectionsRef={sectionsRef} 
      />
    </div>
  );
};

export default Story;
