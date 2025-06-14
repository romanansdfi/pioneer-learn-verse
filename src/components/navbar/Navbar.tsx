
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, LogOut, Bell, ChevronDown } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';
import { useAuth } from '@/contexts/AuthContext';

interface NavLink {
  name: string;
  path: string;
  requiresAuth?: boolean;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', requiresAuth: true },
    { name: 'Dashboard', path: '/dashboard', requiresAuth: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const filteredNavLinks = navLinks.filter(link => 
    !link.requiresAuth || (link.requiresAuth && isLoggedIn)
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-white to-gray-100 border-2 border-pioneer-green rounded-xl flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <span className="text-pioneer-green font-bold text-lg">P</span>
                {/* Green crosser element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-pioneer-green/30 transform rotate-45"></div>
                  <div className="w-6 h-0.5 bg-pioneer-green/30 transform -rotate-45 absolute"></div>
                </div>
              </div>
              <span className="text-pioneer-deep-blue text-xl font-bold group-hover:text-pioneer-green transition-colors">
                Pioneer<span className="text-pioneer-green font-extrabold">Learn</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-1">
              {filteredNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-gray-600 hover:text-pioneer-green px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pioneer-green to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button className="text-gray-600 hover:text-pioneer-green p-2 rounded-lg hover:bg-green-50 transition-all duration-300">
                <Search className="h-5 w-5" />
              </button>
              
              {isLoggedIn && (
                <div className="flex items-center space-x-3">
                  {/* Notifications */}
                  <button className="relative text-gray-600 hover:text-pioneer-green p-2 rounded-lg hover:bg-green-50 transition-all duration-300">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative group">
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-2 text-gray-600 hover:text-pioneer-green p-2 rounded-lg hover:bg-green-50 transition-all duration-300"
                    >
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pioneer-green to-emerald-500 text-white flex items-center justify-center shadow-lg">
                        <User className="h-4 w-4" />
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Sign Out */}
                  <button 
                    onClick={handleSignOut}
                    className="text-gray-600 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-300"
                    title="Sign Out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-pioneer-green hover:bg-green-50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {filteredNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-pioneer-green hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {isLoggedIn && (
            <div className="pt-4 space-y-2">
              <Link
                to="/profile"
                className="flex items-center px-3 py-3 text-base font-medium text-gray-600 hover:text-pioneer-green hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </Link>
              <ButtonCustom 
                variant="outline" 
                fullWidth 
                onClick={handleSignOut}
                leftIcon={<LogOut className="h-4 w-4" />}
                className="justify-start hover:bg-red-50 hover:border-red-200 hover:text-red-600"
              >
                Sign Out
              </ButtonCustom>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
