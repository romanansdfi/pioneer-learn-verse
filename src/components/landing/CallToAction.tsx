
import React from 'react';
import ButtonCustom from '../ui/button-custom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  "Access to 1,000+ courses",
  "Interactive learning environment",
  "Certificate of completion",
  "Expert instructors",
  "Career support",
  "Community access"
];

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pioneer-deep-blue to-pioneer-deep-blue/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-200 max-w-lg">
              Join thousands of students already learning with PioneerLearn. Get unlimited access to all courses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-pioneer-green" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <ButtonCustom 
                size="lg" 
                variant="accent" 
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Sign Up Now
              </ButtonCustom>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-pioneer-deep-blue mb-6">Start Learning Today</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue focus:border-transparent text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue focus:border-transparent text-gray-900"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue focus:border-transparent text-gray-900"
                  >
                    <option value="">Select your interest</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <ButtonCustom 
                  type="submit" 
                  variant="primary" 
                  fullWidth
                  size="lg"
                >
                  Get Started
                </ButtonCustom>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
