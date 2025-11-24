import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Paper Information</h3>
            <p className="text-sm mb-2"><strong className="text-slate-200">Title:</strong> AQUA: A Large Language Model for Aquaculture</p>
            <p className="text-sm mb-2"><strong className="text-slate-200">Organization:</strong> Kurma AI</p>
            <p className="text-sm mb-6"><strong className="text-slate-200">Authors:</strong> Praneeth Narisetty, Uday Kumar Reddy Kattamanchi, Lohit Nimma, Ram Kaushik Karnati, Shiva Nagendra Babu Kore, Mounika Golamari, Tejashree Nageshreddy</p>
            
            <div className="flex gap-4 mt-6">
                <a href="#" className="text-white hover:text-brand-400 transition-colors text-sm underline">Read PDF</a>
                <a href="#" className="text-white hover:text-brand-400 transition-colors text-sm underline">View on ArXiv (Simulated)</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About This Visualization</h3>
            <p className="text-sm leading-relaxed mb-4">
                This website is an interactive representation of the research findings. It demonstrates the AQUADAPT framework and visualizes the performance metrics and real-world applications discussed in the paper.
            </p>
            <p className="text-xs text-slate-600">
                &copy; {new Date().getFullYear()} AquaGPT Project Showcase. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
