
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Calendar, Trophy, Camera, MapPin, Phone, Mail, Clock, GraduationCap, Award, Star, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-pioneer-deep-blue to-pioneer-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pioneer Academy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nurturing Excellence, Building Character, Shaping Future Leaders
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="welcome" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-9 lg:grid-cols-9 mb-8">
            <TabsTrigger value="welcome">Welcome</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="principal">Principal</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="student-zone">Students</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Welcome Tab */}
          <TabsContent value="welcome">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-pioneer-deep-blue" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    At Pioneer Academy, we are committed to providing quality education that nurtures young minds, 
                    builds character, and prepares students for a successful future. Our holistic approach ensures 
                    academic excellence while fostering creativity, critical thinking, and leadership skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-6 w-6 text-pioneer-green" />
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-pioneer-light-blue" />
                      Excellence in Education
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-pioneer-light-blue" />
                      Character Development
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-pioneer-light-blue" />
                      Innovation & Creativity
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-pioneer-light-blue" />
                      Community Service
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Why Choose Pioneer Academy?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-pioneer-deep-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">CBSE Affiliated</h3>
                    <p className="text-gray-600">Recognized curriculum following national standards</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-pioneer-light-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Expert Faculty</h3>
                    <p className="text-gray-600">Qualified and experienced teaching staff</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 text-pioneer-green mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Modern Facilities</h3>
                    <p className="text-gray-600">State-of-the-art infrastructure and resources</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-pioneer-deep-blue">{course.class}</CardTitle>
                    <CardDescription>CBSE Curriculum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-pioneer-light-blue/10 text-pioneer-deep-blue">
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
          <TabsContent value="principal">
            <Card>
              <CardHeader>
                <CardTitle>Message from the Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-48 h-48 bg-gradient-to-br from-pioneer-deep-blue to-pioneer-light-blue rounded-lg mx-auto flex items-center justify-center">
                      <Users className="h-24 w-24 text-white" />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                      <p className="text-gray-600">Principal</p>
                      <p className="text-sm text-gray-500">M.Ed, Ph.D in Education</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Welcome to Pioneer Academy, where we believe every child has the potential to achieve greatness. 
                      Our dedicated team of educators works tirelessly to create an environment that fosters learning, 
                      creativity, and personal growth."
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "With over 15 years of experience in education, I am committed to ensuring that our students 
                      receive the best possible education while developing the values and skills necessary for success 
                      in the 21st century."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      "We invite you to join our Pioneer Academy family and embark on an exciting journey of 
                      discovery and learning."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sports Tab */}
          <TabsContent value="sports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-2xl">{sport.icon}</span>
                      {sport.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-pioneer-green" />
                      <span className="text-sm text-gray-600">{sport.achievements}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{activity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-pioneer-light-blue" />
                        <span className="text-sm">{activity.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-pioneer-green" />
                        <span className="text-sm">{activity.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="space-y-6">
              {galleryImages.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5 text-pioneer-deep-blue" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.images.map((image, idx) => (
                        <div 
                          key={idx}
                          className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => setSelectedGallery(image)}
                        >
                          <div className="text-center p-4">
                            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600">{image}</p>
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
          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="mr-2">{event.type}</Badge>
                      {new Date(event.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-pioneer-light-blue" />
                      <span className="text-sm text-gray-600">Mark your calendar</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Student Zone Tab */}
          <TabsContent value="student-zone">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Student Portal</CardTitle>
                  <CardDescription>Access your academic information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-pioneer-light-blue/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Features Available:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• View Grades and Report Cards</li>
                        <li>• Check Attendance Records</li>
                        <li>• Access Assignment Submissions</li>
                        <li>• Download Study Materials</li>
                        <li>• View School Announcements</li>
                      </ul>
                    </div>
                    <ButtonCustom variant="primary" fullWidth>
                      Access Student Portal
                    </ButtonCustom>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Resources</CardTitle>
                  <CardDescription>Learning materials and support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Digital Library</span>
                      <ButtonCustom variant="outline" size="sm">Access</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Online Assignments</span>
                      <ButtonCustom variant="outline" size="sm">View</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Study Materials</span>
                      <ButtonCustom variant="outline" size="sm">Download</ButtonCustom>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Virtual Classroom</span>
                      <ButtonCustom variant="outline" size="sm">Join</ButtonCustom>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-pioneer-deep-blue" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-gray-600">123 Education Street, Learning City, LC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-pioneer-light-blue" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-pioneer-green" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">info@pioneeracademy.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                        placeholder="Inquiry subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <ButtonCustom variant="primary" fullWidth>
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
