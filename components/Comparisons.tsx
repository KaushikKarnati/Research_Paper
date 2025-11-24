import React, { useState } from 'react';
import { ComparisonData } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const comparisons: ComparisonData[] = [
  {
    category: "Fish Health",
    question: "What is a key management practice to reduce fish mortality in an aquaculture system?",
    models: [
        {
            name: "Expert",
            response: "Immediately implement regular health monitoring by inspecting fish daily for behavioral changes (lethargy, erratic swimming) and physical signs.",
            rating: 5,
            color: "#10b981"
        },
        {
            name: "AquaGPT",
            response: "Begin daily health checks observe behavior and sample gill and skin condition every 72 hours. Record all findings in a digital log and act on any anomalies.",
            rating: 5,
            color: "#0ea5e9"
        },
        {
            name: "Qwen-2.5",
            response: "Regular health monitoring helps detect signs of disease or stress early observing behavior changes and physical symptoms in farmed fish.",
            rating: 3,
            color: "#64748b"
        }
    ]
  },
  {
    category: "Feeding Strategies",
    question: "On average, how much feed is required to produce a pound of gain in fish?",
    models: [
        {
            name: "Expert",
            response: "Under optimal conditions, most finfish achieve a feed conversion ratio (FCR) of ~1.5:1. Monitor FCR weekly and adjust feed formulation.",
            rating: 5,
            color: "#10b981"
        },
        {
            name: "AquaGPT",
            response: "Target 1.5 lb feed per 1 lb gain (FCR = 1.5). To optimize, record feed input and growth weekly; if FCR rises above 1.6, adjust protein content.",
            rating: 4,
            color: "#0ea5e9"
        },
        {
            name: "Qwen-2.5",
            response: "Feed conversion ratios vary by species, but many cultured fish require around 2.5 lb of feed per pound of growth.",
            rating: 2,
            color: "#64748b"
        }
    ]
  }
];

const metricData = [
  { name: 'BLEU-4', AquaGPT: 49.19, Llama: 32.4, Qwen: 35.1 },
  { name: 'ROUGE-1', AquaGPT: 51.45, Llama: 41.2, Qwen: 43.8 },
  { name: 'ROUGE-L', AquaGPT: 45.09, Llama: 38.5, Qwen: 39.2 },
];

const Comparisons: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Evaluation</h2>
            <h2 className="text-3xl font-display font-bold text-slate-900">Benchmarking</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Qualitative */}
            <div>
                <div className="flex gap-6 mb-8 border-b border-slate-200">
                    {comparisons.map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setSelectedTab(idx)}
                            className={`pb-4 text-sm font-medium transition-all ${
                                selectedTab === idx 
                                ? 'border-b-2 border-slate-900 text-slate-900' 
                                : 'text-slate-400 hover:text-slate-600'
                            }`}
                        >
                            {item.category}
                        </button>
                    ))}
                </div>

                <div className="mb-8">
                    <p className="font-medium text-slate-900 text-lg">{comparisons[selectedTab].question}</p>
                </div>

                <div className="space-y-8">
                    {comparisons[selectedTab].models.map((model, idx) => (
                        <div key={idx} className="relative pl-6 border-l-2 border-slate-100">
                            <div className="flex justify-between items-baseline mb-2">
                                <span className={`font-bold text-sm ${model.name === "AquaGPT" ? "text-brand-600" : "text-slate-900"}`}>
                                    {model.name}
                                </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-serif">
                                "{model.response}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quantitative */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-8">NLG Metrics</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={metricData} margin={{ left: 0, right: 0, top: 0, bottom: 0 }} barGap={0}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{border: '1px solid #e2e8f0', boxShadow: 'none', fontFamily: 'Inter'}}
                            />
                            <Legend wrapperStyle={{paddingTop: '20px'}} iconType="circle" />
                            <Bar dataKey="AquaGPT" fill="#0f172a" name="AquaGPT" />
                            <Bar dataKey="Qwen" fill="#94a3b8" name="Qwen-2.5" />
                            <Bar dataKey="Llama" fill="#cbd5e1" name="Llama-3.1" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-sm text-slate-900 mb-2">Analysis</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                        AquaGPT demonstrates superior performance across BLEU-4 and ROUGE metrics, indicating high fidelity to expert references and strong retention of domain-specific terminology compared to larger generalist models.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Comparisons;