
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

  const courses = [
    { class: "Class 1-2", subjects: ["English", "Mathematics", "Environmental Science", "Hindi", "Art & Craft", "Physical Education"] },
    { class: "Class 3-5", subjects: ["English", "Mathematics", "Environmental Science", "Hindi", "Computer Science", "Art & Craft", "Physical Education"] },
    { class: "Class 6-8", subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Computer Science", "Art & Craft", "Physical Education"] },
    { class: "Class 9-10", subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Computer Applications", "Physical Education"] }
  ];

  const sports = [
    { name: "Cricket", achievements: "District Champions 2023", icon: "🏏" },
    { name: "Basketball", achievements: "State Runners-up 2023", icon: "🏀" },
    { name: "Football", achievements: "Regional Champions 2022", icon: "⚽" },
    { name: "Table Tennis", achievements: "Inter-school Winners 2023", icon: "🏓" },
    { name: "Swimming", achievements: "City Champions 2023", icon: "🏊" },
    { name: "Athletics", achievements: "Multiple State Records", icon: "🏃" }
  ];

  const activities = [
    { name: "Science Club", day: "Monday", time: "3:30 PM - 4:30 PM" },
    { name: "Art & Craft", day: "Tuesday", time: "3:30 PM - 4:30 PM" },
    { name: "Music Club", day: "Wednesday", time: "3:30 PM - 4:30 PM" },
    { name: "Dance Club", day: "Thursday", time: "3:30 PM - 4:30 PM" },
    { name: "Drama Club", day: "Friday", time: "3:30 PM - 4:30 PM" },
    { name: "Debate Society", day: "Saturday", time: "10:00 AM - 11:00 AM" }
  ];

  const events = [
    { name: "Annual Day Celebration", date: "2024-03-15", type: "Cultural" },
    { name: "Science Exhibition", date: "2024-02-20", type: "Academic" },
    { name: "Sports Day", date: "2024-01-25", type: "Sports" },
    { name: "Parent-Teacher Meeting", date: "2024-04-10", type: "Meeting" }
  ];

  const galleryImages = [
    { category: "Events", images: ["Annual Day 2023", "Science Fair", "Sports Day", "Cultural Program"] },
    { category: "Campus", images: ["Main Building", "Library", "Computer Lab", "Playground"] },
    { category: "Activities", images: ["Art Class", "Music Room", "Dance Performance", "Drama Club"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Excellence in Education Since 1995
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Pioneer Academy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Nurturing Excellence, Building Character, Shaping Future Leaders
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Users className="h-5 w-5 mr-2" />
                <span>500+ Students</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Award className="h-5 w-5 mr-2" />
                <span>CBSE Affiliated</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Trophy className="h-5 w-5 mr-2" />
                <span>25+ Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="welcome" className="w-full">
          <div className="mb-12">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-2xl shadow-lg border-0">
              <TabsTrigger value="welcome" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-deep-blue data-[state=active]:to-pioneer-light-blue data-[state=active]:text-white rounded-xl transition-all">Welcome</TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-light-blue data-[state=active]:to-pioneer-green data-[state=active]:text-white rounded-xl transition-all">Courses</TabsTrigger>
              <TabsTrigger value="principal" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pioneer-green data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-xl transition-all">Principal</TabsTrigger>
              <TabsTrigger value="sports" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white rounded-xl transition-all">Sports</TabsTrigger>
              <TabsTrigger value="activities" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all">Activities</TabsTrigger>
              <TabsTrigger value="gallery" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl transition-all">Gallery</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white rounded-xl transition-all">Events</TabsTrigger>
              <TabsTrigger value="student-zone" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-xl transition-all">Students</TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white rounded-xl transition-all">Contact</TabsTrigger>
            </TabsList>
          </div>

          {/* Welcome Tab */}
          <TabsContent value="welcome" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="card-hover bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue rounded-xl">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Pioneer Academy, we are committed to providing quality education that nurtures young minds, 
                    builds character, and prepares students for a successful future. Our holistic approach ensures 
                    academic excellence while fostering creativity, critical thinking, and leadership skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-to-br from-white to-green-50/50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-pioneer-green to-emerald-500 rounded-xl">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <ChevronRight className="h-5 w-5 text-pioneer-light-blue" />
                      <span className="text-lg">Excellence in Education</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <ChevronRight className="h-5 w-5 text-pioneer-light-blue" />
                      <span className="text-lg">Character Development</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <ChevronRight className="h-5 w-5 text-pioneer-light-blue" />
                      <span className="text-lg">Innovation & Creativity</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <ChevronRight className="h-5 w-5 text-pioneer-light-blue" />
                      <span className="text-lg">Community Service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-hover bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Why Choose Pioneer Academy?</CardTitle>
                <CardDescription className="text-lg text-gray-600">Discover what makes us exceptional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">CBSE Affiliated</h3>
                    <p className="text-gray-600 leading-relaxed">Recognized curriculum following national standards with modern teaching methodologies</p>
                  </div>
                  <div className="text-center group">
                    <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Expert Faculty</h3>
                    <p className="text-gray-600 leading-relaxed">Qualified and experienced teaching staff dedicated to student success</p>
                  </div>
                  <div className="text-center group">
                    <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-pioneer-green to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Modern Facilities</h3>
                    <p className="text-gray-600 leading-relaxed">State-of-the-art infrastructure and resources for comprehensive learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Excellence</h2>
              <p className="text-lg text-gray-600">Comprehensive CBSE curriculum designed for holistic development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="card-hover bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-pioneer-deep-blue flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {course.class}
                    </CardTitle>
                    <CardDescription className="text-lg">CBSE Curriculum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {course.subjects.map((subject, idx) => (
                        <Badge key={idx} className="bg-gradient-to-r from-pioneer-light-blue/20 to-pioneer-green/20 text-pioneer-deep-blue border-pioneer-light-blue/30 px-3 py-1 text-sm font-medium hover:scale-105 transition-transform">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Principal Tab */}
          <TabsContent value="principal" className="animate-fade-in">
            <Card className="card-hover bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Message from the Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-64 h-64 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
                      <Users className="h-32 w-32 text-white" />
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="font-bold text-2xl text-gray-800">Dr. Sarah Johnson</h3>
                      <p className="text-pioneer-light-blue text-lg font-medium">Principal</p>
                      <p className="text-gray-500">M.Ed, Ph.D in Education</p>
                    </div>
                  </div>
                  <div className="lg:w-2/3 space-y-6">
                    <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "Welcome to Pioneer Academy, where we believe every child has the potential to achieve greatness. 
                        Our dedicated team of educators works tirelessly to create an environment that fosters learning, 
                        creativity, and personal growth."
                      </p>
                    </div>
                    <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "With over 15 years of experience in education, I am committed to ensuring that our students 
                        receive the best possible education while developing the values and skills necessary for success 
                        in the 21st century."
                      </p>
                    </div>
                    <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
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
          <TabsContent value="sports" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sports Excellence</h2>
              <p className="text-lg text-gray-600">Building champions on and off the field</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => (
                <Card key={index} className="card-hover bg-gradient-to-br from-white to-orange-50/30 border-0 shadow-xl group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-xl">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{sport.icon}</div>
                      <div>
                        <div className="text-gray-800">{sport.name}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                      <Trophy className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700 font-medium">{sport.achievements}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Co-Curricular Activities</h2>
              <p className="text-lg text-gray-600">Nurturing talents beyond academics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="card-hover bg-gradient-to-br from-white to-purple-50/30 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-800">{activity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-700 font-medium">{activity.day}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                        <Clock className="h-5 w-5 text-pink-600" />
                        <span className="text-gray-700 font-medium">{activity.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">School Gallery</h2>
              <p className="text-lg text-gray-600">Capturing memories and moments</p>
            </div>
            <div className="space-y-8">
              {galleryImages.map((category, index) => (
                <Card key={index} className="card-hover bg-gradient-to-br from-white to-indigo-50/30 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {category.images.map((image, idx) => (
                        <div 
                          key={idx}
                          className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
                          onClick={() => setSelectedGallery(image)}
                        >
                          <div className="text-center p-4">
                            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-3 group-hover:text-indigo-500 transition-colors" />
                            <p className="text-sm text-gray-600 font-medium">{image}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">School Events</h2>
              <p className="text-lg text-gray-600">Celebrating achievements and milestones</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="card-hover bg-gradient-to-br from-white to-pink-50/30 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">{event.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">{event.type}</Badge>
                      <span className="text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl">
                      <Calendar className="h-5 w-5 text-pink-600" />
                      <span className="text-gray-700 font-medium">Mark your calendar</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Student Zone Tab */}
          <TabsContent value="student-zone" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Zone</h2>
              <p className="text-lg text-gray-600">Your gateway to academic resources</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-hover bg-gradient-to-br from-white to-teal-50/30 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Student Portal</CardTitle>
                  <CardDescription className="text-lg">Access your academic information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl">
                      <h4 className="font-bold text-lg mb-4">Features Available:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-600" />
                          View Grades and Report Cards
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-600" />
                          Check Attendance Records
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-600" />
                          Access Assignment Submissions
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-600" />
                          Download Study Materials
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-600" />
                          View School Announcements
                        </li>
                      </ul>
                    </div>
                    <ButtonCustom variant="primary" fullWidth className="text-lg py-4">
                      Access Student Portal
                    </ButtonCustom>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-to-br from-white to-cyan-50/30 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Academic Resources</CardTitle>
                  <CardDescription className="text-lg">Learning materials and support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-xl hover:shadow-lg transition-shadow">
                      <span className="font-medium">Digital Library</span>
                      <ButtonCustom variant="outline" size="sm">Access</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow">
                      <span className="font-medium">Online Assignments</span>
                      <ButtonCustom variant="outline" size="sm">View</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-xl hover:shadow-lg transition-shadow">
                      <span className="font-medium">Study Materials</span>
                      <ButtonCustom variant="outline" size="sm">Download</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow">
                      <span className="font-medium">Virtual Classroom</span>
                      <ButtonCustom variant="outline" size="sm">Join</ButtonCustom>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">We're here to help and answer any questions</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-hover bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-100 to-blue-100 rounded-xl">
                    <div className="p-2 bg-pioneer-deep-blue rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Address</p>
                      <p className="text-gray-600">123 Education Street, Learning City, LC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
                    <div className="p-2 bg-pioneer-light-blue rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                    <div className="p-2 bg-pioneer-green rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <p className="text-gray-600">info@pioneeracademy.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
                    <div className="p-2 bg-yellow-600 rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue bg-white/80 backdrop-blur-sm" 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue bg-white/80 backdrop-blur-sm" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue bg-white/80 backdrop-blur-sm" 
                        placeholder="Inquiry subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue bg-white/80 backdrop-blur-sm resize-none" 
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <ButtonCustom variant="primary" fullWidth className="text-lg py-4">
                      Send Message
                    </ButtonCustom>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SchoolInfo;
