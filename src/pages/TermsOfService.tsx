
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-pioneer-deep-blue mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  By accessing and using PioneerLearn's educational platform, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">2. Educational Services</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  PioneerLearn provides online educational services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Interactive learning modules and courses</li>
                  <li>Educational content in various subjects</li>
                  <li>Progress tracking and assessment tools</li>
                  <li>Student-teacher communication platforms</li>
                  <li>Educational resources and materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  To access certain features of our platform, you must register for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">4. Student Conduct and Academic Integrity</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Students using our platform agree to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Maintain academic honesty and integrity in all coursework</li>
                  <li>Not engage in cheating, plagiarism, or unauthorized collaboration</li>
                  <li>Respect intellectual property rights of course materials</li>
                  <li>Treat fellow students and instructors with respect</li>
                  <li>Use the platform solely for educational purposes</li>
                  <li>Not share account credentials with others</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">5. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  All content on PioneerLearn, including but not limited to text, graphics, logos, images, audio clips, 
                  digital downloads, and software, is the property of PioneerLearn or its content suppliers and is 
                  protected by copyright laws. Students may access and use the content solely for personal educational purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">6. Payment and Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Course fees and payment terms are clearly stated during enrollment. Refund policies vary by course type and duration. 
                  Please contact our administration for specific refund requests, which will be evaluated on a case-by-case basis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">7. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the platform, 
                  to understand our practices regarding the collection and use of your personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  PioneerLearn shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                  resulting from the use or inability to use our educational services, even if we have been advised of the 
                  possibility of such damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We reserve the right to terminate or suspend your account and access to our services at our sole discretion, 
                  without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, 
                  us, or third parties, or for any other reason.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pioneer-deep-blue">10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>PioneerLearn Administration</strong></p>
                  <p>Email: info@pioneerlearn.edu</p>
                  <p>Phone: +977-XXX-XXXXX</p>
                  <p>Address: Educational District, Nepal</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-block bg-pioneer-deep-blue text-white px-8 py-3 rounded-lg hover:bg-pioneer-light-blue transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
