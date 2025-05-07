
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import CourseDetail from "@/components/courses/CourseDetail";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const navigate = useNavigate();
  
  // If we have an ID, show the detailed course view
  if (id) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="pt-20 pb-8 px-4 md:px-8 lg:px-16">
          <Button 
            variant="outline"
            className="mb-4"
            onClick={() => navigate('/course-view')}
          >
            ← Back to Courses
          </Button>
          <CourseDetail role={profile?.role || ""} />
        </div>
      </div>
    );
  }
  
  // Define sample courses
  const courses = [
    {
      id: "1",
      title: "Mathematics",
      description: "Algebra, geometry, and calculus for grades 9-10",
      progress: profile?.role === "student" ? 65 : null,
      teacher: "Mrs. Johnson",
      students: 32
    },
    {
      id: "2",
      title: "Science",
      description: "Physics, chemistry, and biology fundamentals",
      progress: profile?.role === "student" ? 42 : null,
      teacher: "Mr. Roberts",
      students: 28
    },
    {
      id: "3",
      title: "English Literature",
      description: "Classic literature analysis and creative writing",
      progress: profile?.role === "student" ? 88 : null,
      teacher: "Ms. Davis",
      students: 30
    },
    {
      id: "4",
      title: "History",
      description: "World history from ancient civilizations to modern times",
      progress: profile?.role === "student" ? 55 : null,
      teacher: "Mr. Adams",
      students: 26
    }
  ];

  const isTeacher = profile?.role === "teacher";
  const isStudent = profile?.role === "student";
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pioneer-deep-blue">
              {isTeacher ? "Manage Courses" : "My Courses"}
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              {isTeacher ? "Create, edit and manage your courses" : "View and track your enrolled courses"}
            </p>
          </div>
          {isTeacher && (
            <Button className="mt-4 md:mt-0">
              Create New Course
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {isStudent && course.progress !== null && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {isTeacher && (
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Students:</strong> {course.students}</p>
                    <p className="text-sm"><strong>Status:</strong> <span className="text-green-600">Active</span></p>
                  </div>
                )}
                
                {!isTeacher && !isStudent && (
                  <p className="text-sm"><strong>Teacher:</strong> {course.teacher}</p>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate(`/course-view/${course.id}`)}
                >
                  {isTeacher ? "Manage Course" : "View Course"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseView;
