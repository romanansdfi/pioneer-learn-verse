
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-pioneer-deep-blue mb-4">About Pioneer Academy</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering students to reach their full potential through innovation, excellence, and personalized education.
            </p>
          </div>

          {/* School Vision & Mission */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Vision & Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-pioneer-deep-blue">Vision</h3>
                <p className="text-gray-700">
                  To be a premier educational institution that nurtures creative thinkers, innovative problem solvers, and compassionate leaders who contribute positively to society.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-pioneer-deep-blue">Mission</h3>
                <p className="text-gray-700">
                  We are committed to providing a holistic education that balances academic excellence with character development. Through personalized learning approaches, cutting-edge technology, and a supportive community, we aim to inspire lifelong curiosity and empower students to shape their own future.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* School Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Our Curriculum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Pioneer Academy follows a comprehensive curriculum that integrates national educational standards with innovative teaching methods. Our approach focuses on:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Project-based learning that encourages practical application of concepts</li>
                  <li>STEAM (Science, Technology, Engineering, Arts, and Mathematics) integration</li>
                  <li>Critical thinking and problem-solving skills development</li>
                  <li>Character education and social-emotional learning</li>
                  <li>Global awareness and cultural competence</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Our Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Our campus is designed to provide a safe, inspiring environment for learning and growth:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Modern, technology-equipped classrooms</li>
                  <li>State-of-the-art science and computer laboratories</li>
                  <li>Well-stocked library with digital resources</li>
                  <li>Sports facilities including indoor and outdoor play areas</li>
                  <li>Arts and music studios</li>
                  <li>Career counseling center</li>
                  <li>Medical infirmary</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Faculty Information */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 text-center">
                Our dedicated team of educators consists of highly qualified professionals who are passionate about teaching and committed to nurturing each student's potential.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Sample faculty stats */}
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-pioneer-deep-blue">45+</p>
                  <p className="text-gray-600">Experienced Teachers</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-pioneer-deep-blue">85%</p>
                  <p className="text-gray-600">With Advanced Degrees</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-pioneer-deep-blue">1:15</p>
                  <p className="text-gray-600">Teacher-Student Ratio</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Founded in 1995, Pioneer Academy began with a vision to create an educational institution that would prepare students not just for exams, but for life. Starting with just 50 students and 5 teachers, we have grown to become a leading school in the region.
              </p>
              <p className="text-gray-700">
                Over the years, we have continuously evolved our teaching methodologies and expanded our facilities to provide the best possible education. Our alumni have gone on to excel in various fields, including medicine, engineering, arts, business, and public service.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pioneer-deep-blue">1995</p>
                  <p className="text-sm text-gray-600">Year Founded</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pioneer-deep-blue">5000+</p>
                  <p className="text-sm text-gray-600">Alumni Network</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pioneer-deep-blue">25+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pioneer-deep-blue">15</p>
                  <p className="text-sm text-gray-600">National Awards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-pioneer-deep-blue text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pioneer Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
