import React from 'react';
import { ArrowRight, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#e0f2fe" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-6">
            <Zap size={16} />
            <span>Transforming Data into Growth</span>
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
            Unlock the Value of <br/>
            <span className="text-cyan-600">Your Business Data</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-600 mb-8 leading-relaxed">
            We specialize in transforming complex datasets into actionable insights. 
            From <strong>web scraping</strong> to stunning <strong>data visualizations</strong>, 
            JainAnalyticsHub helps you make data-driven decisions confidently.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg transition-all shadow-lg shadow-cyan-500/30 cursor-pointer"
            >
              Start a Project
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all cursor-pointer"
            >
              <Database className="mr-2 -ml-1" size={20} />
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;