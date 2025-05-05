
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ButtonCustom from '../ui/button-custom';

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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60"
  },
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const getLevelColor = (level: Course['level']) => {
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden relative">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className={`${getLevelColor(course.level)} border-none`}>
            {course.level}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="text-sm text-gray-500 mb-1">{course.category}</div>
        <h3 className="text-lg font-semibold mb-2 text-pioneer-deep-blue line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500">
            <Users className="h-4 w-4" />
            <span className="text-sm">{course.students.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        
        <ButtonCustom variant="secondary" fullWidth>View Course</ButtonCustom>
      </div>
    </div>
  );
};

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-pioneer-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-pioneer-deep-blue mb-2">Featured Courses</h2>
            <p className="text-gray-600 max-w-xl">Explore our most popular courses with high ratings and engaging content</p>
          </div>
          <ButtonCustom variant="outline" className="mt-4 md:mt-0">View All Courses</ButtonCustom>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
