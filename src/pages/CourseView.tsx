import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Clock, Users, Star, ArrowLeft } from "lucide-react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  duration: string;
  image: string;
  description?: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    category: "Development",
    level: "Beginner",
    rating: 4.8,
    students: 1542,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60",
    description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites from scratch and deploy them online."
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.7,
    students: 983,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60",
    description: "Master data analysis techniques using Python. Learn statistical methods, data visualization, machine learning basics and how to extract insights from real-world datasets."
  },
  {
    id: 3,
    title: "UX/UI Design Principles",
    instructor: "Alex Rodriguez",
    category: "Design",
    level: "Beginner",
    rating: 4.9,
    students: 1247,
    duration: "5 weeks",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    description: "Discover the principles of user experience and interface design. Create wireframes, prototypes, and learn to conduct user testing to improve your designs."
  },
  {
    id: 4,
    title: "Advanced Machine Learning",
    instructor: "Priya Sharma",
    category: "AI & ML",
    level: "Advanced",
    rating: 4.6,
    students: 742,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    description: "Dive deep into advanced machine learning algorithms and techniques. Build predictive models, implement neural networks, and work with large datasets."
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    instructor: "James Wilson",
    category: "Marketing",
    level: "Intermediate",
    rating: 4.5,
    students: 1120,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&q=60",
    description: "Learn to create comprehensive digital marketing strategies across multiple platforms. Master SEO, content marketing, social media campaigns, and performance analysis."
  },
  {
    id: 6,
    title: "Introduction to Physics",
    instructor: "Dr. Emily Barnes",
    category: "Science",
    level: "Beginner",
    rating: 4.9,
    students: 876,
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=500&q=60",
    description: "Explore the fundamental principles of physics. Learn about mechanics, thermodynamics, electricity, magnetism, and modern physics concepts with hands-on experiments."
  },
  {
    id: 7,
    title: "Advanced Mathematics",
    instructor: "Prof. Robert Chen",
    category: "Mathematics",
    level: "Advanced",
    rating: 4.7,
    students: 542,
    duration: "15 weeks",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=60",
    description: "Delve into advanced mathematical concepts including calculus, linear algebra, differential equations, and mathematical modeling with practical applications."
  },
  {
    id: 8,
    title: "English Literature",
    instructor: "Dr. Amanda Lewis",
    category: "Humanities",
    level: "Intermediate",
    rating: 4.8,
    students: 785,
    duration: "14 weeks",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=60",
    description: "Explore classic and contemporary literature through critical analysis. Study different literary periods, authors, and develop strong analytical and writing skills."
  },
];

const CourseView: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [courseData, setCourseData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If course data was passed via location state, use that
    if (location.state?.course) {
      setCourseData(location.state.course);
      setLoading(false);
      return;
    }
    
    // Otherwise try to find course by ID from params
    if (params.id) {
      const foundCourse = courses.find(c => c.id.toString() === params.id);
      if (foundCourse) {
        setCourseData(foundCourse);
      }
    } 
    
    // If no specific course, show all courses
    setLoading(false);
  }, [location, params]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Render specific course if we have data
  if (courseData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center gap-1"
            onClick={() => navigate('/course-view')}
          >
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Course Info */}
            <div className="lg:col-span-2">
              <Card>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={courseData.image} 
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getLevelColor(courseData.level)}>
                      {courseData.level}
                    </Badge>
                    <Badge variant="outline">{courseData.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{courseData.title}</CardTitle>
                  <CardDescription>Instructor: {courseData.instructor}</CardDescription>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{courseData.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{courseData.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{courseData.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="overview">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-4">
                      <p className="text-gray-700">
                        {courseData.description || "This comprehensive course covers everything you need to know about the subject. Perfect for both beginners and those looking to advance their skills."}
                      </p>
                      
                      <h3 className="font-semibold text-lg mt-6 mb-2">What you'll learn</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Master the fundamental concepts and principles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Apply theoretical knowledge to practical scenarios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Develop critical thinking and problem-solving skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Complete hands-on projects to reinforce learning</span>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="curriculum" className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Week 1-2: Introduction</h3>
                          <ul className="space-y-1 pl-5 list-disc">
                            <li>Course overview and expectations</li>
                            <li>Foundational concepts and principles</li>
                            <li>Setting up your environment</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Week 3-5: Core Concepts</h3>
                          <ul className="space-y-1 pl-5 list-disc">
                            <li>Key methodologies and frameworks</li>
                            <li>Problem-solving techniques</li>
                            <li>Hands-on exercises and projects</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Week 6-8: Advanced Topics</h3>
                          <ul className="space-y-1 pl-5 list-disc">
                            <li>Integration with real-world applications</li>
                            <li>Case studies and analysis</li>
                            <li>Final project preparation</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="instructor" className="mt-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                          {courseData.instructor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold">{courseData.instructor}</h3>
                          <p className="text-gray-600">Expert in {courseData.category}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        {courseData.instructor} is a renowned expert in {courseData.category} with over 10 years of experience 
                        in both industry and academia. They have helped thousands of students master complex concepts 
                        through their engaging teaching style and practical approach to learning.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Right column - Enrollment & Details */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Course Enrollment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-100 rounded-md">
                    <p className="font-semibold">Course Access</p>
                    <p className="text-sm text-gray-600">Full lifetime access</p>
                  </div>
                  
                  <div className="p-4 bg-slate-100 rounded-md">
                    <p className="font-semibold">Course Duration</p>
                    <p className="text-sm text-gray-600">{courseData.duration}</p>
                  </div>
                  
                  <div className="p-4 bg-slate-100 rounded-md">
                    <p className="font-semibold">Certificate</p>
                    <p className="text-sm text-gray-600">Earn a certificate upon completion</p>
                  </div>
                  
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // All courses view
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-pioneer-deep-blue mb-2">All Courses</h1>
            <p className="text-gray-600">
              {profile?.role === "teacher" ? 
                "Manage your courses and view available resources" : 
                "Browse all available courses and enroll in your preferred programs"
              }
            </p>
          </div>
          
          {profile?.role === "teacher" && (
            <Button className="mt-4 md:mt-0">
              Create New Course
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden card-hover">
              <div className="h-40 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>By {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => navigate(`/course-view/${course.id}`, { 
                    state: { course } 
                  })}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseView;
