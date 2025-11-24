import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const dataSources = [
  { name: 'Web Scraping', value: 24816, color: '#334155' },
  { name: 'Open-Access Sources', value: 14889, color: '#64748b' },
  { name: 'Text Mining', value: 9926, color: '#94a3b8' },
];

const trainingParams = [
  { param: 'Base Model', value: 'Mistral-7B-Instruct-v0.3' },
  { param: 'Fine-tuning', value: 'LoRA' },
  { param: 'Compute', value: '8x NVIDIA H200' },
  { param: 'Training Time', value: '32 Hours' },
  { param: 'Epochs', value: '2' },
  { param: 'Batch Size', value: '16' },
  { param: 'Precision', value: 'bf16' },
  { param: 'Dataset Size', value: '~2 Million Pairs' },
];

const Methodology: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'data' | 'design' | 'limitations'>('data');

  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
            {/* Minimal Sidebar */}
            <div className="lg:w-1/4">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Methodology</h2>
                <div className="flex flex-col items-start gap-4 border-l border-slate-200 pl-6">
                    <button 
                        onClick={() => setActiveTab('data')}
                        className={`text-sm font-medium transition-colors ${activeTab === 'data' ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Data Sources
                    </button>
                    <button 
                        onClick={() => setActiveTab('design')}
                        className={`text-sm font-medium transition-colors ${activeTab === 'design' ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Experimental Design
                    </button>
                    <button 
                        onClick={() => setActiveTab('limitations')}
                        className={`text-sm font-medium transition-colors ${activeTab === 'limitations' ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Limitations
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4">
                {activeTab === 'data' && (
                    <div className="animate-in fade-in duration-500">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Data Collection & Distribution</h3>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2 h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={dataSources}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {dataSources.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            contentStyle={{backgroundColor: '#fff', border: '1px solid #e2e8f0', fontFamily: 'Inter', fontSize: '12px'}}
                                        />
                                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <p className="text-slate-600 leading-relaxed font-light">
                                    The dataset was curated using <strong>DataAgent</strong>, employing tools like <code>pymupdf4llm</code> for PDF extraction and <code>Dockling</code> for web content. Relevance was ensured using the <strong>BM25 algorithm</strong>.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-slate-100">
                                    <div className="text-xs font-bold text-slate-400 uppercase">Total Documents</div>
                                    <div className="text-4xl font-light text-slate-900">49,631</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'design' && (
                    <div className="animate-in fade-in duration-500">
                         <h3 className="text-xl font-bold text-slate-900 mb-8">Training Configuration</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            {trainingParams.map((item, idx) => (
                                <div key={idx}>
                                    <div className="text-xs text-slate-400 font-medium mb-1">{item.param}</div>
                                    <div className="text-sm text-slate-900 font-semibold">{item.value}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-slate-50 p-8 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-2">Dual-Path Synthesis</h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                1. <strong>Synthetic Generation</strong> (GPT-4.1) for instruction expansion.<br/>
                                2. <strong>Literature Extraction</strong> (Gemini 2.0 Flash) for mining scientific papers.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'limitations' && (
                    <div className="animate-in fade-in duration-500">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Limitations</h3>
                        <div className="space-y-8">
                            <div className="border-l-2 border-slate-200 pl-6">
                                <h4 className="font-bold text-slate-900 mb-2">Domain Over-Specificity</h4>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    The model may default to specific regional practices when queries are generic, due to the high density of region-specific examples.
                                </p>
                            </div>

                            <div className="border-l-2 border-slate-200 pl-6">
                                <h4 className="font-bold text-slate-900 mb-2">Interpretive Rigidity</h4>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Deep anchoring in established literature means the model might underrepresent innovative techniques that haven't yet been widely published.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;