import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, FileText, Users, Bell, BarChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import NotificationPanel, { Notification } from "@/components/notifications/NotificationPanel";
import QuickLinks from "@/components/dashboard/QuickLinks";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import AttendanceChart from "@/components/dashboard/AttendanceChart";

const Dashboard: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const isStudent = profile?.role === "student";
  const isParent = profile?.role === "parent";
  const isTeacher = profile?.role === "teacher";

  // Sample notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Assignment",
      message: "Math homework due tomorrow",
      date: new Date(),
      read: false,
      type: "info"
    },
    {
      id: "2",
      title: "Upcoming Test",
      message: "Science test scheduled for next Friday",
      date: new Date(),
      read: false,
      type: "warning"
    },
    {
      id: "3",
      title: "School Event",
      message: "Annual sports day this weekend",
      date: new Date(),
      read: true,
      type: "event"
    }
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({...n, read: true})));
  };

  // Sample performance data for charts
  const performanceData = [
    { name: "Excellent", value: 40, color: "#2ECC71" },
    { name: "Good", value: 30, color: "#3498DB" },
    { name: "Average", value: 20, color: "#F1C40F" },
    { name: "Needs Improvement", value: 10, color: "#E74C3C" }
  ];

  // Sample attendance data
  const attendanceData = [
    { subject: "Math", present: 18, total: 20, percentage: 90 },
    { subject: "Science", present: 17, total: 20, percentage: 85 },
    { subject: "English", present: 19, total: 20, percentage: 95 },
    { subject: "History", present: 16, total: 20, percentage: 80 },
    { subject: "Art", present: 18, total: 20, percentage: 90 }
  ];

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
          <div className="flex items-center mt-4 md:mt-0 gap-2">
            <NotificationPanel 
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
              onMarkAllAsRead={handleMarkAllAsRead}
            />
            <Button 
              onClick={() => navigate('/profile')}
            >
              View/Edit Profile
            </Button>
          </div>
        </div>

        <QuickLinks role={profile?.role || ""} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Student Dashboard */}
          {isStudent && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Today's Schedule
                  </CardTitle>
                  <CardDescription>Your classes for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Mathematics</p>
                      <p className="text-sm text-gray-500">09:00 AM - 10:30 AM</p>
                    </li>
                    <li className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Science</p>
                      <p className="text-sm text-gray-500">11:00 AM - 12:30 PM</p>
                    </li>
                    <li className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">English Literature</p>
                      <p className="text-sm text-gray-500">02:00 PM - 03:30 PM</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <AttendanceChart 
                title="Attendance by Subject" 
                description="Your attendance percentage for each subject"
                data={attendanceData}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Assignments Due
                  </CardTitle>
                  <CardDescription>Upcoming homework deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Math Problems</p>
                      <p className="text-sm text-gray-500">Due tomorrow</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Science Report</p>
                      <p className="text-sm text-gray-500">Due Friday</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">History Essay</p>
                      <p className="text-sm text-gray-500">Due next Monday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Parent Dashboard */}
          {isParent && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Child's Attendance
                  </CardTitle>
                  <CardDescription>Overall attendance report</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Last Week</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">95% attendance</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">This Month</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">92% attendance</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Overall</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">90% attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <PerformanceChart 
                title="Academic Performance" 
                description="Performance distribution across subjects"
                data={performanceData}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>School calendar and important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Parent-Teacher Meeting</p>
                      <p className="text-sm text-gray-500">This Friday, 4:00 PM</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Annual Day</p>
                      <p className="text-sm text-gray-500">December 20th</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Report Card Day</p>
                      <p className="text-sm text-gray-500">December 15th</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Teacher Dashboard */}
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
                    <Bell className="h-5 w-5" />
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
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 9 Mathematics</p>
                      <p className="text-sm text-gray-500">Wednesdays, 2:00 PM - 3:30 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Class Performance
                  </CardTitle>
                  <CardDescription>Average scores by class</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 7</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">85% average score</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 8</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">78% average score</p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                      <p className="font-medium">Class 9</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">82% average score</p>
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
