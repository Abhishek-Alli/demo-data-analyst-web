import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const dummyData = [
  { name: 'Jan', value: 4000, amt: 2400 },
  { name: 'Feb', value: 3000, amt: 1398 },
  { name: 'Mar', value: 2000, amt: 9800 },
  { name: 'Apr', value: 2780, amt: 3908 },
  { name: 'May', value: 1890, amt: 4800 },
  { name: 'Jun', value: 2390, amt: 3800 },
  { name: 'Jul', value: 3490, amt: 4300 },
];

const DataVizDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'comparison'>('trends');

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Interactive Demo</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              See Your Data Come Alive
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Static spreadsheets hide the story. Our visualizations bring trends to the forefront instantly. 
              Interact with the chart to see how we transform raw inputs into clear, decision-ready graphics.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                <p className="text-slate-200">Connect to any data source (API, SQL, Excel)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                <p className="text-slate-200">Clean and normalize the dataset automatically</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                <p className="text-slate-200">Deploy interactive dashboards for your team</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
              <h3 className="font-semibold text-lg">Monthly Performance</h3>
              <div className="flex bg-slate-900 rounded-lg p-1">
                <button 
                  onClick={() => setActiveTab('trends')}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${activeTab === 'trends' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Trends
                </button>
                <button 
                  onClick={() => setActiveTab('comparison')}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${activeTab === 'comparison' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Comparison
                </button>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === 'trends' ? (
                  <AreaChart data={dummyData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0891b2" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0891b2" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                ) : (
                  <BarChart data={dummyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    />
                    <Legend />
                    <Bar dataKey="value" fill="#06b6d4" name="Revenue" />
                    <Bar dataKey="amt" fill="#64748b" name="Projected" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">Interactive Demo Component • React + Recharts</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataVizDemo;