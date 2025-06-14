
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Star, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/navbar/Navbar';

const About: React.FC = () => {
  const leadership = [
    {
      name: "Bhupendra Chy",
      position: "Principal",
      qualification: "M.Ed, Ph.D in Education",
      experience: "15+ years",
      description: "Leading Pioneer Academy with vision and dedication to excellence in education.",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Harinarayan Chy",
      position: "Vice Principal",
      qualification: "M.A. in Educational Administration",
      experience: "12+ years",
      description: "Supporting academic operations and student development initiatives.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const teamMembers = [
    {
      name: "Ms. Emily Chen",
      position: "Head of Academics",
      department: "Academic Affairs",
      qualification: "M.Ed in Curriculum Development",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Mr. James Rodriguez",
      position: "Sports Coordinator",
      department: "Physical Education",
      qualification: "B.P.Ed, Diploma in Sports Management",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Science Department Head",
      department: "Sciences",
      qualification: "Ph.D in Chemistry",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Ms. Rachel Thompson",
      position: "Arts & Culture Head",
      department: "Creative Arts",
      qualification: "M.A. in Fine Arts",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Mr. Ahmed Hassan",
      position: "Technology Coordinator",
      department: "IT & Computer Science",
      qualification: "M.Tech in Computer Science",
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Ms. Lisa Parker",
      position: "Student Counselor",
      department: "Student Affairs",
      qualification: "M.A. in Psychology",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green opacity-90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 hover:scale-105 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              About Pioneer Academy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Meet our dedicated team committed to educational excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue text-white rounded-t-3xl">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <GraduationCap className="h-8 w-8" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                At Pioneer Academy, we are committed to providing quality education that nurtures young minds, 
                builds character, and prepares students for a successful future. Our holistic approach ensures 
                academic excellence while fostering creativity, critical thinking, and leadership skills.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-green-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pioneer-green to-emerald-500 text-white rounded-t-3xl">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <Star className="h-8 w-8" />
                </div>
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-pioneer-deep-blue" />
                  <span className="text-lg font-medium">Excellence in Education</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-pioneer-light-blue" />
                  <span className="text-lg font-medium">Character Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-pioneer-green" />
                  <span className="text-lg font-medium">Innovation & Creativity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-lg font-medium">Community Service</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-pioneer-deep-blue">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${leader.color} text-white rounded-t-3xl`}>
                  <CardTitle className="text-2xl font-bold">{leader.name}</CardTitle>
                  <CardDescription className="text-white/80 text-lg">{leader.position}</CardDescription>
                </CardHeader>
                <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800">Qualification:</p>
                      <p className="text-gray-600">{leader.qualification}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Experience:</p>
                      <p className="text-gray-600">{leader.experience}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">About:</p>
                      <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-pioneer-deep-blue">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardHeader className={`bg-gradient-to-r ${member.color} text-white rounded-t-3xl`}>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-white/80">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Department:</p>
                      <p className="text-gray-600">{member.department}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Qualification:</p>
                      <p className="text-gray-600 text-sm">{member.qualification}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
