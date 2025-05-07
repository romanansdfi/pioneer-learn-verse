
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Chart, Link as LinkIcon, Bell } from "lucide-react";

interface QuickLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  color?: string;
}

const QuickLinkButton: React.FC<QuickLinkProps> = ({ title, href, icon, color = "bg-slate-100" }) => (
  <Button 
    variant="outline" 
    className={cn("flex flex-col h-24 w-full items-center justify-center gap-2", color)} 
    asChild
  >
    <Link to={href}>
      {icon}
      <span>{title}</span>
    </Link>
  </Button>
);

interface QuickLinksProps {
  role: "student" | "parent" | "teacher" | string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ role }) => {
  // Define links based on user role
  const getLinks = () => {
    const commonLinks = [
      { title: "Calendar", href: "/calendar", icon: <Bell className="h-6 w-6" />, color: "bg-amber-50" },
      { title: "Resources", href: "/resources", icon: <LinkIcon className="h-6 w-6" />, color: "bg-green-50" },
    ];

    if (role === "student") {
      return [
        ...commonLinks,
        { title: "Assignments", href: "/assignments", icon: <Chart className="h-6 w-6" />, color: "bg-blue-50" },
        { title: "Library", href: "/library", icon: <Bell className="h-6 w-6" />, color: "bg-purple-50" },
      ];
    }

    if (role === "parent") {
      return [
        ...commonLinks,
        { title: "Fees", href: "/fees", icon: <Chart className="h-6 w-6" />, color: "bg-pink-50" },
        { title: "Attendance", href: "/attendance", icon: <Bell className="h-6 w-6" />, color: "bg-orange-50" },
      ];
    }

    if (role === "teacher") {
      return [
        ...commonLinks,
        { title: "Classes", href: "/classes", icon: <Chart className="h-6 w-6" />, color: "bg-blue-50" },
        { title: "Reports", href: "/reports", icon: <Bell className="h-6 w-6" />, color: "bg-purple-50" },
      ];
    }

    return commonLinks;
  };

  const links = getLinks();

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link) => (
            <QuickLinkButton 
              key={link.title} 
              title={link.title} 
              href={link.href} 
              icon={link.icon} 
              color={link.color} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickLinks;
