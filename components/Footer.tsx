import React from 'react';
import { BarChart3, Linkedin, Twitter, Github, Lock } from 'lucide-react';

interface FooterProps {
  onLoginClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLoginClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="bg-cyan-900/50 p-2 rounded-lg text-cyan-400">
              <BarChart3 size={20} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">JainAnalytics<span className="text-cyan-500">Hub</span></span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
          </div>

        </div>
        
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} JainAnalyticsHub. All rights reserved.</p>
          
          {onLoginClick && (
            <button 
              onClick={onLoginClick}
              className="mt-4 md:mt-0 flex items-center gap-1 hover:text-cyan-500 transition-colors"
            >
              <Lock size={12} />
              <span>Admin Login</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;