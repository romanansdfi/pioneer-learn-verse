
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, FileText, Users, Clock } from "lucide-react";

const Dashboard: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  
  const isStudent = profile?.role === "student";
  const isParent = profile?.role === "parent";
  const isTeacher = profile?.role === "teacher";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pioneer-deep-blue">
              Welcome, {profile?.full_name || "User"}!
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              {profile && `${profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}${profile.class ? ` - Class ${profile.class}` : ""}`}
            </p>
          </div>
          <Button 
            className="mt-4 md:mt-0" 
            onClick={() => navigate('/profile')}
          >
            View/Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Dynamic content based on user role */}
          {(isStudent || isParent) && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    My Courses
                  </CardTitle>
                  <CardDescription>Track your enrolled courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="p-2 bg-slate-100 rounded-md">Mathematics</li>
                    <li className="p-2 bg-slate-100 rounded-md">Science</li>
                    <li className="p-2 bg-slate-100 rounded-md">English Literature</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => navigate('/course-view')}
                  >
                    View All Courses
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Your schedule for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Math Test</p>
                      <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Science Project Due</p>
                      <p className="text-sm text-gray-500">Friday, 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Resources
                  </CardTitle>
                  <CardDescription>Educational materials and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="p-2 bg-slate-100 rounded-md">School Handbook</li>
                    <li className="p-2 bg-slate-100 rounded-md">Study Guides</li>
                    <li className="p-2 bg-slate-100 rounded-md">Library Access</li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          {isTeacher && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    My Classes
                  </CardTitle>
                  <CardDescription>Classes you teach</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="p-2 bg-slate-100 rounded-md">Class 7 - Mathematics</li>
                    <li className="p-2 bg-slate-100 rounded-md">Class 8 - Mathematics</li>
                    <li className="p-2 bg-slate-100 rounded-md">Class 9 - Mathematics</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => navigate('/course-view')}
                  >
                    Manage Classes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Timetable
                  </CardTitle>
                  <CardDescription>Your teaching schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 7 Mathematics</p>
                      <p className="text-sm text-gray-500">Mondays, 9:00 AM - 10:30 AM</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 8 Mathematics</p>
                      <p className="text-sm text-gray-500">Tuesdays, 11:00 AM - 12:30 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Staff Notices
                  </CardTitle>
                  <CardDescription>Important information for teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Staff Meeting</p>
                      <p className="text-sm text-gray-500">Friday, 2:30 PM in the Staff Room</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Grade Submission Deadline</p>
                      <p className="text-sm text-gray-500">Next Monday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
