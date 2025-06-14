
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, FileText, Users, Clock } from "lucide-react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pioneer-deep-blue">
              Welcome to Your Dashboard!
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Explore your courses and resources
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Courses
              </CardTitle>
              <CardDescription>Browse available courses</CardDescription>
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
                Schedule
              </CardTitle>
              <CardDescription>Your daily schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-slate-100 rounded-md">
                  <p className="font-medium">Math Class</p>
                  <p className="text-sm text-gray-500">Today, 10:00 AM</p>
                </div>
                <div className="p-2 bg-slate-100 rounded-md">
                  <p className="font-medium">Science Lab</p>
                  <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
