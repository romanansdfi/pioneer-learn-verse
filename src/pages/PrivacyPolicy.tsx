
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pioneer-gray via-white to-pioneer-light-blue/30">
      <Navbar />

      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gradient-primary mb-4 drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-700">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, enroll in courses, 
                  or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Educational background and academic records</li>
                  <li>Course progress and performance data</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide, maintain, and improve our educational services</li>
                  <li>Process enrollments and manage your account</li>
                  <li>Track your academic progress and provide personalized learning experiences</li>
                  <li>Communicate with you about courses, updates, and important notices</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations and educational regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With trusted service providers who assist us in operating our platform (subject to confidentiality agreements)</li>
                  <li>In connection with academic partnerships or accreditation requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Staff training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">5. Student Educational Records</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We treat student educational records with special care in accordance with applicable educational privacy laws. 
                  These records include grades, course progress, and academic performance data. We maintain these records securely 
                  and limit access to authorized educational personnel only.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your learning experience, remember your preferences, 
                  and analyze platform usage. You can control cookie settings through your browser, though this may affect some 
                  platform functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">7. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your data (subject to educational record retention requirements)</li>
                  <li>Object to certain processing activities</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">8. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to provide our services and fulfill our legal obligations. 
                  Educational records may be retained for longer periods as required by educational regulations and accreditation standards.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  Our services are designed for educational use and may be used by minors under parental or school supervision. 
                  We comply with applicable children's privacy laws and require parental consent for users under 13 years of age.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify users of any material changes through the platform or via email.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover animate-fade-in shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pioneer-deep-blue">11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>PioneerLearn Privacy Officer</strong></p>
                  <p>Email: privacy@pioneerlearn.edu</p>
                  <p>Phone: +977-XXX-XXXXX</p>
                  <p>Address: Educational District, Nepal</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="btn-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
