
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  BookOpen, 
  User, 
  Trophy, 
  Sparkles, 
  ImageIcon, 
  Calendar, 
  Users, 
  Mail,
  LockIcon,
  HomeIcon
} from 'lucide-react';
import ButtonCustom from '../ui/button-custom';
import { useNavigate } from 'react-router-dom';

interface SchoolInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const SchoolInfoModal: React.FC<SchoolInfoModalProps> = ({ open, onClose }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Create the content that will be used in any of the container components
  const Content = () => (
    <div className="h-full">
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-background py-4 border-b">
        <h2 className="text-2xl font-bold text-pioneer-deep-blue">Pioneer School Information</h2>
        <ButtonCustom variant="outline" onClick={onClose}>Close</ButtonCustom>
      </div>
      
      <Tabs defaultValue="welcome" className="w-full">
        <ScrollArea className="w-full">
          <TabsList className="flex w-full justify-start overflow-x-auto py-2 mb-4">
            <TabsTrigger value="welcome" className="flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              <span>Welcome</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </TabsTrigger>
            <TabsTrigger value="principal" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Principal</span>
            </TabsTrigger>
            <TabsTrigger value="sports" className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              <span>Sports</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              <span>Activities</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-1">
              <ImageIcon className="h-4 w-4" />
              <span>Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="student" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Student Zone</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </TabsTrigger>
            <TabsTrigger value="login" className="flex items-center gap-1">
              <LockIcon className="h-4 w-4" />
              <span>Login</span>
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        <ScrollArea className="h-[calc(100vh-180px)]">
          <div className="pb-8">
            <TabsContent value="welcome" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HomeIcon className="h-5 w-5 text-pioneer-deep-blue" />
                    Welcome to Pioneer School
                  </CardTitle>
                  <CardDescription>
                    Shaping young minds from Class 1 to 10
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-pioneer-gray rounded-lg">
                    <p className="text-lg">
                      Pioneer School is dedicated to providing quality education with a focus on holistic development. 
                      Our mission is to nurture well-rounded individuals who excel academically and develop essential life skills.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-pioneer-deep-blue mb-2">Excellence</h3>
                        <p>We strive for excellence in all our endeavors, encouraging students to reach their full potential.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-pioneer-deep-blue mb-2">Innovation</h3>
                        <p>We embrace innovative teaching methods to make learning engaging and effective.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-pioneer-deep-blue mb-2">Character</h3>
                        <p>We emphasize character development alongside academic achievement.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-pioneer-deep-blue" />
                    Courses Offered
                  </CardTitle>
                  <CardDescription>
                    Comprehensive curriculum aligned with CBSE standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Primary Section (Class 1-5)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-pioneer-gray p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1">
                            <li>English</li>
                            <li>Mathematics</li>
                            <li>Environmental Science</li>
                            <li>Hindi/Regional Language</li>
                            <li>Moral Science</li>
                            <li>Art & Craft</li>
                            <li>Physical Education</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-medium text-pioneer-deep-blue mb-2">Learning Approach</h4>
                          <p>Focus on foundational skills, activity-based learning, and developing curiosity through exploration.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Middle Section (Class 6-8)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-pioneer-gray p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1">
                            <li>English</li>
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>Social Science</li>
                            <li>Hindi/Regional Language</li>
                            <li>Computer Science</li>
                            <li>Moral Science</li>
                            <li>Art Education</li>
                            <li>Physical Education</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-medium text-pioneer-deep-blue mb-2">Learning Approach</h4>
                          <p>Building on foundational skills, introducing critical thinking, scientific inquiry, and digital literacy.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Secondary Section (Class 9-10)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-pioneer-gray p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1">
                            <li>English</li>
                            <li>Mathematics</li>
                            <li>Science (Physics, Chemistry, Biology)</li>
                            <li>Social Science (History, Geography, Civics, Economics)</li>
                            <li>Hindi/Regional Language</li>
                            <li>Computer Science</li>
                            <li>Physical Education</li>
                            <li>Vocational Skills</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-medium text-pioneer-deep-blue mb-2">Learning Approach</h4>
                          <p>Focusing on advanced concepts, board exam preparation, analytical skills, and career guidance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="principal" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-pioneer-deep-blue" />
                    Principal's Message
                  </CardTitle>
                  <CardDescription>
                    Message from our visionary leader
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-pioneer-gray rounded-lg p-4 flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full bg-pioneer-light-blue flex items-center justify-center mb-4">
                          <User className="w-20 h-20 text-white" />
                        </div>
                        <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                        <p className="text-sm text-gray-600">Principal (20+ years experience)</p>
                        <div className="mt-4 text-sm">
                          <p><strong>Education:</strong> Ph.D. in Education</p>
                          <p><strong>Specialization:</strong> Educational Leadership</p>
                          <p><strong>Experience:</strong> 25 years</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-pioneer-deep-blue mb-4">A Vision for Excellence</h3>
                        <div className="space-y-4">
                          <p>
                            "Dear Parents and Students, 
                          </p>
                          <p>
                            Welcome to Pioneer School. Our mission is to provide a nurturing environment where students can grow intellectually, emotionally, and socially. We believe in a holistic approach to education that goes beyond textbooks and examinations.
                          </p>
                          <p>
                            At Pioneer, we focus on three core principles: academic excellence, character development, and preparing students for a rapidly changing world. Our dedicated faculty works tirelessly to instill these values in every student.
                          </p>
                          <p>
                            I invite you to join our educational journey where we work together to shape the leaders of tomorrow. Every child has immense potential, and our goal is to help them discover and develop their unique abilities.
                          </p>
                          <p className="font-medium">
                            Warm regards,<br />
                            Dr. Sarah Johnson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sports" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-pioneer-deep-blue" />
                    Sports & Achievements
                  </CardTitle>
                  <CardDescription>
                    Celebrating excellence in sports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-pioneer-gray p-4 rounded-lg text-center">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-8 w-8 text-pioneer-deep-blue" />
                        </div>
                        <h3 className="font-semibold">Athletics</h3>
                        <p className="text-sm mt-2">District Champions in 4×100m relay, Long Jump, and High Jump</p>
                      </div>
                      <div className="bg-pioneer-gray p-4 rounded-lg text-center">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-8 w-8 text-pioneer-deep-blue" />
                        </div>
                        <h3 className="font-semibold">Basketball</h3>
                        <p className="text-sm mt-2">State runners-up in Under-14 category</p>
                      </div>
                      <div className="bg-pioneer-gray p-4 rounded-lg text-center">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-8 w-8 text-pioneer-deep-blue" />
                        </div>
                        <h3 className="font-semibold">Cricket</h3>
                        <p className="text-sm mt-2">Inter-school tournament winners three years running</p>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-8 mb-4">Proud Moments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-pioneer-light-blue rounded-lg overflow-hidden">
                        <div className="bg-pioneer-light-blue text-white py-2 px-4">
                          <h4 className="font-medium">Gold Medalist</h4>
                        </div>
                        <div className="p-4">
                          <div className="flex gap-3">
                            <div className="bg-pioneer-gray rounded-full w-16 h-16 flex items-center justify-center">
                              <User className="h-8 w-8 text-pioneer-deep-blue" />
                            </div>
                            <div>
                              <h5 className="font-semibold">Arjun Mehta</h5>
                              <p className="text-sm">Class 9</p>
                              <p className="text-sm mt-2">Won gold medal in State-level 100m sprint competition</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-pioneer-light-blue rounded-lg overflow-hidden">
                        <div className="bg-pioneer-light-blue text-white py-2 px-4">
                          <h4 className="font-medium">National Champion</h4>
                        </div>
                        <div className="p-4">
                          <div className="flex gap-3">
                            <div className="bg-pioneer-gray rounded-full w-16 h-16 flex items-center justify-center">
                              <User className="h-8 w-8 text-pioneer-deep-blue" />
                            </div>
                            <div>
                              <h5 className="font-semibold">Priya Singh</h5>
                              <p className="text-sm">Class 10</p>
                              <p className="text-sm mt-2">National champion in Under-16 Chess Tournament</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-pioneer-deep-blue" />
                    Co-Curricular Activities
                  </CardTitle>
                  <CardDescription>
                    Nurturing creativity and diverse talents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-pioneer-gray p-5 rounded-lg">
                      <h3 className="font-semibold text-pioneer-deep-blue mb-3">Arts & Creativity</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Drawing & Painting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Craft Workshops</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Dance Classes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Music & Singing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Theater & Drama</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-pioneer-gray p-5 rounded-lg">
                      <h3 className="font-semibold text-pioneer-deep-blue mb-3">Intellectual Development</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Debate Competitions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Quiz Contests</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Science Exhibitions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Mathematics Olympiad</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Robotics Club</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-pioneer-gray p-5 rounded-lg">
                      <h3 className="font-semibold text-pioneer-deep-blue mb-3">Special Events</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Annual Day</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Sports Day</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Cultural Festivals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Field Trips</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                          <span>Educational Tours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg text-pioneer-deep-blue mb-3">Activity Schedule</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-pioneer-gray">
                            <th className="py-2 px-4 text-left">Day</th>
                            <th className="py-2 px-4 text-left">Primary (1-5)</th>
                            <th className="py-2 px-4 text-left">Middle (6-8)</th>
                            <th className="py-2 px-4 text-left">Secondary (9-10)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Monday</td>
                            <td className="py-2 px-4 border-b">Art & Craft</td>
                            <td className="py-2 px-4 border-b">Debate Club</td>
                            <td className="py-2 px-4 border-b">Science Club</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Wednesday</td>
                            <td className="py-2 px-4 border-b">Music & Dance</td>
                            <td className="py-2 px-4 border-b">Sports Activities</td>
                            <td className="py-2 px-4 border-b">Robotics Club</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Friday</td>
                            <td className="py-2 px-4 border-b">Storytelling</td>
                            <td className="py-2 px-4 border-b">Drama Club</td>
                            <td className="py-2 px-4 border-b">Career Guidance</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-pioneer-deep-blue" />
                    Photo Gallery
                  </CardTitle>
                  <CardDescription>
                    Memories captured from our events and activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Annual Day Celebrations</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-pioneer-gray rounded-lg overflow-hidden">
                            <div className="h-40 bg-pioneer-light-blue/20 flex items-center justify-center">
                              <ImageIcon className="h-16 w-16 text-pioneer-light-blue/40" />
                            </div>
                            <div className="p-3">
                              <p className="text-sm font-medium">Annual Day Performance {item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Science Exhibition</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-pioneer-gray rounded-lg overflow-hidden">
                            <div className="h-40 bg-pioneer-green/20 flex items-center justify-center">
                              <ImageIcon className="h-16 w-16 text-pioneer-green/40" />
                            </div>
                            <div className="p-3">
                              <p className="text-sm font-medium">Student Project {item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Sports Day</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-pioneer-gray rounded-lg overflow-hidden">
                            <div className="h-40 bg-pioneer-deep-blue/20 flex items-center justify-center">
                              <ImageIcon className="h-16 w-16 text-pioneer-deep-blue/40" />
                            </div>
                            <div className="p-3">
                              <p className="text-sm font-medium">Sports Activity {item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-pioneer-deep-blue" />
                    School Events
                  </CardTitle>
                  <CardDescription>
                    Upcoming and recent events at our school
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
                    <div className="space-y-4">
                      <div className="border border-pioneer-light-blue rounded-lg overflow-hidden">
                        <div className="bg-pioneer-light-blue text-white py-2 px-4 flex justify-between items-center">
                          <h4 className="font-medium">Science Fair 2025</h4>
                          <span className="text-sm bg-white text-pioneer-deep-blue px-2 py-1 rounded">May 15-16, 2025</span>
                        </div>
                        <div className="p-4">
                          <p className="mb-2">Annual science exhibition showcasing student projects from Classes 6-10</p>
                          <div className="flex gap-2 mt-3">
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">Classes 6-10</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">Main Hall</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">9:00 AM - 4:00 PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-pioneer-light-blue rounded-lg overflow-hidden">
                        <div className="bg-pioneer-light-blue text-white py-2 px-4 flex justify-between items-center">
                          <h4 className="font-medium">Annual Sports Day</h4>
                          <span className="text-sm bg-white text-pioneer-deep-blue px-2 py-1 rounded">June 5, 2025</span>
                        </div>
                        <div className="p-4">
                          <p className="mb-2">Annual sports competition featuring various athletic events and team sports</p>
                          <div className="flex gap-2 mt-3">
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">All Classes</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">School Grounds</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">8:00 AM - 3:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 mt-8">Past Events</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                          <h4 className="font-medium">Annual Cultural Fest</h4>
                          <span className="text-sm bg-white text-gray-600 px-2 py-1 rounded">March 10, 2025</span>
                        </div>
                        <div className="p-4">
                          <p className="mb-2">A celebration of art, music, dance and dramatics by talented students</p>
                          <div className="flex gap-2 mt-3">
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">All Classes</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">Auditorium</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                          <h4 className="font-medium">Inter-School Quiz Competition</h4>
                          <span className="text-sm bg-white text-gray-600 px-2 py-1 rounded">February 25, 2025</span>
                        </div>
                        <div className="p-4">
                          <p className="mb-2">Quiz competition with participation from 12 schools in the district</p>
                          <div className="flex gap-2 mt-3">
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">Classes 8-10</span>
                            <span className="text-xs bg-pioneer-gray px-2 py-1 rounded">Conference Hall</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="student" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-pioneer-deep-blue" />
                    Student Zone
                  </CardTitle>
                  <CardDescription>
                    Resources and information for our students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-pioneer-gray rounded-lg p-6 text-center">
                      <Users className="h-12 w-12 mx-auto mb-4 text-pioneer-deep-blue" />
                      <h3 className="text-lg font-semibold mb-2">Student Portal</h3>
                      <p className="mb-4">Access your timetable, homework, study materials, and class announcements</p>
                      <ButtonCustom
                        variant="primary"
                        className="mx-auto"
                        onClick={() => navigate("/auth")}
                      >
                        Log in to Student Portal
                      </ButtonCustom>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-pioneer-deep-blue mb-2">Timetable</h4>
                        <p className="text-sm">View your daily class schedule</p>
                        <p className="text-xs mt-2 text-gray-500">Login required</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-pioneer-deep-blue mb-2">Homework</h4>
                        <p className="text-sm">Access and submit your assignments</p>
                        <p className="text-xs mt-2 text-gray-500">Login required</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-pioneer-deep-blue mb-2">Study Materials</h4>
                        <p className="text-sm">Download notes, worksheets, and reference materials</p>
                        <p className="text-xs mt-2 text-gray-500">Login required</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Student Resources</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                            <span>School Library Catalog</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                            <span>Online Learning Resources</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                            <span>Exam Schedule</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                            <span>School Calendar</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                            <span>Parent-Teacher Meeting Schedule</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-pioneer-deep-blue" />
                    Contact Us
                  </CardTitle>
                  <CardDescription>
                    Get in touch with our school
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="bg-pioneer-gray rounded-lg p-4 mb-4">
                        <h3 className="font-semibold text-pioneer-deep-blue mb-3">School Address</h3>
                        <p>Pioneer School</p>
                        <p>123 Education Lane</p>
                        <p>Knowledge City, 560001</p>
                      </div>
                      
                      <div className="bg-pioneer-gray rounded-lg p-4 mb-4">
                        <h3 className="font-semibold text-pioneer-deep-blue mb-3">Contact Information</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>info@pioneerschool.edu</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>admissions@pioneerschool.edu</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>+91 12345 67890</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>+91 98765 43210</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-pioneer-gray rounded-lg p-4">
                        <h3 className="font-semibold text-pioneer-deep-blue mb-3">Office Hours</h3>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span>8:00 AM - 4:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>8:00 AM - 12:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                        <h3 className="font-semibold text-pioneer-deep-blue mb-3">Send us a Message</h3>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Your Name</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter your name" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <input 
                              type="email" 
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter your email" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter subject" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea 
                              className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
                              placeholder="Type your message here" 
                            ></textarea>
                          </div>
                          <ButtonCustom variant="primary" className="w-full">
                            Send Message
                          </ButtonCustom>
                        </form>
                      </div>
                      
                      <div className="bg-pioneer-gray rounded-lg p-4 h-[200px] flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 mx-auto mb-2 text-pioneer-deep-blue/40" />
                          <p className="text-sm">Google Map would be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="login" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LockIcon className="h-5 w-5 text-pioneer-deep-blue" />
                    Login System
                  </CardTitle>
                  <CardDescription>
                    Access personalized content with secure authentication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-pioneer-gray rounded-lg p-6 text-center">
                      <LockIcon className="h-12 w-12 mx-auto mb-4 text-pioneer-deep-blue" />
                      <h3 className="text-lg font-semibold mb-2">Secure Access Portal</h3>
                      <p className="mb-4">Sign in to access personalized dashboards for students, parents, and teachers</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ButtonCustom
                          variant="primary"
                          onClick={() => navigate("/auth")}
                        >
                          Sign In
                        </ButtonCustom>
                        <ButtonCustom
                          variant="outline"
                          onClick={() => navigate("/auth")}
                        >
                          Create Account
                        </ButtonCustom>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-pioneer-deep-blue text-white p-3">
                          <h4 className="font-medium">Student Access</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                              <span>Class timetable</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                              <span>Homework assignments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                              <span>Study materials</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-deep-blue"></div>
                              <span>Exam results</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-pioneer-light-blue text-white p-3">
                          <h4 className="font-medium">Parent Access</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-light-blue"></div>
                              <span>Attendance tracking</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-light-blue"></div>
                              <span>Fee payment</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-light-blue"></div>
                              <span>Progress reports</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-light-blue"></div>
                              <span>Teacher communications</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-pioneer-green text-white p-3">
                          <h4 className="font-medium">Teacher Access</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-green"></div>
                              <span>Class management</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-green"></div>
                              <span>Student assessments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-green"></div>
                              <span>Attendance recording</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pioneer-green"></div>
                              <span>Parent communications</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </ScrollArea>
      </Tabs>
    </div>
  );
  
  // Use the appropriate container based on screen size
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onClose}>
        <DrawerContent className="h-[90vh]">
          <DrawerHeader className="p-0">
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
          <Content />
        </DrawerContent>
      </Drawer>
    );
  }
  
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[90vw] sm:max-w-none p-0 overflow-y-auto">
        <Content />
      </SheetContent>
    </Sheet>
  );
};

export default SchoolInfoModal;
