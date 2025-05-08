
import React, { useState } from 'react';
import { 
  Home, BookOpen, User, Award, Activity, 
  Image, Calendar, UserRound, Phone, Lock 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ComprehensiveSchoolInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  
  return (
    <div className="w-full h-full">
      <Tabs 
        defaultValue="welcome" 
        className="w-full h-full flex flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-5 md:grid-cols-10 bg-slate-100 mb-4 rounded-md overflow-x-auto">
          <TabsTrigger value="welcome" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Home className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Welcome</span>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <BookOpen className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Courses</span>
          </TabsTrigger>
          <TabsTrigger value="principal" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <User className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Principal</span>
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Award className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Sports</span>
          </TabsTrigger>
          <TabsTrigger value="activities" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Activity className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Activities</span>
          </TabsTrigger>
          <TabsTrigger value="gallery" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Image className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Gallery</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Events</span>
          </TabsTrigger>
          <TabsTrigger value="student" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <UserRound className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Student</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Phone className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Contact</span>
          </TabsTrigger>
          <TabsTrigger value="login" className="flex flex-col items-center py-2 text-xs md:text-sm">
            <Lock className="h-4 w-4 md:h-5 md:w-5 mb-1" />
            <span>Login</span>
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1 overflow-y-auto px-1">
          <TabsContent value="welcome" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Welcome to Pioneer Academy</CardTitle>
                <CardDescription>Shaping young minds from Class 1 to 10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/f436f794-4d90-41f3-99aa-aa0b42ebe828.png" 
                    alt="School Building" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  Welcome to Pioneer Academy, where we are committed to nurturing and developing young minds through a holistic approach to education. Our institution caters to students from Class 1 to 10, providing a strong foundation for their academic and personal growth.
                </p>
                <p className="text-gray-700">
                  At Pioneer Academy, we believe in creating an environment that fosters creativity, critical thinking, and character development. Our dedicated faculty and state-of-the-art facilities ensure that every student receives the attention and resources they need to excel.
                </p>
                <p className="text-gray-700">
                  We invite you to explore our school through this interactive platform and discover what makes Pioneer Academy a place where learning comes alive and futures are built.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Courses Offered</CardTitle>
                <CardDescription>Class-wise subject list aligned with CBSE/State Board</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Classes 1-5 (Primary)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>English</li>
                      <li>Mathematics</li>
                      <li>Environmental Studies / Science</li>
                      <li>Hindi/Tamil/Regional Language</li>
                      <li>Moral Science</li>
                      <li>Art & Craft</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Classes 6-8 (Middle School)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>English</li>
                      <li>Mathematics</li>
                      <li>Science</li>
                      <li>Social Science</li>
                      <li>Hindi/Tamil/Regional Language</li>
                      <li>Computer Science</li>
                      <li>Moral Science</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Classes 9-10 (Secondary)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>English</li>
                      <li>Mathematics</li>
                      <li>Science (Physics, Chemistry, Biology)</li>
                      <li>Social Science (History, Geography, Civics, Economics)</li>
                      <li>Hindi/Tamil/Regional Language</li>
                      <li>Computer Science</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold mb-2">Syllabus Information</h3>
                    <p className="text-gray-700">Our curriculum is aligned with CBSE/State Board standards, ensuring comprehensive coverage of subjects and preparing students for board examinations. Regular assessments and feedback mechanisms help track student progress and identify areas for improvement.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="principal" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Principal's Message</CardTitle>
                <CardDescription>A note from our visionary leader</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden border-4 border-pioneer-light-blue">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                        alt="Principal" 
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                      <p className="text-gray-600">Ph.D. Education Leadership</p>
                      <p className="text-gray-600">20+ Years Experience</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <p className="text-gray-700 italic">
                      "Dear Students, Parents, and Visitors,
                    </p>
                    <p className="text-gray-700">
                      It is my privilege to lead Pioneer Academy, an institution committed to academic excellence and character development. Our goal is to nurture well-rounded individuals who are not only academically proficient but also possess the values and skills needed to succeed in life.
                    </p>
                    <p className="text-gray-700">
                      At Pioneer Academy, we believe that every child is unique and deserves an education that caters to their individual strengths and interests. Our dedicated faculty works tirelessly to create a supportive learning environment where students can explore, question, and grow.
                    </p>
                    <p className="text-gray-700">
                      We partner with parents in this educational journey and welcome your involvement in school activities. Together, we can ensure that our students receive the guidance and encouragement they need to realize their full potential.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Warmly,
                      <br />
                      Dr. Sarah Johnson
                      <br />
                      Principal, Pioneer Academy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sports" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Sports & Achievements</CardTitle>
                <CardDescription>Celebrating athletic excellence and team spirit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Sports Programs</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Athletics</h4>
                          <p className="text-sm text-gray-600">Track & field events with dedicated training</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Football</h4>
                          <p className="text-sm text-gray-600">School team competes in district leagues</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Basketball</h4>
                          <p className="text-sm text-gray-600">Indoor court with professional coaching</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Kho-Kho</h4>
                          <p className="text-sm text-gray-600">Traditional sport with regional tournaments</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Cricket</h4>
                          <p className="text-sm text-gray-600">School team with regular practice sessions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-pioneer-deep-blue rounded-full p-2 text-white">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Yoga</h4>
                          <p className="text-sm text-gray-600">Daily practice for mental and physical wellbeing</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold border-b pb-2 mb-4">Proud Moments</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-pioneer-light-blue/20 to-pioneer-green/20 p-4 rounded-lg border border-pioneer-light-blue/30">
                        <h4 className="font-semibold text-pioneer-deep-blue">State Level Athletics Champions</h4>
                        <p className="text-sm text-gray-700 mt-1">Our relay team won gold at the State Athletics Meet 2024</p>
                        <div className="mt-2 flex items-center gap-2">
                          <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                            alt="Athletics team" className="w-12 h-12 rounded-full object-cover" />
                          <span className="text-sm font-medium">Team: Rohan, Aisha, Peter, Priya</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pioneer-light-blue/20 to-pioneer-green/20 p-4 rounded-lg border border-pioneer-light-blue/30">
                        <h4 className="font-semibold text-pioneer-deep-blue">District Basketball Tournament</h4>
                        <p className="text-sm text-gray-700 mt-1">Runner-up in the Inter-School Basketball Championship</p>
                        <div className="mt-2 flex items-center gap-2">
                          <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                            alt="Basketball team" className="w-12 h-12 rounded-full object-cover" />
                          <span className="text-sm font-medium">Class 10 Boys Basketball Team</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pioneer-light-blue/20 to-pioneer-green/20 p-4 rounded-lg border border-pioneer-light-blue/30">
                        <h4 className="font-semibold text-pioneer-deep-blue">National Yoga Championship</h4>
                        <p className="text-sm text-gray-700 mt-1">Meera Shah (Class 8) secured 1st position in Under-14 category</p>
                        <div className="mt-2 flex items-center gap-2">
                          <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                            alt="Yoga champion" className="w-12 h-12 rounded-full object-cover" />
                          <span className="text-sm font-medium">Individual Achievement: Meera Shah</span>
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
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Co-Curricular Activities</CardTitle>
                <CardDescription>Nurturing creativity, confidence, and collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <path d="M12 19c0-4.4-3.6-8-8-8m16 0c-1.7 0-3.4.3-5 1m-5 9a14 14 0 0 0 7.1-1.2 4 4 0 0 0 2.9-3.8c0-1.6-1-3.1-2.5-3.7a14 14 0 0 0-11 0c-1.5.6-2.5 2-2.5 3.7a4 4 0 0 0 3 3.8c2 .6 4.4 1.2 7 1.2Z" />
                        <path d="M12 19v3" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Drawing & Art</h3>
                    <p className="text-gray-600 text-sm">Weekly classes for all age groups with annual exhibitions to showcase student artwork.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                        <circle cx="17" cy="7" r="5" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Singing</h3>
                    <p className="text-gray-600 text-sm">Vocal training, choir groups, and opportunities to perform at school functions.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Dance</h3>
                    <p className="text-gray-600 text-sm">Classical, folk, and contemporary dance forms taught by professional instructors.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12Z" />
                        <path d="M3 8h4" />
                        <path d="M3 12h4" />
                        <path d="M3 16h4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Debate</h3>
                    <p className="text-gray-600 text-sm">Regular debates on current affairs and social issues to develop public speaking skills.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Quiz</h3>
                    <p className="text-gray-600 text-sm">Inter-house and inter-school quiz competitions covering various subjects.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m9 16 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Annual Day</h3>
                    <p className="text-gray-600 text-sm">Yearly cultural extravaganza showcasing students' talents through performances.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-pioneer-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Field Trips</h3>
                    <p className="text-gray-600 text-sm">Educational excursions to museums, historical sites, and nature reserves.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow col-span-1 md:col-span-3">
                    <div className="bg-pioneer-green/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 text-pioneer-deep-blue">Activity Schedule</h3>
                      <p className="text-gray-700">Co-curricular activities are scheduled throughout the week during designated periods. Students are encouraged to participate in at least two activities of their choice each academic year. Special workshops and training camps are also organized during vacations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Gallery</CardTitle>
                <CardDescription>Capturing moments from school events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-pioneer-deep-blue">Science Fair 2024</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Science Fair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Science Fair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1581093199935-6b9748df59c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Science Fair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1581093196277-9f6c3d111dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Science Fair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-pioneer-deep-blue">Annual Day 2023</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Annual Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1559060680-7bd776143d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Annual Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Annual Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Annual Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-pioneer-deep-blue">Independence Day 2023</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Independence Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1574720179472-7e9fa1grafd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Independence Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1601102468235-e605353889ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Independence Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg aspect-square">
                        <img src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                          alt="Independence Day" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Events</CardTitle>
                <CardDescription>Past and upcoming school events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold mb-3 border-b pb-2">Upcoming Events</h3>
                      <div className="space-y-4">
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-pioneer-light-blue text-white rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">15</div>
                              <div className="text-xs">May</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Annual Sports Day</h4>
                              <p className="text-sm text-gray-600 mt-1">School playground, 9:00 AM - 4:00 PM</p>
                              <p className="text-sm mt-2">Join us for a day of athletic competitions, team events, and sports demonstrations.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-pioneer-light-blue text-white rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">22</div>
                              <div className="text-xs">May</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Parent-Teacher Meeting</h4>
                              <p className="text-sm text-gray-600 mt-1">School auditorium, 10:00 AM - 1:00 PM</p>
                              <p className="text-sm mt-2">Discussion of academic progress and addressing parents' concerns.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-pioneer-light-blue text-white rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">10</div>
                              <div className="text-xs">Jun</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Summer Camp Registration</h4>
                              <p className="text-sm text-gray-600 mt-1">Online and on-campus registration opens</p>
                              <p className="text-sm mt-2">Two-week summer camp featuring sports, arts, and educational activities.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold mb-3 border-b pb-2">Past Events</h3>
                      <div className="space-y-4">
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">20</div>
                              <div className="text-xs">Apr</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Earth Day Celebration</h4>
                              <p className="text-sm text-gray-600 mt-1">Tree planting and awareness campaigns</p>
                              <p className="text-sm mt-2">Students participated in environmental conservation activities.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">5</div>
                              <div className="text-xs">Apr</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Science Exhibition</h4>
                              <p className="text-sm text-gray-600 mt-1">School hall, 9:00 AM - 3:00 PM</p>
                              <p className="text-sm mt-2">Students showcased innovative science projects and experiments.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center min-w-16">
                              <div className="text-xl font-bold">15</div>
                              <div className="text-xs">Mar</div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Inter-School Debate Competition</h4>
                              <p className="text-sm text-gray-600 mt-1">Pioneer Academy secured first place</p>
                              <p className="text-sm mt-2">Our school debate team won against 10 participating schools.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-pioneer-green/10 p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-pioneer-deep-blue mb-2">Academic Calendar</h4>
                    <p className="text-gray-700 text-sm">The complete academic calendar for 2024-25 is available in the Student Zone after login. It includes all scheduled events, examinations, holidays, and important dates.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="student" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Student Zone</CardTitle>
                <CardDescription>Access to learning resources and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-pioneer-light-blue/10 rounded-lg p-6 text-center">
                  <Lock className="w-12 h-12 mx-auto mb-4 text-pioneer-deep-blue" />
                  <h3 className="text-xl font-bold mb-2">Login Required</h3>
                  <p className="text-gray-700 mb-4">Please sign in to access the Student Zone features including:</p>
                  <ul className="text-left max-w-sm mx-auto space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-pioneer-deep-blue text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span>Class Timetable</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-pioneer-deep-blue text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span>Homework Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-pioneer-deep-blue text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span>Class Announcements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-pioneer-deep-blue text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span>Study Materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-pioneer-deep-blue text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span>Assessment Results</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/auth">
                      <button className="bg-pioneer-deep-blue text-white px-5 py-2 rounded-md hover:bg-pioneer-deep-blue/90 transition-colors">
                        Sign In
                      </button>
                    </a>
                    <a href="/auth">
                      <button className="bg-white border border-pioneer-deep-blue text-pioneer-deep-blue px-5 py-2 rounded-md hover:bg-pioneer-deep-blue/10 transition-colors">
                        Register
                      </button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Contact Us</CardTitle>
                <CardDescription>Reach out to Pioneer Academy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">School Address</h3>
                      <p className="text-gray-700">
                        Pioneer Academy<br />
                        123 Education Street<br />
                        Knowledge City, State 12345<br />
                        Country
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-gray-700">
                          <Phone className="w-5 h-5 text-pioneer-deep-blue" />
                          <span>+1 (123) 456-7890</span>
                        </p>
                        <p className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pioneer-deep-blue">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          <span>info@pioneeracademy.edu</span>
                        </p>
                        <p className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pioneer-deep-blue">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span>Office: +1 (123) 456-7891</span>
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Monday - Friday</td>
                            <td className="py-2 text-right">8:00 AM - 4:00 PM</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Saturday</td>
                            <td className="py-2 text-right">8:00 AM - 12:00 PM</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium">Sunday & Holidays</td>
                            <td className="py-2 text-right">Closed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Form</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Name</label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <input 
                            type="email" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                          placeholder="Message subject"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea 
                          rows={5}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue" 
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="bg-pioneer-deep-blue text-white px-5 py-2 rounded-md hover:bg-pioneer-deep-blue/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <div className="border rounded-lg overflow-hidden h-64 bg-gray-100">
                    {/* Placeholder for Google Map */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto text-gray-400 mb-2">
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                        </svg>
                        <p className="text-gray-600">Google Map will be displayed here</p>
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
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">Login System</CardTitle>
                <CardDescription>Secure access for students, parents, and teachers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">User Roles</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-pioneer-light-blue/10 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                              <path d="M12 3 8 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2l-4-3Z" />
                              <circle cx="12" cy="10" r="3" />
                              <path d="M6.5 15a.5.5 0 0 0-.5.5V16h12v-.5a.5.5 0 0 0-.5-.5c-.044 0-8.956 0-9 0Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold">Student Account</h4>
                            <p className="text-sm text-gray-600 mt-1">Access to timetable, assignments, study materials, and academic progress.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-pioneer-light-blue/10 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                              <circle cx="8" cy="16" r="5" />
                              <line x1="8.5" y1="16" x2="12.5" y2="13" />
                              <line x1="12.5" y1="16" x2="8.5" y2="13" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold">Parent Account</h4>
                            <p className="text-sm text-gray-600 mt-1">Monitor child's performance, attendance, and communication with teachers.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-pioneer-light-blue/10 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pioneer-light-blue">
                              <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                              <path d="M12 8v1" />
                              <path d="M12 12v7" />
                              <path d="M3 12a8.8 8.8 0 0 0 4 7" />
                              <path d="M17 12a8.8 8.8 0 0 1-4 7" />
                              <path d="M2 9.5C5 11 7 12 12 12s7-1 10-2.5" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold">Teacher Account</h4>
                            <p className="text-sm text-gray-600 mt-1">Manage class information, upload resources, and track student progress.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Login / Register</h3>
                      <p className="text-gray-700 mb-4">To access the login system, please visit our authentication page where you can sign in or register for a new account.</p>
                      <div className="space-x-4">
                        <a href="/auth">
                          <button className="bg-pioneer-deep-blue text-white px-5 py-2 rounded-md hover:bg-pioneer-deep-blue/90 transition-colors">
                            Go to Login Page
                          </button>
                        </a>
                      </div>
                    </div>
                    
                    <div className="bg-pioneer-green/10 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-pioneer-deep-blue mb-2">Authentication Security</h4>
                      <p className="text-gray-700 text-sm">Our login system is powered by Supabase, ensuring secure authentication and data protection. All personal information is encrypted and stored safely according to privacy regulations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default ComprehensiveSchoolInfo;
