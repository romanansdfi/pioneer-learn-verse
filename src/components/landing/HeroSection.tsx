
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pioneer-deep-blue to-pioneer-deep-blue/80 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              The Next Generation of Online Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Discover a new way to learn with interactive courses, expert instructors, and cutting-edge tools designed for the modern learner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonCustom size="lg" variant="accent" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Explore Courses
              </ButtonCustom>
              <ButtonCustom size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                How It Works
              </ButtonCustom>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-300">Trusted by:</span>
              <div className="flex space-x-6">
                <div className="text-white/80 font-bold">University of Tech</div>
                <div className="text-white/80 font-bold">LearnCorp</div>
                <div className="text-white/80 font-bold">EduSystems</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-scale-in">
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-pioneer-light-blue to-pioneer-light-blue/60 rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col p-6 bg-black/30">
                  <div className="bg-white/10 rounded-md p-3 mb-4 w-full">
                    <div className="h-6 w-24 bg-white/30 rounded-md"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-md p-4">
                      <div className="h-8 w-8 bg-pioneer-green rounded-full mb-2"></div>
                      <div className="h-4 w-20 bg-white/30 rounded-md mb-2"></div>
                      <div className="h-3 w-full bg-white/30 rounded-md"></div>
                    </div>
                    <div className="bg-white/10 rounded-md p-4">
                      <div className="h-8 w-8 bg-pioneer-light-blue rounded-full mb-2"></div>
                      <div className="h-4 w-24 bg-white/30 rounded-md mb-2"></div>
                      <div className="h-3 w-full bg-white/30 rounded-md"></div>
                    </div>
                    <div className="bg-white/10 rounded-md p-4">
                      <div className="h-8 w-8 bg-pioneer-deep-blue rounded-full mb-2"></div>
                      <div className="h-4 w-16 bg-white/30 rounded-md mb-2"></div>
                      <div className="h-3 w-full bg-white/30 rounded-md"></div>
                    </div>
                    <div className="bg-white/10 rounded-md p-4">
                      <div className="h-8 w-8 bg-white/40 rounded-full mb-2"></div>
                      <div className="h-4 w-20 bg-white/30 rounded-md mb-2"></div>
                      <div className="h-3 w-full bg-white/30 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-pioneer-green rounded-full flex items-center justify-center">
                <div className="text-white font-bold">
                  <div className="text-xl">New</div>
                  <div className="text-xs">courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
