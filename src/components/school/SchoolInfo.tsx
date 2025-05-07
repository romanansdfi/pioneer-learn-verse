
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeeStructure {
  class: string;
  tuitionFee: string;
  admissionFee: string;
  examFee: string;
  annualCharge: string;
  total: string;
}

const feeStructureData: FeeStructure[] = [
  {
    class: "Class 1-2",
    tuitionFee: "₹15,000",
    admissionFee: "₹5,000",
    examFee: "₹2,000",
    annualCharge: "₹4,000",
    total: "₹26,000"
  },
  {
    class: "Class 3-5",
    tuitionFee: "₹18,000",
    admissionFee: "₹5,000",
    examFee: "₹2,500",
    annualCharge: "₹5,000",
    total: "₹30,500"
  },
  {
    class: "Class 6-8",
    tuitionFee: "₹22,000",
    admissionFee: "₹6,000",
    examFee: "₹3,000",
    annualCharge: "₹6,000",
    total: "₹37,000"
  },
  {
    class: "Class 9-10",
    tuitionFee: "₹25,000",
    admissionFee: "₹7,000",
    examFee: "₹3,500",
    annualCharge: "₹7,000",
    total: "₹42,500"
  }
];

interface AdditionalCourse {
  name: string;
  description: string;
  duration: string;
  fee: string;
}

const additionalCoursesData: AdditionalCourse[] = [
  {
    name: "Computer Programming",
    description: "Learn basics of programming with Python and web development",
    duration: "6 months",
    fee: "₹8,000"
  },
  {
    name: "Robotics",
    description: "Hands-on robotics and automation using Arduino",
    duration: "3 months",
    fee: "₹12,000"
  },
  {
    name: "Fine Arts",
    description: "Drawing, painting, and sculpture techniques",
    duration: "12 months",
    fee: "₹6,000"
  },
  {
    name: "Music & Dance",
    description: "Classical music and dance training",
    duration: "12 months",
    fee: "₹7,500"
  },
  {
    name: "Sports Excellence",
    description: "Advanced training in cricket, football, or basketball",
    duration: "6 months",
    fee: "₹9,000"
  },
  {
    name: "Foreign Languages",
    description: "French, German, or Spanish language classes",
    duration: "6 months",
    fee: "₹10,000"
  }
];

const SchoolInfo: React.FC = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-pioneer-deep-blue text-center mb-8">School Information</h2>
        
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>About Our School</CardTitle>
              <CardDescription>Vision, curriculum, facilities, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p>
                    Pioneer School aims to develop well-rounded individuals who excel not only academically but also in character, creativity, and social responsibility. We strive to provide an inclusive learning environment that fosters critical thinking, innovation, and lifelong learning.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Curriculum</h3>
                  <p>
                    Our curriculum combines the best of national and international educational practices. We follow the National Education Policy with enrichments from global educational frameworks, ensuring our students are prepared for both national examinations and international opportunities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>State-of-the-art science and computer laboratories</li>
                    <li>Well-stocked library with digital resources</li>
                    <li>Indoor and outdoor sports facilities</li>
                    <li>Performing arts center</li>
                    <li>Smart classrooms with digital learning tools</li>
                    <li>Student counseling center</li>
                    <li>Cafeteria serving nutritious meals</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Faculty</h3>
                  <p>
                    Our teachers are highly qualified professionals with extensive experience in education. All faculty members hold advanced degrees in their subjects and regularly participate in professional development programs to stay updated with the latest teaching methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-pioneer-deep-blue mb-6">Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-pioneer-deep-blue text-white">
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-left">Tuition Fee (Annual)</th>
                  <th className="p-3 text-left">Admission Fee</th>
                  <th className="p-3 text-left">Examination Fee</th>
                  <th className="p-3 text-left">Annual Charges</th>
                  <th className="p-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructureData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 border">{item.class}</td>
                    <td className="p-3 border">{item.tuitionFee}</td>
                    <td className="p-3 border">{item.admissionFee}</td>
                    <td className="p-3 border">{item.examFee}</td>
                    <td className="p-3 border">{item.annualCharge}</td>
                    <td className="p-3 border font-semibold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            * Fees are subject to change. Additional charges may apply for transportation, uniform, and extracurricular activities.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-pioneer-deep-blue mb-6">Additional Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCoursesData.map((course, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>Duration: {course.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{course.description}</p>
                  <p className="font-semibold">Fee: {course.fee}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
