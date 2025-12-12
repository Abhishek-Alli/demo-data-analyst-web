import React from 'react';
import { Target, Users, TrendingUp, Code2, Database, Brain, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#0891b2" />
            </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Meet the Analyst
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-slate-500">
            The person behind the insights.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 p-1">
                <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden relative">
                   {/* Placeholder for Profile Image if user had one, using generic styling for now */}
                   <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                   <div className="relative z-10 text-center p-8">
                      <span className="text-6xl mb-4 block">👨‍💻</span>
                      <p className="text-slate-500 font-medium">Chirag Jain</p>
                      <p className="text-cyan-600 text-sm">Founder & Lead Analyst</p>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Experience</p>
                    <p className="font-bold text-slate-900">Data Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">About Me</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Hi, I'm Abhishek Alli
              </h3>
              <div className="prose prose-lg text-slate-600">
                <p>
                  I am the founder of <strong>JainAnalyticsHub</strong> and a passionate freelance Data Analyst and Web Scraping Specialist. My journey began with a curiosity for how data shapes the world around us, and today, I help businesses decode that data to find clarity and growth.
                </p>
                <p>
                  Unlike large agencies where you might be just another ticket number, I pride myself on being a dedicated partner to my clients. I specialize in taking messy, unstructured data—whether it's from the web or internal databases—and transforming it into clean, interactive Power BI dashboards and actionable reports.
                </p>
                <p>
                  My goal is simple: to empower you with the insights you need to make confident, data-driven decisions without getting lost in the technical noise.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                 <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/30 transition-all">
                    Work With Me
                 </Link>
                 <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-all">
                    View Portfolio
                 </Link>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-24">
             <div className="text-center mb-12">
               <h3 className="text-2xl font-bold text-slate-900">Technical Arsenal</h3>
               <p className="text-slate-500 mt-2">The tools I use to drive results</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                   <div className="mx-auto w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900">Power BI</h4>
                   <p className="text-sm text-slate-500 mt-1">Advanced DAX & Visualization</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                   <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Code2 size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900">Python</h4>
                   <p className="text-sm text-slate-500 mt-1">Pandas, NumPy, Scrapy</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                   <div className="mx-auto w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                      <Database size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900">SQL</h4>
                   <p className="text-sm text-slate-500 mt-1">Complex Querying & Warehousing</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                   <div className="mx-auto w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Brain size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900">ETL</h4>
                   <p className="text-sm text-slate-500 mt-1">Data Cleaning & Automation</p>
                </div>
             </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Precision First</h3>
              <p className="text-slate-600 text-sm">
                Data is only useful if it's accurate. I prioritize rigorous data cleaning and validation methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                <Briefcase size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Business Context</h3>
              <p className="text-slate-600 text-sm">
                I don't just write code; I understand business problems. Every dashboard answers a specific business question.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Clear Communication</h3>
              <p className="text-slate-600 text-sm">
                No jargon. I explain technical insights in plain English so stakeholders can take action immediately.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;