import React from 'react';

const findings = [
  {
    title: "Superior Domain Accuracy",
    description: "AquaGPT consistently outperforms general-purpose instruction models (like Llama-3.1 and Qwen-2.5) across critical domains including Fish Health, Nutrition, and Water Quality.",
    highlight: "Validated on 20k samples"
  },
  {
    title: "Operational Precision",
    description: "The model provides actionable, procedural guidance with specific quantitative thresholds (e.g., Feed Conversion Ratios, Dissolved Oxygen levels) rather than generic advice.",
    highlight: "Actionable strategies"
  },
  {
    title: "IoT Edge Feasibility",
    description: "Successfully demonstrated Small Language Model (SLM) integration on Raspberry Pi devices, enabling real-time, offline water quality advisory directly on-farm.",
    highlight: "Real-time fusion"
  },
  {
    title: "AQUADAPT Framework",
    description: "Established a scalable, agentic pipeline for data acquisition and synthetic generation, creating a high-fidelity dataset of ~2 million expert-verified QA pairs.",
    highlight: "Expert validation"
  }
];

const KeyFindings: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Executive Summary</h2>
          <h3 className="text-3xl font-bold text-slate-900">Key Findings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {findings.map((finding, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <div className="mb-4 text-xs font-bold text-brand-600 uppercase tracking-wide">
                0{idx + 1} / {finding.highlight}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{finding.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;