
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ButtonCustom from '../ui/button-custom';
import { useNavigate } from 'react-router-dom';

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

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const navigate = useNavigate();
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

  const handleViewCourse = () => {
    navigate(`/course-view/${course.id}`, { 
      state: { course }
    });
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
        
        <ButtonCustom variant="secondary" fullWidth onClick={handleViewCourse}>
          View Course
        </ButtonCustom>
      </div>
    </div>
  );
};

const FeaturedCourses: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-pioneer-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-pioneer-deep-blue mb-2">Featured Courses</h2>
            <p className="text-gray-600 max-w-xl">Explore our most popular courses with high ratings and engaging content</p>
          </div>
          <ButtonCustom 
            variant="outline" 
            className="mt-4 md:mt-0"
            onClick={() => navigate('/course-view')}
          >
            View All Courses
          </ButtonCustom>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
