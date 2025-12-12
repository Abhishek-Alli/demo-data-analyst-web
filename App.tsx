import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { PortfolioItem } from './types';
import { PieChart, Globe, Code2, LineChart, Search, FileJson } from 'lucide-react';
import { ServiceItem } from './types';

// Services Data (Moved here to share between Home preview and Services page if needed, 
// though for now simplistic duplication or prop passing is fine. 
// Ideally this goes in a separate data file.)
const servicesData: ServiceItem[] = [
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


// Initial sample data
const initialPortfolio: PortfolioItem[] = [
  {
    id: '1',
    title: 'Retail Sales Analysis',
    description: 'Comprehensive PowerBI dashboard analyzing regional sales trends, profitability, and customer segmentation for a retail chain.',
    type: 'dashboard',
    fileName: 'Sales_Report_2024.pbix',
    date: '10/24/2023'
  },
  {
    id: '2',
    title: 'Competitor Price Scraper',
    description: 'Python-based scraping solution report detailing pricing strategies of 5 major e-commerce competitors.',
    type: 'report',
    fileName: 'Scraping_Summary.pdf',
    date: '11/15/2023'
  }
];

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialPortfolio);

  const handleAddItem = (item: PortfolioItem) => {
    setPortfolioItems(prev => [item, ...prev]);
  };

  const handleDeleteItem = (id: string) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar 
          onLoginClick={() => setIsAdminOpen(true)} 
          isAuthenticated={isAuthenticated}
          onLogout={() => setIsAuthenticated(false)}
        />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home services={servicesData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio items={portfolioItems} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer onLoginClick={() => setIsAdminOpen(true)} />
        
        <Admin 
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          isAuthenticated={isAuthenticated}
          onLogin={(success) => setIsAuthenticated(success)}
          portfolioItems={portfolioItems}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </Router>
  );
}

export default App;