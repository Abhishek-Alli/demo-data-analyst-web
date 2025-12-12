import React from 'react';
import { FileText, BarChart2, Download, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Recent Work & Case Studies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Explore our reports, dashboards, and analysis projects.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center text-slate-400 py-12 bg-white rounded-2xl border border-dashed border-slate-300">
            <p>No portfolio items available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${item.type === 'dashboard' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
                      {item.type === 'dashboard' ? <BarChart2 size={24} /> : <FileText size={24} />}
                    </div>
                    <span className="text-xs font-medium text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {item.fileUrl && (
                    <a 
                      href={item.fileUrl} 
                      download={item.fileName}
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-200"
                    >
                      <Download size={16} />
                      Download {item.type === 'dashboard' ? '.pbix' : 'File'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;