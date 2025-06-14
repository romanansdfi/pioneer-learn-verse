
import React from 'react';
import { ArrowRight, Star, Users, Award, BookOpen } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce delay-500 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Join 50,000+ Happy Learners
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Learning Journey?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              Transform your career with our expert-led courses. Get lifetime access, 
              personalized mentorship, and industry-recognized certificates.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-white/90">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span>200+ Expert Courses</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span>Live Mentorship</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span>Industry Certificates</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span>Lifetime Access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ButtonCustom 
                size="lg" 
                className="bg-white text-pioneer-deep-blue hover:bg-white/90 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold px-8 py-4"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Today
              </ButtonCustom>
              
              <ButtonCustom 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg font-semibold px-8 py-4"
              >
                Learn More
              </ButtonCustom>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">Trusted by professionals at:</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                <div className="text-white font-bold text-lg">Google</div>
                <div className="text-white font-bold text-lg">Microsoft</div>
                <div className="text-white font-bold text-lg">Amazon</div>
                <div className="text-white font-bold text-lg">Apple</div>
                <div className="text-white font-bold text-lg">Meta</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="lg:ml-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stats Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/80">Active Students</div>
                <div className="text-green-300 text-sm mt-2">↗ +12% this month</div>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 delay-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-white/80">Expert Courses</div>
                <div className="text-blue-300 text-sm mt-2">New content weekly</div>
              </div>

              {/* Stats Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <div className="text-white/80">Average Rating</div>
                <div className="text-yellow-300 text-sm mt-2">★★★★★ Rated</div>
              </div>

              {/* Stats Card 4 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 delay-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
                <div className="text-pink-300 text-sm mt-2">Career advancement</div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <p className="text-white/90 italic mb-2">
                    "PioneerLearn transformed my career completely. The quality of courses and mentorship is unmatched!"
                  </p>
                  <div className="text-white/70 text-sm">
                    <span className="font-semibold">John Doe</span> - Software Engineer at Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
