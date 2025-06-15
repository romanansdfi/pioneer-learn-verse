import React, { useState } from 'react';
import { Trophy, Star, Award, ArrowLeft, Users, GraduationCap, Medal, BookOpen, Target, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import ButtonCustom from '../components/ui/button-custom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { allStudents as originalStudents, Student } from '../data/students';

const StudentDetailsDialog: React.FC<{ student: Student; isOpen: boolean; onClose: () => void }> = ({ 
  student, 
  isOpen, 
  onClose 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-pioneer-deep-blue">
            Student Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Student Image and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <img 
                src={student.image} 
                alt={student.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -top-2 -right-2">
                <span className={`bg-gradient-to-r ${student.gradient} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {student.badge}
                </span>
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-2xl font-bold text-pioneer-deep-blue">{student.name}</h3>
                <p className="text-lg text-pioneer-light-blue font-medium">{student.class}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-pioneer-green">{student.achievement}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-lg font-bold text-pioneer-deep-blue">Rank: {student.rank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-pioneer-green">{student.score}</span>
                  <span className="text-gray-600">Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Description */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-semibold text-pioneer-deep-blue mb-2">Achievement Details</h4>
            <p className="text-gray-700 leading-relaxed">{student.description}</p>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-pioneer-deep-blue mb-3">Top Subjects</h4>
            <div className="grid grid-cols-2 gap-3">
              {student.subjects.map((subject, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${student.gradient}`}></div>
                  <span className="font-medium text-gray-700">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                {student.icon}
                <h5 className="font-semibold text-pioneer-deep-blue">Performance</h5>
              </div>
              <p className="text-sm text-gray-600">Exceptional academic performance with consistent high scores</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-pioneer-green" />
                <h5 className="font-semibold text-pioneer-deep-blue">Recognition</h5>
              </div>
              <p className="text-sm text-gray-600">Recognized for outstanding academic achievements and dedication</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
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
              onClick={handleDetailsClick}
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
              rightIcon={<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
              onClick={handleDetailsClick}
            >
              Details
            </ButtonCustom>
          </div>
        </div>
      </div>

      <StudentDetailsDialog 
        student={student} 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog}
      />
    </>
  );
};

const Achievers: React.FC = () => {
  const [shuffledStudents] = useState(() => {
    const topStudents = ["Binu Chy", "Rambilas Sah", "Puja Rouniyar"];
    const topThree = originalStudents.filter(s => topStudents.includes(s.name));
    // Ensure the top three are in the correct order as they appear in the original list.
    topThree.sort((a, b) => originalStudents.findIndex(s => s.name === a.name) - originalStudents.findIndex(s => s.name === b.name));
    
    const otherStudents = originalStudents.filter(s => !topStudents.includes(s.name));
    
    // Shuffle other students - Fisher-Yates shuffle
    for (let i = otherStudents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherStudents[i], otherStudents[j]] = [otherStudents[j], otherStudents[i]];
    }
    
    return [...topThree, ...otherStudents];
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Header with back button */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/">
                <ButtonCustom 
                  variant="outline"
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  className="border border-pioneer-light-blue text-pioneer-light-blue hover:bg-pioneer-light-blue hover:text-white"
                >
                  Back to Home
                </ButtonCustom>
              </Link>
            </div>

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-pioneer-light-blue/10 rounded-full text-pioneer-light-blue text-sm font-semibold mb-4">
                <Trophy className="w-4 h-4 mr-2" />
                All Achievers
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pioneer-deep-blue mb-6">
                Our Complete List of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pioneer-light-blue to-pioneer-green">Outstanding Students</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover all our exceptional students who have achieved remarkable success through dedication, hard work, and academic excellence.
              </p>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shuffledStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>

            {/* Statistics Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-pioneer-deep-blue mb-2">{originalStudents.length}+</div>
                <div className="text-gray-600">Total Achievers</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-pioneer-deep-blue mb-2">95%+</div>
                <div className="text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-pioneer-deep-blue mb-2">8</div>
                <div className="text-gray-600">Different Categories</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-pioneer-deep-blue mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Achievers;
