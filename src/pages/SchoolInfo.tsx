import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Calendar, Trophy, Camera, MapPin, Phone, Mail, Clock, GraduationCap, Award, Star, ChevronRight, Sparkles, Target, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ButtonCustom from '@/components/ui/button-custom';
import Navbar from '@/components/navbar/Navbar';

const SchoolInfo: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const courses = [{
    class: "Class 1-2",
    subjects: ["English", "Mathematics", "Environmental Science", "Nepali", "Art & Craft", "Physical Education"],
    color: "from-pink-500 to-rose-500"
  }, {
    class: "Class 3-5",
    subjects: ["English", "Mathematics", "Environmental Science", "Nepali", "Computer Science", "Art & Craft", "Physical Education"],
    color: "from-purple-500 to-indigo-500"
  }, {
    class: "Class 6-8",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Nepali", "Computer Science", "Art & Craft", "Physical Education"],
    color: "from-blue-500 to-cyan-500"
  }, {
    class: "Class 9-10",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Nepali", "Computer Applications", "Physical Education"],
    color: "from-emerald-500 to-teal-500"
  }];
  const sports = [{
    name: "Cricket",
    achievements: "District Champions 2023",
    icon: "🏏",
    color: "from-orange-400 to-red-500"
  }, {
    name: "Basketball",
    achievements: "State Runners-up 2023",
    icon: "🏀",
    color: "from-blue-400 to-purple-500"
  }, {
    name: "Football",
    achievements: "Regional Champions 2022",
    icon: "⚽",
    color: "from-green-400 to-emerald-500"
  }, {
    name: "Table Tennis",
    achievements: "Inter-school Winners 2023",
    icon: "🏓",
    color: "from-yellow-400 to-orange-500"
  }, {
    name: "Swimming",
    achievements: "City Champions 2023",
    icon: "🏊",
    color: "from-cyan-400 to-blue-500"
  }, {
    name: "Athletics",
    achievements: "Multiple State Records",
    icon: "🏃",
    color: "from-pink-400 to-rose-500"
  }];
  const activities = [{
    name: "Science Club",
    day: "Monday",
    time: "3:30 PM - 4:30 PM",
    icon: "🔬",
    color: "from-blue-400 to-indigo-500"
  }, {
    name: "Art & Craft",
    day: "Tuesday",
    time: "3:30 PM - 4:30 PM",
    icon: "🎨",
    color: "from-pink-400 to-purple-500"
  }, {
    name: "Music Club",
    day: "Wednesday",
    time: "3:30 PM - 4:30 PM",
    icon: "🎵",
    color: "from-green-400 to-teal-500"
  }, {
    name: "Dance Club",
    day: "Thursday",
    time: "3:30 PM - 4:30 PM",
    icon: "💃",
    color: "from-yellow-400 to-orange-500"
  }, {
    name: "Drama Club",
    day: "Friday",
    time: "3:30 PM - 4:30 PM",
    icon: "🎭",
    color: "from-red-400 to-pink-500"
  }, {
    name: "Debate Society",
    day: "Saturday",
    time: "10:00 AM - 11:00 AM",
    icon: "🗣️",
    color: "from-purple-400 to-indigo-500"
  }];
  const events = [{
    name: "Annual Day Celebration",
    date: "2024-03-15",
    type: "Cultural",
    color: "from-purple-500 to-pink-500"
  }, {
    name: "Science Exhibition",
    date: "2024-02-20",
    type: "Academic",
    color: "from-blue-500 to-cyan-500"
  }, {
    name: "Sports Day",
    date: "2024-01-25",
    type: "Sports",
    color: "from-green-500 to-emerald-500"
  }, {
    name: "Parent-Teacher Meeting",
    date: "2024-04-10",
    type: "Meeting",
    color: "from-orange-500 to-red-500"
  }];
  const galleryImages = [{
    category: "Events",
    images: [
      {
        name: "Cultural Day Celebration",
        src: "/lovable-uploads/595e9d9f-fae9-4d78-906e-4df5a40ecd67.png"
      },
      {
        name: "Inter-School Competition",
        src: "/lovable-uploads/a268eb2e-8e80-442b-858b-87b2383a463c.png"
      },
      {
        name: "Science Project Exhibition",
        src: "/lovable-uploads/63e9a34c-09e6-4b12-bfdb-7a27c1ce9534.png"
      },
      {
        name: "Academic Achievement Awards",
        src: "/lovable-uploads/a986bcea-46e9-461d-a208-21cd3ae99949.png"
      }
    ],
    color: "from-purple-500 to-indigo-500"
  }, {
    category: "Campus",
    images: [
      { name: "Main Building", src: null },
      { name: "Library", src: null },
      { name: "Computer Lab", src: null },
      { name: "Playground", src: null }
    ],
    color: "from-blue-500 to-cyan-500"
  }, {
    category: "Activities",
    images: [
      {
        name: "School Group Activity",
        src: "/lovable-uploads/1c16ef8b-434b-4c49-80be-9f2fb0a3ed69.png"
      },
      {
        name: "Achievement Awards Ceremony",
        src: "/lovable-uploads/cfa9805a-90ed-4a62-8cbf-28c4bfc18b81.png"
      },
      {
        name: "Student Recognition Event",
        src: "/lovable-uploads/fb108808-734f-43c1-8fb6-7c5e4085147d.png"
      },
      {
        name: "Award Presentation",
        src: "/lovable-uploads/fccb4d8f-0a5d-44f9-a3c4-b6b9359045b6.png"
      }
    ],
    color: "from-green-500 to-teal-500"
  }];
  const leadership = [{
    name: "Dr. Sarah Johnson",
    position: "Principal",
    qualification: "M.Ed, Ph.D in Education",
    experience: "15+ years",
    description: "Leading Pioneer Academy with vision and dedication to excellence in education.",
    color: "from-blue-500 to-purple-500"
  }, {
    name: "Mr. David Wilson",
    position: "Vice Principal",
    qualification: "M.A. in Educational Administration",
    experience: "12+ years",
    description: "Supporting academic operations and student development initiatives.",
    color: "from-green-500 to-teal-500"
  }];
  const teamMembers = [{
    name: "Ms. Emily Chen",
    position: "Head of Academics",
    department: "Academic Affairs",
    qualification: "M.Ed in Curriculum Development",
    color: "from-pink-500 to-rose-500"
  }, {
    name: "Mr. James Rodriguez",
    position: "Sports Coordinator",
    department: "Physical Education",
    qualification: "B.P.Ed, Diploma in Sports Management",
    color: "from-orange-500 to-red-500"
  }, {
    name: "Dr. Priya Sharma",
    position: "Science Department Head",
    department: "Sciences",
    qualification: "Ph.D in Chemistry",
    color: "from-cyan-500 to-blue-500"
  }, {
    name: "Ms. Rachel Thompson",
    position: "Arts & Culture Head",
    department: "Creative Arts",
    qualification: "M.A. in Fine Arts",
    color: "from-purple-500 to-indigo-500"
  }, {
    name: "Mr. Ahmed Hassan",
    position: "Technology Coordinator",
    department: "IT & Computer Science",
    qualification: "M.Tech in Computer Science",
    color: "from-emerald-500 to-green-500"
  }, {
    name: "Ms. Lisa Parker",
    position: "Student Counselor",
    department: "Student Affairs",
    qualification: "M.A. in Psychology",
    color: "from-yellow-500 to-orange-500"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      {/* Enhanced Header Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 hover:scale-105 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-bounce-slow">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
              Pioneer Academy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Nurturing Excellence, Building Character, Shaping Future Leaders
            </p>
            <div className="flex justify-center mt-8 space-x-4 animate-fade-in animation-delay-400">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-white font-medium">Excellence</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Character</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Target className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="welcome" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 lg:grid-cols-8 mb-12 bg-white/50 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-2">
            <TabsTrigger value="welcome" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Welcome</TabsTrigger>
            <TabsTrigger value="courses" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Courses</TabsTrigger>
            <TabsTrigger value="principal" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Principal</TabsTrigger>
            <TabsTrigger value="sports" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Sports</TabsTrigger>
            <TabsTrigger value="activities" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Activities</TabsTrigger>
            <TabsTrigger value="gallery" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Gallery</TabsTrigger>
            <TabsTrigger value="events" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Events</TabsTrigger>
            <TabsTrigger value="student-zone" className="rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white">Students</TabsTrigger>
          </TabsList>

          {/* Welcome Tab */}
          <TabsContent value="welcome" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-hover bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl rounded-3xl overflow-hidden">
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

              <Card className="card-hover bg-gradient-to-br from-white to-green-50 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pioneer-green to-emerald-500 text-white rounded-t-3xl">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Star className="h-8 w-8" />
                    </div>
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full group-hover:scale-110 transition-transform">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">Excellence in Education</span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full group-hover:scale-110 transition-transform">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">Character Development</span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full group-hover:scale-110 transition-transform">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">Innovation & Creativity</span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full group-hover:scale-110 transition-transform">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">Community Service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-hover bg-gradient-to-r from-white via-blue-50 to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl font-bold text-gradient-primary flex items-center justify-center gap-3">
                  <Sparkles className="h-8 w-8 text-pioneer-deep-blue" />
                  Why Choose Pioneer Academy?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pioneer-deep-blue to-pioneer-light-blue rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-pioneer-deep-blue">NEB Affiliated</h3>
                    <p className="text-gray-600 leading-relaxed">Recognized curriculum following national standards</p>
                  </div>
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pioneer-light-blue to-pioneer-green rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-pioneer-light-blue">Expert Faculty</h3>
                    <p className="text-gray-600 leading-relaxed">Qualified and experienced teaching staff</p>
                  </div>
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pioneer-green to-emerald-500 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-pioneer-green">Modern Facilities</h3>
                    <p className="text-gray-600 leading-relaxed">State-of-the-art infrastructure and resources</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => <Card key={index} className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${course.color} text-white rounded-t-3xl`}>
                    <CardTitle className="text-2xl font-bold">{course.class}</CardTitle>
                    <CardDescription className="text-white/80 text-lg">NEB Curriculum</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex flex-wrap gap-3">
                      {course.subjects.map((subject, idx) => <Badge key={idx} className="px-4 py-2 text-sm font-medium bg-white/80 text-gray-700 hover:bg-white transition-colors rounded-full shadow-md">
                          {subject}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          {/* Principal Tab */}
          <TabsContent value="principal">
            <Card className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue text-white rounded-t-3xl">
                <CardTitle className="text-3xl font-bold">Message from the Principal</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-64 h-64 rounded-3xl mx-auto overflow-hidden shadow-2xl">
                      <img src="/lovable-uploads/8b054e9c-2095-4ab3-916a-0e7f2c9da936.png" alt="Principal Ramanand Chy" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="font-bold text-2xl text-pioneer-deep-blue">Ramanand Chy</h3>
                      <p className="text-pioneer-light-blue font-semibold text-lg">Principal</p>
                      <p className="text-gray-500 text-sm">M.Ed, Ph.D in Education</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-pioneer-light-blue">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "Welcome to Pioneer Academy, where we believe every child has the potential to achieve greatness. 
                        Our dedicated team of educators works tirelessly to create an environment that fosters learning, 
                        creativity, and personal growth."
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-l-4 border-pioneer-green">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "With over 15 years of experience in education, I am committed to ensuring that our students 
                        receive the best possible education while developing the values and skills necessary for success 
                        in the 21st century."
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "We invite you to join our Pioneer Academy family and embark on an exciting journey of 
                        discovery and learning."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sports Tab */}
          <TabsContent value="sports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => <Card key={index} className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${sport.color} text-white rounded-t-3xl`}>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <span className="text-3xl">{sport.icon}</span>
                      {sport.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{sport.achievements}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => <Card key={index} className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${activity.color} text-white rounded-t-3xl`}>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <span className="text-2xl">{activity.icon}</span>
                      {activity.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{activity.day}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-pioneer-green to-emerald-500 rounded-full">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{activity.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="space-y-8">
              {galleryImages.map((category, index) => <Card key={index} className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-3xl`}>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-2 bg-white/20 rounded-full">
                        <Camera className="h-6 w-6" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.images.map((image, idx) => <div key={idx} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden" onClick={() => setSelectedGallery(image.name)}>
                          {image.src ? (
                            <img 
                              src={image.src} 
                              alt={image.name}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          ) : (
                            <div className="text-center p-4">
                              <div className="p-3 bg-white/60 rounded-full mb-3 group-hover:bg-white/80 transition-colors">
                                <Camera className="h-8 w-8 text-gray-600" />
                              </div>
                              <p className="text-sm text-gray-700 font-medium">{image.name}</p>
                            </div>
                          )}
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => <Card key={index} className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${event.color} text-white rounded-t-3xl`}>
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <CardDescription className="text-white/80">
                      <div className="flex items-center gap-3 mt-2">
                        <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          {event.type}
                        </Badge>
                        <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-600 font-medium">Mark your calendar</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          {/* Student Zone Tab */}
          <TabsContent value="student-zone">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue text-white rounded-t-3xl">
                  <CardTitle className="text-2xl">Student Portal</CardTitle>
                  <CardDescription className="text-white/80 text-lg">Access your academic information</CardDescription>
                </CardHeader>
                <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                      <h4 className="font-bold mb-4 text-pioneer-deep-blue text-lg">Features Available:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full"></div>
                          View Grades and Report Cards
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full"></div>
                          Check Attendance Records
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full"></div>
                          Access Assignment Submissions
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full"></div>
                          Download Study Materials
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full"></div>
                          View School Announcements
                        </li>
                      </ul>
                    </div>
                    <ButtonCustom variant="primary" fullWidth className="bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold rounded-2xl">
                      Access Student Portal
                    </ButtonCustom>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pioneer-green to-emerald-500 text-white rounded-t-3xl">
                  <CardTitle className="text-2xl">Academic Resources</CardTitle>
                  <CardDescription className="text-white/80 text-lg">Learning materials and support</CardDescription>
                </CardHeader>
                <CardContent className="p-8 bg-gradient-to-br from-white to-green-50">
                  <div className="space-y-4">
                    {[{
                    name: "Digital Library",
                    icon: BookOpen
                  }, {
                    name: "Online Assignments",
                    icon: Users
                  }, {
                    name: "Study Materials",
                    icon: BookOpen
                  }, {
                    name: "Virtual Classroom",
                    icon: Users
                  }].map((resource, idx) => <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100 group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-pioneer-green to-emerald-500 rounded-full group-hover:scale-110 transition-transform">
                            <resource.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-700">{resource.name}</span>
                        </div>
                        <ButtonCustom variant="outline" size="sm" className="hover:bg-gradient-to-r hover:from-pioneer-green hover:to-emerald-500 hover:text-white transition-all duration-300 rounded-xl">
                          {idx === 0 ? "Access" : idx === 1 ? "View" : idx === 2 ? "Download" : "Join"}
                        </ButtonCustom>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default SchoolInfo;
