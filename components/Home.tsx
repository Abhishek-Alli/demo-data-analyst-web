import React from 'react';
import Hero from './Hero';
import DataVizDemo from './DataVizDemo';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

interface HomeProps {
  services: ServiceItem[]; // Passing a few services to preview
}

const Home: React.FC<HomeProps> = ({ services }) => {
  return (
    <>
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Solutions for Your Data Needs</h2>
            <p className="mt-4 text-lg text-slate-500">From extraction to visualization, we cover the full data lifecycle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {/* Showing just first 3 services as preview */}
             {services.slice(0, 3).map((service) => (
                <div key={service.id} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                  <service.icon className="h-10 w-10 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </div>
             ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center font-medium text-cyan-600 hover:text-cyan-700">
              View All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <DataVizDemo />

      {/* Trust/CTA Section */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Businesses Trust JainAnalyticsHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="flex flex-col items-center">
                <div className="bg-cyan-800 p-4 rounded-full mb-4">
                  <Star size={24} className="text-yellow-400" />
                </div>
                <h4 className="font-bold text-lg">Freelancer Dedication</h4>
                <p className="text-cyan-200 mt-2 text-sm">Personalized attention and flexible availability unlike big agencies.</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="bg-cyan-800 p-4 rounded-full mb-4">
                  <ShieldCheck size={24} className="text-green-400" />
                </div>
                <h4 className="font-bold text-lg">Data Integrity</h4>
                <p className="text-cyan-200 mt-2 text-sm">Your data is handled with strict confidentiality and security protocols.</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="bg-cyan-800 p-4 rounded-full mb-4">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-lg">Action Oriented</h4>
                <p className="text-cyan-200 mt-2 text-sm">We don't just deliver files; we deliver answers to your business questions.</p>
             </div>
          </div>
          <Link to="/contact" className="inline-block bg-white text-cyan-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-50 transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;