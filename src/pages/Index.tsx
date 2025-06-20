
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/landing/HeroSection';
import TopperStudents from '../components/landing/TopperStudents';
import Testimonials from '../components/landing/Testimonials';
import CallToAction from '../components/landing/CallToAction';
import ExploreSchoolButton from '../components/school/ExploreSchoolButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Explore School Info Button Section */}
        <div className="bg-white py-10 px-4 flex justify-center">
          <ExploreSchoolButton />
        </div>
        
        <TopperStudents />
        <Testimonials />
        <CallToAction />
      </main>
      
      <footer className="bg-pioneer-deep-blue text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pioneer-light-blue to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pioneer-green to-transparent rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary bg-gradient-to-r from-white to-pioneer-light-blue bg-clip-text text-transparent">
                  PioneerLearn
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The next generation learning platform for modern education.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=100063762721637" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="transform transition-all duration-300 hover:translate-y-2">
                <h3 className="text-lg font-semibold mb-6 text-pioneer-light-blue border-b-2 border-pioneer-green pb-2 inline-block">
                  Subjects
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Science
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Math
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Nepali
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="transform transition-all duration-300 hover:translate-y-2">
                <h3 className="text-lg font-semibold mb-6 text-pioneer-light-blue border-b-2 border-pioneer-green pb-2 inline-block">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Partners
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="transform transition-all duration-300 hover:translate-y-2">
                <h3 className="text-lg font-semibold mb-6 text-pioneer-light-blue border-b-2 border-pioneer-green pb-2 inline-block">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group-hover:animate-fade-in">
                      <span className="w-0 h-0.5 bg-pioneer-green transition-all duration-300 hover:w-4 mr-2"></span>
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pioneer-light-blue to-transparent"></div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm animate-fade-in">
                © {new Date().getFullYear()} PioneerLearn. All rights reserved.
              </p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <Link to="/terms-of-service" className="text-gray-400 hover:text-pioneer-light-blue text-sm transition-all duration-300 hover:scale-105 relative group">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pioneer-light-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-pioneer-light-blue text-sm transition-all duration-300 hover:scale-105 relative group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pioneer-light-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="#" className="text-gray-400 hover:text-pioneer-light-blue text-sm transition-all duration-300 hover:scale-105 relative group">
                  Accessibility
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pioneer-light-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
