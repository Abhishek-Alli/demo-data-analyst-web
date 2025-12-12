import React, { useState } from 'react';
import { Menu, X, BarChart3, Lock, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onLoginClick: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-cyan-600 p-2 rounded-lg text-white">
              <BarChart3 size={24} />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">JainAnalytics<span className="text-cyan-600">Hub</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path) ? 'text-cyan-600 font-semibold' : 'text-slate-600 hover:text-cyan-600'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors text-sm font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <button 
                onClick={onLoginClick}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors"
                title="Admin Login"
              >
                <Lock size={16} />
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path) ? 'text-cyan-600 bg-cyan-50' : 'text-slate-600 hover:text-cyan-600'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="w-full text-left text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => { onLoginClick(); setIsOpen(false); }}
                className="w-full text-left text-slate-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;