
import React from 'react';
import { Clock, Users, Star, ArrowRight, BookOpen, Code, Palette, BarChart } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
  gradient: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to deployment",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 15420,
    rating: 4.9,
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=240&q=60",
    category: "Development",
    level: "Beginner",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Master Python, pandas, NumPy, scikit-learn, and deep learning frameworks",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    students: 8930,
    rating: 4.8,
    price: 399,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=240&q=60",
    category: "Data Science",
    level: "Intermediate",
    icon: <BarChart className="w-6 h-6" />,
    gradient: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with Figma, Adobe XD, and design principles",
    instructor: "Emma Rodriguez",
    duration: "10 weeks",
    students: 12300,
    rating: 4.9,
    price: 249,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1558618047-e5c7ac0e7d1a?auto=format&fit=crop&w=400&h=240&q=60",
    category: "Design",
    level: "Beginner",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-600 to-rose-600"
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const discount = course.originalPrice ? Math.round((1 - course.price / course.originalPrice) * 100) : 0;

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image with overlay */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10`}></div>
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Course level badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
            course.level === 'Beginner' ? 'bg-green-500' :
            course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
            {course.level}
          </span>
        </div>

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </span>
          </div>
        )}

        {/* Hover overlay content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <ButtonCustom 
            variant="accent" 
            className="bg-white text-pioneer-deep-blue hover:bg-white/90 transform scale-90 group-hover:scale-100 transition-transform duration-300"
            leftIcon={<BookOpen className="w-4 h-4" />}
          >
            View Course
          </ButtonCustom>
        </div>
      </div>

      <div className="p-6">
        {/* Category and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${course.gradient} text-white mr-3`}>
              {course.icon}
            </div>
            <span className="text-sm font-medium text-gray-600">{course.category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-pioneer-deep-blue mb-3 line-clamp-2 group-hover:text-pioneer-light-blue transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <p className="text-sm text-gray-500 mb-4 font-medium">
          by {course.instructor}
        </p>

        {/* Course stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pioneer-deep-blue">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          
          <ButtonCustom 
            size="sm" 
            className="group-hover:shadow-lg transition-shadow"
            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          >
            Enroll
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pioneer-light-blue/10 rounded-full text-pioneer-light-blue text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Featured Courses
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pioneer-deep-blue mb-6">
            Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pioneer-light-blue to-pioneer-green">Best</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular courses designed by industry experts. 
            Start your learning journey with hands-on projects and real-world applications.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <ButtonCustom 
            variant="outline" 
            size="lg"
            className="border-2 border-pioneer-light-blue text-pioneer-light-blue hover:bg-pioneer-light-blue hover:text-white transition-all duration-300 px-8 py-4"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            View All Courses
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
