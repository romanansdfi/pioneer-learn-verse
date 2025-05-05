
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard: React.FC = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-pioneer-deep-blue">
            Welcome, {profile?.full_name || "Student"}!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {profile && `${profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}${profile.class ? ` - Class ${profile.class}` : ""}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>Track your enrolled courses</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You have no courses enrolled yet.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your schedule for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No upcoming events this week.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Recent school announcements</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No new announcements.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
