import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full pt-32 pb-24 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-3 py-1 mb-8 border border-slate-200 rounded-full">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Research Showcase</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900 tracking-tight mb-8">
          AI for Sustainable <br/>
          <span className="text-brand-600">Aquaculture</span>
        </h1>
        
        <p className="text-xl text-slate-500 leading-relaxed font-light mb-12 mx-auto max-w-2xl">
          Introducing <strong>AquaGPT</strong>, a specialized Large Language Model designed to optimize seafood production through expert-level advisory and real-time analysis.
        </p>

        <div className="flex justify-center gap-4 mb-20">
          <button onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-black transition-colors flex items-center gap-2">
            View Methodology 
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => document.getElementById('iot-demo')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
            Interactive Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100 max-w-3xl mx-auto">
           <div>
             <div className="font-display font-bold text-4xl text-slate-900">2M+</div>
             <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-2">QA Pairs</div>
           </div>
           <div>
             <div className="font-display font-bold text-4xl text-slate-900">50k+</div>
             <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-2">Documents</div>
           </div>
           <div>
             <div className="font-display font-bold text-4xl text-slate-900">7B</div>
             <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-2">Parameters</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;