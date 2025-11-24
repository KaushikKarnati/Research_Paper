import React, { useState, useEffect } from 'react';
import { SensorData } from '../types';

const IoTDashboard: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messages, setMessages] = useState<{sender: 'System' | 'AI', text: string, time: string}[]>([
    { sender: 'System', text: 'Alert: Critical parameter deviation detected in Pond #4.', time: '10:42 AM' }
  ]);

  const [sensors] = useState<SensorData[]>([
    { parameter: 'Dissolved Oxygen', value: '4.87', unit: 'mg/L', status: 'Normal', description: 'Within acceptable range' },
    { parameter: 'Temperature', value: '29.65', unit: '°C', status: 'Warning', description: 'Elevated, warning level' },
    { parameter: 'pH', value: '7.58', unit: '', status: 'Warning', description: 'Mild deviation' },
    { parameter: 'Ammonia', value: '14.09', unit: 'mg/L', status: 'Critical', description: 'Critically high (>14 mg/L)' },
    { parameter: 'Turbidity', value: '6.84', unit: 'NTU', status: 'Warning', description: 'Elevated organic load' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setMessages(prev => [
                ...prev,
                { 
                    sender: 'AI', 
                    text: `CRITICAL AMMONIA ALERT\n\nImmediate Actions:\n1. Increase aeration to facilitate ammonia stripping.\n2. Initiate 20-30% water exchange with cooler water.\n3. Stop feeding immediately.\n\nReasoning: High temp (29.65°C) amplifies ammonia toxicity.`,
                    time: '10:42 AM' 
                }
            ])
        }, 2000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="iot-demo" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/3 space-y-8">
            <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Live IoT Integration</h2>
                <h3 className="text-3xl font-bold text-slate-900">Edge Inference</h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Demonstrating the power of <b>SLMs</b> on devices like Raspberry Pi. AquaGPT analyzes compound sensor readings to provide nuanced advice offline.
            </p>
          </div>

          {/* Minimal UI Demo */}
          <div className="lg:w-2/3 w-full bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col md:flex-row">
                
                {/* Sensor List */}
                <div className="md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Real-Time Sensors</h3>
                    
                    <div className="space-y-6">
                        {sensors.map((sensor, idx) => (
                            <div key={idx} className="flex items-center justify-between group">
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">{sensor.parameter}</div>
                                    <div className="font-mono text-xl text-slate-900 tracking-tight">
                                        {sensor.value} <span className="text-xs text-slate-400">{sensor.unit}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                                        sensor.status === 'Critical' ? 'bg-red-50 text-red-600' : 
                                        sensor.status === 'Warning' ? 'bg-amber-50 text-amber-600' : 
                                        'bg-emerald-50 text-emerald-600'
                                    }`}>
                                        {sensor.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Log */}
                <div className="md:w-1/2 bg-slate-50 flex flex-col h-[500px] md:h-auto">
                    <div className="p-4 border-b border-slate-200 bg-white">
                        <h4 className="font-bold text-sm text-slate-900">System Log</h4>
                    </div>
                    
                    <div className="flex-1 p-6 overflow-y-auto space-y-6">
                         {messages.map((msg, idx) => (
                             <div key={idx} className={`flex flex-col ${msg.sender === 'AI' ? 'items-start' : 'items-center'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                                 {msg.sender === 'System' ? (
                                     <div className="text-xs font-mono text-slate-400 border-b border-slate-200 pb-1 mb-2">
                                         {msg.time} — SYSTEM
                                     </div>
                                 ) : (
                                     <div className="w-full">
                                         <div className="text-xs font-bold text-brand-600 mb-2">AQUA-GPT ADVISORY</div>
                                         <div className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed font-mono bg-white p-4 border border-slate-200 rounded-lg">
                                            {msg.text}
                                         </div>
                                     </div>
                                 )}
                             </div>
                         ))}
                         
                         {isAnalyzing && (
                             <div className="text-xs font-mono text-slate-400 animate-pulse">
                                 Processing stream...
                             </div>
                         )}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default IoTDashboard;