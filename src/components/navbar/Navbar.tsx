
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, LogOut } from 'lucide-react';
import ButtonCustom from '../ui/button-custom';
import { useAuth } from '@/contexts/AuthContext';
import NotificationPanel, { Notification } from "@/components/notifications/NotificationPanel";

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

  // Sample notifications
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

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
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

  const handleAuthClick = () => {
    navigate('/auth');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/f436f794-4d90-41f3-99aa-aa0b42ebe828.png" 
                alt="Pioneer Academy Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-4">
              {filteredNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:text-pioneer-deep-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-pioneer-deep-blue">
                <Search className="h-5 w-5" />
              </button>
              
              {isLoggedIn && (
                <NotificationPanel 
                  notifications={notifications}
                  onMarkAsRead={handleMarkAsRead}
                  onMarkAllAsRead={handleMarkAllAsRead}
                />
              )}
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <Link to="/profile" className="flex items-center text-gray-600 hover:text-pioneer-deep-blue">
                    <div className="h-8 w-8 rounded-full bg-pioneer-deep-blue text-white flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="text-gray-600 hover:text-pioneer-deep-blue"
                    title="Sign Out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <ButtonCustom variant="outline" size="sm" onClick={handleAuthClick}>Sign In</ButtonCustom>
                  <ButtonCustom size="sm" onClick={handleAuthClick}>Sign Up</ButtonCustom>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pioneer-deep-blue focus:outline-none"
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {filteredNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-pioneer-deep-blue hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 flex flex-col space-y-2">
              {isLoggedIn ? (
                <ButtonCustom 
                  variant="outline" 
                  fullWidth 
                  onClick={handleSignOut}
                  leftIcon={<LogOut className="h-4 w-4" />}
                >
                  Sign Out
                </ButtonCustom>
              ) : (
                <>
                  <ButtonCustom variant="outline" fullWidth onClick={handleAuthClick}>Sign In</ButtonCustom>
                  <ButtonCustom fullWidth onClick={handleAuthClick}>Sign Up</ButtonCustom>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
