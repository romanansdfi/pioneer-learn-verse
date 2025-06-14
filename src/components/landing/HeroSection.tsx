
import React from 'react';
import { ArrowRight, Play, Star, Users, BookOpen, Award } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-bounce delay-300 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-bounce delay-700 opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                #1 Learning Platform
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Anything</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Anywhere</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
                Join thousands of learners advancing their careers with our cutting-edge courses. 
                Interactive learning meets real-world application.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-fade-in">
                <div className="flex items-center text-white/80">
                  <Users className="w-5 h-5 mr-2 text-yellow-300" />
                  <span className="font-semibold">50K+ Students</span>
                </div>
                <div className="flex items-center text-white/80">
                  <BookOpen className="w-5 h-5 mr-2 text-green-300" />
                  <span className="font-semibold">200+ Courses</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Award className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <ButtonCustom 
                  size="lg" 
                  className="bg-white text-pioneer-deep-blue hover:bg-white/90 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Learning Now
                </ButtonCustom>
                
                <ButtonCustom 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg font-semibold px-8 py-4"
                  leftIcon={<Play className="w-5 h-5" />}
                >
                  Watch Demo
                </ButtonCustom>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative lg:ml-8">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 animate-scale-in">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Learning</h3>
                    <p className="text-white/80">Experience hands-on learning with real-time feedback</p>
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>Web Development</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[85%] animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>Data Science</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[72%] animate-pulse delay-300"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>Design</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-2 rounded-full w-[90%] animate-pulse delay-700"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 shadow-xl animate-bounce-slow">
                  <div className="flex items-center text-white">
                    <Award className="w-6 h-6 mr-2" />
                    <div>
                      <div className="font-bold">Certificate</div>
                      <div className="text-sm opacity-80">Earned</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-4 shadow-xl animate-bounce-slow delay-1000">
                  <div className="flex items-center text-white">
                    <Users className="w-6 h-6 mr-2" />
                    <div>
                      <div className="font-bold">Live Session</div>
                      <div className="text-sm opacity-80">Join Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
