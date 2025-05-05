
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Card } from '@/components/ui/card';
import {
  Book,
  Clock,
  Calendar,
  Bell,
  Search,
  Star,
  BarChart3,
  CheckCircle,
  File
} from 'lucide-react';
import ButtonCustom from '../components/ui/button-custom';
import { Progress } from '@/components/ui/progress';

interface CourseProgress {
  id: number;
  title: string;
  progress: number;
  category: string;
  instructor: string;
  nextLesson: string;
  image: string;
}

interface Deadline {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  type: 'assignment' | 'exam' | 'project';
}

interface Recommendation {
  id: number;
  title: string;
  instructor: string;
  level: string;
  rating: number;
  image: string;
}

const courseProgress: CourseProgress[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 65,
    category: "Development",
    instructor: "Sarah Johnson",
    nextLesson: "CSS Flexbox",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "UX/UI Design Principles",
    progress: 32,
    category: "Design",
    instructor: "Alex Rodriguez",
    nextLesson: "User Research",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Python for Data Science",
    progress: 18,
    category: "Data Science",
    instructor: "Michael Chen",
    nextLesson: "NumPy Arrays",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60"
  }
];

const deadlines: Deadline[] = [
  {
    id: 1,
    title: "Final Project Submission",
    course: "Web Development",
    dueDate: "2025-05-15",
    type: "project"
  },
  {
    id: 2,
    title: "Mid-term Exam",
    course: "UX/UI Design",
    dueDate: "2025-05-10",
    type: "exam"
  },
  {
    id: 3,
    title: "Weekly Quiz",
    course: "Python for Data Science",
    dueDate: "2025-05-07",
    type: "assignment"
  }
];

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    instructor: "David Wilson",
    level: "Intermediate",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Database Management Systems",
    instructor: "Lisa Kumar",
    level: "Beginner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60"
  }
];

const Dashboard: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };
  
  const getDaysLeft = (dateString: string) => {
    const today = new Date();
    const dueDate = new Date(dateString);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const getDeadlineIcon = (type: Deadline['type']) => {
    switch (type) {
      case 'assignment':
        return <File className="h-5 w-5 text-pioneer-light-blue" />;
      case 'exam':
        return <File className="h-5 w-5 text-red-500" />;
      case 'project':
        return <File className="h-5 w-5 text-purple-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h1 className="text-2xl font-bold text-pioneer-deep-blue">Dashboard</h1>
              
              <div className="flex mt-4 sm:mt-0">
                <div className="mr-4 relative">
                  <button className="rounded-full bg-gray-100 p-2">
                    <Search className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
                <div className="relative">
                  <button className="rounded-full bg-gray-100 p-2">
                    <Bell className="h-5 w-5 text-gray-500" />
                  </button>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Welcome back, Student</h2>
                <p className="text-gray-600">Continue where you left off</p>
              </div>
              <ButtonCustom variant="secondary">Browse Courses</ButtonCustom>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 shadow-sm">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Book className="h-6 w-6 text-pioneer-light-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-800">3</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-sm">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-pioneer-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-800">7</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-sm">
              <div className="flex items-center">
                <div className="rounded-full bg-yellow-100 p-3 mr-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Hours Spent</p>
                  <p className="text-2xl font-bold text-gray-800">42</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Progress */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Progress</h3>
                <div className="space-y-4">
                  {courseProgress.map((course) => (
                    <Card key={course.id} className="p-4 shadow-sm">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-32 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-pioneer-deep-blue">{course.title}</h4>
                              <p className="text-sm text-gray-600">{course.category} • {course.instructor}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <span className="text-pioneer-deep-blue font-semibold">{course.progress}%</span>
                            </div>
                          </div>
                          <Progress value={course.progress} className="h-2 mb-4" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Book className="h-4 w-4 text-gray-500 mr-1" />
                              <span className="text-sm text-gray-600">Next: {course.nextLesson}</span>
                            </div>
                            <ButtonCustom variant="secondary" size="sm">Continue</ButtonCustom>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Deadlines */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Upcoming Deadlines</h3>
                  <a href="#" className="text-sm text-pioneer-light-blue hover:underline">View all</a>
                </div>
                <Card className="shadow-sm divide-y">
                  {deadlines.map((deadline) => {
                    const daysLeft = getDaysLeft(deadline.dueDate);
                    return (
                      <div key={deadline.id} className="p-4 hover:bg-gray-50">
                        <div className="flex items-start">
                          {getDeadlineIcon(deadline.type)}
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-800">{deadline.title}</h4>
                            <p className="text-sm text-gray-600">{deadline.course}</p>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                              <span className="text-xs text-gray-500">
                                {formatDate(deadline.dueDate)}
                                <span className={`ml-1 font-medium ${daysLeft <= 3 ? 'text-red-500' : daysLeft <= 7 ? 'text-yellow-500' : 'text-green-500'}`}>
                                  ({daysLeft} days left)
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Card>
              </div>
              
              {/* Recommended Courses */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Recommended</h3>
                  <a href="#" className="text-sm text-pioneer-light-blue hover:underline">View all</a>
                </div>
                <div className="space-y-4">
                  {recommendations.map((course) => (
                    <Card key={course.id} className="p-4 shadow-sm">
                      <div className="flex">
                        <div className="h-20 w-20 rounded-md overflow-hidden">
                          <img 
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <h4 className="font-medium text-gray-800 line-clamp-2">{course.title}</h4>
                          <p className="text-xs text-gray-600">{course.instructor}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600 ml-1">{course.rating}</span>
                            <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded ml-2">
                              {course.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-4">
                  <ButtonCustom variant="outline" fullWidth>View All Recommendations</ButtonCustom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
