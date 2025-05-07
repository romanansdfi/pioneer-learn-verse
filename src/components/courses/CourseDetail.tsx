
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "react-router-dom";
import { BookOpen, FileText, Clock, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  completed?: boolean;
}

interface Resource {
  id: string;
  title: string;
  type: string;
  url: string;
}

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  score?: number;
}

interface CourseDetailProps {
  role: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ role }) => {
  const { id } = useParams<{ id: string }>();
  const isTeacher = role === "teacher";
  
  const courseName = id ? `Course ${id}` : "Mathematics";
  
  // Sample data
  const lessons: Lesson[] = [
    {
      id: "1",
      title: "Introduction to Algebra",
      duration: "45 mins",
      description: "Basic concepts of algebraic expressions.",
      completed: true
    },
    {
      id: "2",
      title: "Linear Equations",
      duration: "50 mins",
      description: "Solving one and two-step linear equations.",
      completed: true
    },
    {
      id: "3",
      title: "Quadratic Equations",
      duration: "60 mins",
      description: "Introduction to quadratic equations and their graphs.",
      completed: false
    },
    {
      id: "4",
      title: "Polynomials",
      duration: "55 mins",
      description: "Working with polynomial expressions.",
      completed: false
    }
  ];
  
  const resources: Resource[] = [
    {
      id: "1",
      title: "Algebra Basics PDF",
      type: "PDF",
      url: "#"
    },
    {
      id: "2",
      title: "Linear Equations Practice Problems",
      type: "PDF",
      url: "#"
    },
    {
      id: "3",
      title: "Introduction to Algebra Video",
      type: "Video",
      url: "#"
    }
  ];
  
  const assignments: Assignment[] = [
    {
      id: "1",
      title: "Algebra Expressions Worksheet",
      dueDate: "Oct 15, 2023",
      status: "submitted"
    },
    {
      id: "2",
      title: "Linear Equations Quiz",
      dueDate: "Oct 22, 2023",
      status: "graded",
      score: 85
    },
    {
      id: "3",
      title: "Quadratic Equations Assessment",
      dueDate: "Oct 29, 2023",
      status: "pending"
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{courseName}</CardTitle>
          <CardDescription>
            {isTeacher 
              ? "Manage your course content, assignments, and student progress" 
              : "Track your lessons, assignments, and resources"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="lessons">
                <BookOpen className="h-4 w-4 mr-2" />
                Lessons
              </TabsTrigger>
              <TabsTrigger value="resources">
                <FileText className="h-4 w-4 mr-2" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="assignments">
                <Clock className="h-4 w-4 mr-2" />
                Assignments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="lessons">
              <div className="grid gap-4">
                {lessons.map((lesson) => (
                  <Card key={lesson.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{lesson.title}</h3>
                            {lesson.completed && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Completed
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                          <p className="text-sm mt-2">
                            <Clock className="h-3 w-3 inline mr-1" /> 
                            {lesson.duration}
                          </p>
                        </div>
                        <div>
                          {isTeacher ? (
                            <Button size="sm" variant="outline">Edit Lesson</Button>
                          ) : (
                            <Button size="sm">
                              {lesson.completed ? "Review" : "Start"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {isTeacher && (
                  <Button className="mt-4">
                    Add New Lesson
                  </Button>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="grid gap-4">
                {resources.map((resource) => (
                  <Card key={resource.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">Type: {resource.type}</p>
                        </div>
                        <div>
                          {isTeacher ? (
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm">View</Button>
                            </div>
                          ) : (
                            <Button size="sm">Download</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {isTeacher && (
                  <Button className="mt-4">
                    Add New Resource
                  </Button>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="assignments">
              <div className="grid gap-4">
                {assignments.map((assignment) => (
                  <Card key={assignment.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Due: {assignment.dueDate}
                          </p>
                          <div className="mt-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              assignment.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                              assignment.status === "submitted" ? "bg-blue-100 text-blue-800" :
                              "bg-green-100 text-green-800"
                            }`}>
                              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                            </span>
                            {assignment.score && (
                              <span className="ml-2 text-sm">
                                Score: {assignment.score}%
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          {isTeacher ? (
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm">Grade</Button>
                            </div>
                          ) : (
                            <Button size="sm">
                              {assignment.status === "pending" ? "Submit" : "View"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {isTeacher && (
                  <Button className="mt-4">
                    Add New Assignment
                  </Button>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          {isTeacher && (
            <div className="mt-8">
              <Separator className="my-6" />
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Students Enrolled
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium">Alan Walker</h4>
                    <p className="text-sm text-muted-foreground">Progress: 40%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Progress: 75%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium">Michael Smith</h4>
                    <p className="text-sm text-muted-foreground">Progress: 90%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;
