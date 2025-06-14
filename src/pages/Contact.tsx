import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, GraduationCap, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ButtonCustom from '@/components/ui/button-custom';
import Navbar from '@/components/navbar/Navbar';

const Contact: React.FC = () => {
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pioneer-deep-blue via-pioneer-light-blue to-pioneer-green opacity-90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 hover:scale-105 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Phone className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Get in touch with Pioneer Academy for admissions and inquiries
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue text-white rounded-t-3xl">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-full">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  Pioneer Academy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-pioneer-deep-blue to-pioneer-light-blue rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Phattepur 1 Saptari<br />
                        Near Patrol Pump<br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-pioneer-light-blue to-pioneer-green rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">Phone Numbers</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Main Office: +91 98765 43210</p>
                        <p>Admissions: +91 98765 43211</p>
                        <p>Principal Office: +91 98765 43212</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-pioneer-green to-emerald-500 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">Email Addresses</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>info@pioneeracademy.edu</p>
                        <p>admissions@pioneeracademy.edu</p>
                        <p>principal@pioneeracademy.edu</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">Office Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Sunday - Thursday: 8:00 AM - 4:00 PM</p>
                        <p>Friday: 9:00 AM - 1:00 PM</p>
                        <p>Saturday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campus Visit Hours */}
          <div>
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pioneer-green to-emerald-500 text-white rounded-t-3xl">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-full">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  🏫 Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-gradient-to-br from-white to-green-50">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We welcome parents and students for campus tours:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Days</h3>
                        <p className="text-gray-600">Sunday to Friday</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Timings</h3>
                        <p className="text-gray-600">10:00 AM - 3:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Appointment</h3>
                        <p className="text-gray-600">Prior notice appreciated (call Admissions)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">📍 Campus Map</h3>
                        <ButtonCustom variant="outline" className="border-2 border-pioneer-deep-blue text-pioneer-deep-blue hover:bg-pioneer-deep-blue hover:text-white transition-all duration-300 rounded-xl px-6 py-2 inline-flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download Here
                        </ButtonCustom>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-3xl">
              <CardTitle className="text-2xl text-center">Visit Our Campus</CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-gradient-to-br from-white to-purple-50">
              <div className="text-center space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We welcome prospective parents and students to visit our campus and experience 
                  the Pioneer Academy environment firsthand. Schedule a visit to meet our faculty, 
                  tour our facilities, and learn more about our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <ButtonCustom variant="outline" className="border-2 border-pioneer-deep-blue text-pioneer-deep-blue hover:bg-pioneer-deep-blue hover:text-white transition-all duration-300 rounded-2xl px-8 py-3">
                    Schedule a Visit
                  </ButtonCustom>
                  <ButtonCustom variant="outline" className="border-2 border-pioneer-green text-pioneer-green hover:bg-pioneer-green hover:text-white transition-all duration-300 rounded-2xl px-8 py-3">
                    Download Brochure
                  </ButtonCustom>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};

export default Contact;
