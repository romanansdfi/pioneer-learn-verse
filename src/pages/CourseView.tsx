
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Card } from '@/components/ui/card';
import ButtonCustom from '../components/ui/button-custom';
import { Separator } from '@/components/ui/separator';
import {
  Book,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Play,
  Users,
  Video
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz';
  isCompleted: boolean;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "1h 45m",
    lessons: [
      { id: 1, title: "Welcome to the Course", duration: "5m", type: "video", isCompleted: true },
      { id: 2, title: "Getting Started with HTML", duration: "15m", type: "video", isCompleted: true },
      { id: 3, title: "HTML Fundamentals", duration: "25m", type: "video", isCompleted: false },
      { id: 4, title: "HTML Document Structure", duration: "20m", type: "reading", isCompleted: false },
      { id: 5, title: "Module Quiz", duration: "10m", type: "quiz", isCompleted: false }
    ]
  },
  {
    id: 2,
    title: "CSS Foundations",
    duration: "2h 30m",
    lessons: [
      { id: 6, title: "Introduction to CSS", duration: "20m", type: "video", isCompleted: false },
      { id: 7, title: "Selectors and Properties", duration: "30m", type: "video", isCompleted: false },
      { id: 8, title: "CSS Box Model", duration: "25m", type: "video", isCompleted: false },
      { id: 9, title: "Typography and Colors", duration: "20m", type: "reading", isCompleted: false },
      { id: 10, title: "CSS Layouts", duration: "30m", type: "video", isCompleted: false },
      { id: 11, title: "Practical Exercise", duration: "15m", type: "quiz", isCompleted: false }
    ]
  },
  {
    id: 3,
    title: "JavaScript Basics",
    duration: "3h 15m",
    lessons: [
      { id: 12, title: "Introduction to JavaScript", duration: "25m", type: "video", isCompleted: false },
      { id: 13, title: "Variables and Data Types", duration: "30m", type: "video", isCompleted: false },
      { id: 14, title: "Functions and Scope", duration: "35m", type: "video", isCompleted: false },
      { id: 15, title: "Control Flow", duration: "25m", type: "reading", isCompleted: false },
      { id: 16, title: "DOM Manipulation", duration: "40m", type: "video", isCompleted: false },
      { id: 17, title: "Events", duration: "30m", type: "video", isCompleted: false },
      { id: 18, title: "Module Assessment", duration: "20m", type: "quiz", isCompleted: false }
    ]
  }
];

const CourseView: React.FC = () => {
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [currentLesson, setCurrentLesson] = useState<Lesson>(modules[0].lessons[2]);
  
  const toggleModule = (moduleId: number) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };
  
  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };
  
  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4 text-pioneer-light-blue" />;
      case 'reading':
        return <FileText className="h-4 w-4 text-pioneer-green" />;
      case 'quiz':
        return <FileText className="h-4 w-4 text-yellow-500" />;
      default:
        return <Video className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const calculateProgress = () => {
    const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
    const completedLessons = modules.reduce((sum, module) => 
      sum + module.lessons.filter(lesson => lesson.isCompleted).length, 0
    );
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-80 border-r border-gray-200 bg-white">
              <div className="p-4 border-b">
                <h1 className="text-lg font-bold text-pioneer-deep-blue truncate">Web Development Fundamentals</h1>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span>Sarah Johnson</span>
                  <span className="mx-2">•</span>
                  <span>{calculateProgress()}% complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 my-3">
                  <div 
                    className="bg-pioneer-green h-1.5 rounded-full" 
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="h-[calc(100vh-180px)] overflow-y-auto p-4">
                <div className="space-y-4">
                  {modules.map((module) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="text-sm font-medium text-gray-800 text-left">{module.title}</h3>
                          <div className="flex items-center mt-1">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500 ml-1">{module.duration}</span>
                            <span className="mx-1 text-gray-300">•</span>
                            <span className="text-xs text-gray-500">
                              {module.lessons.filter(l => l.isCompleted).length}/{module.lessons.length} complete
                            </span>
                          </div>
                        </div>
                        {expandedModules.includes(module.id) ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      
                      {expandedModules.includes(module.id) && (
                        <div className="p-3 pt-0 border-t">
                          <ul className="space-y-2">
                            {module.lessons.map((lesson) => (
                              <li key={lesson.id}>
                                <button
                                  onClick={() => selectLesson(lesson)}
                                  className={`w-full flex items-start p-2 rounded-md ${
                                    currentLesson.id === lesson.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                                  }`}
                                >
                                  <div className="flex-shrink-0 mt-0.5">
                                    {lesson.isCompleted ? (
                                      <CheckCircle className="h-4 w-4 text-pioneer-green" />
                                    ) : (
                                      getLessonIcon(lesson.type)
                                    )}
                                  </div>
                                  <div className="ml-3 flex-1 text-left">
                                    <p className={`text-sm ${lesson.isCompleted ? 'text-gray-500' : 'text-gray-800'}`}>
                                      {lesson.title}
                                    </p>
                                    <div className="flex items-center mt-1">
                                      <Clock className="h-3 w-3 text-gray-400" />
                                      <span className="text-xs text-gray-400 ml-1">
                                        {lesson.duration}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 p-6">
              {/* Lesson Content */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-pioneer-deep-blue">{currentLesson.title}</h2>
                  <div className="flex items-center space-x-2">
                    <ButtonCustom variant="outline" size="sm">Previous</ButtonCustom>
                    <ButtonCustom variant="secondary" size="sm">Next</ButtonCustom>
                  </div>
                </div>
                
                {/* Video Player */}
                {currentLesson.type === 'video' && (
                  <div className="relative aspect-video bg-black rounded-lg mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Reading Content */}
                {currentLesson.type === 'reading' && (
                  <Card className="p-6 mb-6">
                    <div className="prose max-w-none">
                      <h3>HTML Document Structure</h3>
                      <p>
                        Every HTML document follows a basic structure. Understanding this structure is crucial for web development. 
                        In this lesson, we'll explore the anatomy of an HTML document and learn about important elements like 
                        <code>{'<!DOCTYPE html>'}</code>, <code>{'<html>'}</code>, <code>{'<head>'}</code>, and <code>{'<body>'}</code>.
                      </p>
                      <h4>The DOCTYPE Declaration</h4>
                      <p>
                        The DOCTYPE declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
                      </p>
                      <pre>{'<!DOCTYPE html>'}</pre>
                      <h4>The HTML Element</h4>
                      <p>
                        The <code>{'<html>'}</code> element is the root element of an HTML page.
                      </p>
                      <pre>{`<html lang="en">
  <!-- Content goes here -->
</html>`}</pre>
                      <p>
                        The rest of the content would follow the standard HTML structure with head and body sections.
                      </p>
                    </div>
                  </Card>
                )}
                
                {/* Quiz Content */}
                {currentLesson.type === 'quiz' && (
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Module Quiz</h3>
                    <p className="mb-6">Test your knowledge about the concepts covered in this module.</p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Question 1: What does HTML stand for?</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="q1-a" name="q1" className="mr-2" />
                            <label htmlFor="q1-a">Hyper Text Markup Language</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1-b" name="q1" className="mr-2" />
                            <label htmlFor="q1-b">High Tech Modern Language</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1-c" name="q1" className="mr-2" />
                            <label htmlFor="q1-c">Hyper Transfer Markup Language</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Question 2: Which tag is used for creating a paragraph in HTML?</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="q2-a" name="q2" className="mr-2" />
                            <label htmlFor="q2-a">{'<paragraph>'}</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q2-b" name="q2" className="mr-2" />
                            <label htmlFor="q2-b">{'<p>'}</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q2-c" name="q2" className="mr-2" />
                            <label htmlFor="q2-c">{'<para>'}</label>
                          </div>
                        </div>
                      </div>
                      
                      <ButtonCustom variant="accent">Submit Answers</ButtonCustom>
                    </div>
                  </Card>
                )}
                
                {/* Notes Section */}
                <Card className="mb-6">
                  <div className="p-4 border-b flex items-center justify-between">
                    <h3 className="font-semibold">Notes</h3>
                    <button className="text-sm text-pioneer-light-blue hover:underline">Save</button>
                  </div>
                  <div className="p-4">
                    <textarea 
                      className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pioneer-light-blue focus:border-transparent" 
                      placeholder="Take notes for this lesson..."
                    ></textarea>
                  </div>
                </Card>
              </div>
              
              {/* Additional Resources and Discussion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Resources</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-pioneer-light-blue hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Lesson Slides (PDF)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-pioneer-light-blue hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Code Examples</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-pioneer-light-blue hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Further Reading</span>
                      </a>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Discussion</h3>
                    <ButtonCustom variant="secondary" size="sm">New Post</ButtonCustom>
                  </div>
                  <Separator className="mb-3" />
                  <div className="space-y-3">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pioneer-deep-blue text-white flex items-center justify-center">
                        J
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">John Doe</span>
                          <span className="text-xs text-gray-500 ml-2">2 days ago</span>
                        </div>
                        <p className="text-sm text-gray-700">How do you apply CSS to specific elements only?</p>
                        <a href="#" className="text-xs text-pioneer-light-blue hover:underline">Reply</a>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pioneer-light-blue text-white flex items-center justify-center">
                        A
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">Alice Smith</span>
                          <span className="text-xs text-gray-500 ml-2">1 day ago</span>
                        </div>
                        <p className="text-sm text-gray-700">You can use class and ID selectors to target specific elements.</p>
                        <a href="#" className="text-xs text-pioneer-light-blue hover:underline">Reply</a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseView;
