import React from 'react';
import { PieChart, Globe, Code2, LineChart, Search, FileJson } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'viz',
    title: 'Data Visualization',
    description: 'Transform raw numbers into compelling visual stories. We create interactive dashboards using Tableau, PowerBI, and React that make trends obvious.',
    icon: PieChart,
  },
  {
    id: 'scraping',
    title: 'Web Scraping',
    description: 'Automate data collection from any website. We turn messy HTML into clean, structured datasets (CSV, JSON, SQL) ready for analysis.',
    icon: Globe,
  },
  {
    id: 'analysis',
    title: 'Advanced Analytics',
    description: 'Go beyond the surface. We apply statistical methods to uncover hidden patterns and opportunities for optimization in your operations.',
    icon: LineChart,
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Reduce manual data entry. We build scripts and pipelines that automatically fetch, clean, and update your business data.',
    icon: Code2,
  },
  {
    id: 'cleaning',
    title: 'Data Cleaning',
    description: 'Fix inconsistent, missing, or duplicate data. We refine your existing databases to ensure high-quality inputs for your decisions.',
    icon: FileJson,
  },
  {
    id: 'consulting',
    title: 'Data Strategy',
    description: 'Not sure where to start? We help define key performance indicators (KPIs) and data strategies aligned with your business goals.',
    icon: Search,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to master your data
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Comprehensive data solutions tailored for startups and growing enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;