import React, { useState } from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Data Visualization',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry: ${formData.service} Project`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Service Interested: ${formData.service}

Message:
${formData.message}`;

    // Direct Gmail Compose Link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abhishekalli29@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in new tab to act as a redirect to Gmail without losing the site
    window.open(gmailLink, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Let's Discuss Your Project</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ready to transform your data? Fill out the form below. You will be redirected to <strong>Gmail</strong> to send your message directly to our team at <strong>abhishekalli29@gmail.com</strong>.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Us</h3>
                  <p className="text-slate-500">abhishekalli29@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  required 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Your Email Address</label>
                <input 
                  required 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" 
                  placeholder="john@company.com" 
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Interested Service</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Data Visualization</option>
                  <option>Web Scraping</option>
                  <option>Data Analysis</option>
                  <option>Power BI Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea 
                  required 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Tell us about your data source and what insights you need..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Mail size={18} />
                Continue to Gmail
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;