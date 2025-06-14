
import React from 'react';
import { Trophy, Star, Award, ArrowRight, Users, GraduationCap } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';

interface Student {
  id: number;
  name: string;
  class: string;
  achievement: string;
  description: string;
  score: string;
  rank: string;
  subjects: string[];
  image: string;
  badge: string;
  icon: React.ReactNode;
  gradient: string;
}

const topperStudents: Student[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    class: "Class 12th Science",
    achievement: "Board Examination Topper",
    description: "Achieved 98.2% in CBSE Board Exams with perfect scores in Physics, Chemistry, and Mathematics",
    score: "98.2%",
    rank: "1st",
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=60",
    badge: "Academic Excellence",
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 2,
    name: "Rambilas Sah",
    class: "Bachelor's",
    achievement: "National Level Mathematics Finalist",
    description: "National level mathematics finalist with 97% and secured 4th position in India, currently studying at Bangalore",
    score: "97%",
    rank: "4th",
    subjects: ["Mathematics", "Science", "Statistics", "Physics"],
    image: "https://images.unsplash.com/photo-1494790108755-2616c7e20093?auto=format&fit=crop&w=400&h=400&q=60",
    badge: "Mathematics Champion",
    icon: <Award className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    class: "Class 11th Commerce",
    achievement: "All-Round Excellence Award",
    description: "Outstanding performance in academics, sports, and cultural activities with 95.5% marks",
    score: "95.5%",
    rank: "1st",
    subjects: ["Accountancy", "Business Studies", "Economics", "English"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=60",
    badge: "All-Rounder",
    icon: <Star className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500"
  }
];

const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image with overlay */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${student.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10`}></div>
        <img 
          src={student.image} 
          alt={student.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Rank badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            {student.rank}
          </span>
        </div>

        {/* Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`bg-gradient-to-r ${student.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {student.badge}
          </span>
        </div>

        {/* Hover overlay content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <ButtonCustom 
            variant="accent" 
            className="bg-white text-pioneer-deep-blue hover:bg-white/90 transform scale-90 group-hover:scale-100 transition-transform duration-300"
            leftIcon={<GraduationCap className="w-4 h-4" />}
          >
            View Profile
          </ButtonCustom>
        </div>
      </div>

      <div className="p-6">
        {/* Achievement and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${student.gradient} text-white mr-3`}>
              {student.icon}
            </div>
            <span className="text-sm font-medium text-gray-600">{student.class}</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-pioneer-deep-blue mb-2 group-hover:text-pioneer-light-blue transition-colors">
          {student.name}
        </h3>

        {/* Achievement */}
        <h4 className="text-lg font-semibold text-pioneer-green mb-3">
          {student.achievement}
        </h4>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {student.description}
        </p>

        {/* Subjects */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Top Subjects:</p>
          <div className="flex flex-wrap gap-2">
            {student.subjects.slice(0, 3).map((subject, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Score and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pioneer-deep-blue">
              {student.score}
            </span>
            <span className="text-sm text-gray-500">Score</span>
          </div>
          
          <ButtonCustom 
            size="sm" 
            className="group-hover:shadow-lg transition-shadow"
            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          >
            Details
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

const TopperStudents: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pioneer-light-blue/10 rounded-full text-pioneer-light-blue text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Our Achievers
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pioneer-deep-blue mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pioneer-light-blue to-pioneer-green">Topper Students</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating excellence and outstanding achievements of our brilliant students who have made us proud with their dedication and hard work.
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topperStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <ButtonCustom 
            variant="outline" 
            size="lg"
            className="border-2 border-pioneer-light-blue text-pioneer-light-blue hover:bg-pioneer-light-blue hover:text-white transition-all duration-300 px-8 py-4"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            View All Achievers
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default TopperStudents;
