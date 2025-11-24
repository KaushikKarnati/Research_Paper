import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Framework: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Data Acquisition",
      description: "Mining 49k+ documents from Web, PDFs, and Open Access sources.",
      agent: "DataAgent"
    },
    {
      id: 2,
      title: "Expert Structuring",
      description: "Experts define taxonomy, seed QA pairs, and prompt templates.",
      agent: "ExpertAgent"
    },
    {
      id: 3,
      title: "Dual-Path Synthesis",
      description: "Generating synthetic QAs (GPT-4.1) & extracting from literature (Gemini 2.0).",
      agent: "QAAgent"
    },
    {
      id: 4,
      title: "Scoring & Cleaning",
      description: "LLM-as-a-Judge evaluates quality. Only scores ≥ 4/5 retained.",
      agent: "ScoringAgent"
    },
    {
      id: 5,
      title: "Model Fine-Tuning",
      description: "Training Mistral-7B on the curated 2M+ high-quality QA dataset.",
      agent: "AquaGPT"
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Methodology</h2>
          <h3 className="text-3xl font-bold text-slate-900">The AQUADAPT Framework</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-l border-t lg:border-l-0 lg:border-t lg:border-b border-slate-200">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`
                group relative p-8 border-b lg:border-b-0 lg:border-r border-slate-200 transition-colors duration-300
                ${activeStep === step.id ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}
              `}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="text-xs font-mono text-slate-400 mb-6">0{step.id}</div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
                {step.agent}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Taxonomy Coverage</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                    "Production Systems", "Genetics & Breeding", "Larval & Hatchery", "Nutrition & Feed",
                    "Water Quality", "Health & Disease", "Sustainability", "IoT & Tech",
                    "Economics & Policy", "Species Specifics", "Post-Harvest"
                ].map((cat, i) => (
                    <span key={i} className="text-sm text-slate-500 font-light border-b border-transparent hover:border-slate-300 transition-colors">
                        {cat}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;