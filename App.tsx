import React from 'react';
import Hero from './components/Hero';
import Framework from './components/Framework';
import Methodology from './components/Methodology';
import Comparisons from './components/Comparisons';
import IoTDashboard from './components/IoTDashboard';
import KeyFindings from './components/KeyFindings';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100 px-6 py-5 transition-all">
        <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl tracking-tight text-slate-900 cursor-pointer">
                <span className="font-display font-semibold">AquaGPT</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
                <a href="#" className="hover:text-black transition-colors">Home</a>
                <a href="#architecture" className="hover:text-black transition-colors">Methodology</a>
                <a href="#iot-demo" className="hover:text-black transition-colors">IoT Demo</a>
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">Read Paper</a>
            </div>
        </div>
      </nav>
      
      <main className="pt-20">
        <Hero />
        <KeyFindings />
        <Framework />
        <Methodology />
        <IoTDashboard />
        <Comparisons />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;