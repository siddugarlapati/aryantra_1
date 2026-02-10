
import React from 'react';
import { SectionTitle, GlassCard, Badge, PrimaryButton, SecondaryButton, IconContainer } from '../components/UI';
import { Page } from '../types';

export const Home: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <div className="mb-8 floating">
          <Badge>Certified n8n Delivery Partner</Badge>
        </div>
        <h1 className="text-6xl md:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-8" style={{ color: '#2D3319' }}>
          The Future is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B9D83] via-[#4A5D4A] to-[#D4845C]">Autonomous.</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl leading-relaxed font-light mb-12" style={{ color: '#5A6B4A' }}>
          Aryantra architects mission-critical n8n workflows and AI systems that transform enterprise chaos into scalable, automated harmony.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <PrimaryButton onClick={() => onNavigate('contact')}>
            <span>Start Your Build</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </PrimaryButton>
          <SecondaryButton onClick={() => onNavigate('services')}>
            The n8n Advantage
          </SecondaryButton>
        </div>

        {/* Dynamic Workflow Visualization */}
        <div className="mt-24 w-full max-w-5xl relative aspect-[2/1] overflow-hidden rounded-[3rem] shadow-2xl p-8" style={{ background: 'linear-gradient(135deg, #F5F1E8 0%, #E8DCC4 100%)', border: '1px solid rgba(139, 157, 131, 0.2)' }}>
           <svg className="w-full h-full opacity-30" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B9D83" />
                  <stop offset="100%" stopColor="#D4845C" />
                </linearGradient>
                <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A5D4A" />
                  <stop offset="100%" stopColor="#8B9D83" />
                </linearGradient>
              </defs>
              <path d="M100 200 C 200 200, 300 100, 400 100 S 600 200, 700 200" fill="none" stroke="url(#pathGradient1)" strokeWidth="2" className="node-path" />
              <path d="M100 200 C 200 200, 300 300, 400 300 S 600 200, 700 200" fill="none" stroke="url(#pathGradient2)" strokeWidth="2" className="node-path" />
              <rect x="80" y="180" width="40" height="40" rx="8" fill="#4A5D4A" />
              <circle cx="400" cy="100" r="20" fill="#8B9D83" />
              <circle cx="400" cy="300" r="20" fill="#D4845C" />
              <rect x="680" y="180" width="40" height="40" rx="20" fill="#D4845C" />
           </svg>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-panel px-8 py-6 rounded-3xl shadow-xl max-w-xs text-left" style={{ borderColor: 'rgba(139, 157, 131, 0.3)' }}>
                 <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8B9D83' }}></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#4A5D4A' }}>Workflow Active</span>
                 </div>
                 <h4 className="font-display font-bold text-lg mb-1" style={{ color: '#2D3319' }}>CRM {'->'} AI {'->'} ERP</h4>
                 <p className="text-xs" style={{ color: '#5A6B4A' }}>Self-hosted n8n instance processing 5,000 tasks/min.</p>
              </div>
           </div>
        </div>
      </section>

      {/* The Core Stack - n8n & Beyond */}
      <section className="py-32" style={{ background: 'rgba(245, 241, 232, 0.4)', borderTop: '1px solid rgba(139, 157, 131, 0.15)', borderBottom: '1px solid rgba(139, 157, 131, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Beyond Simple Zapier Fixes" 
            subtitle="We build high-performance, self-hosted n8n environments for companies that outgrow low-code limitations."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "n8n Self-Hosting", desc: "Complete data sovereignty. We host your nodes on your cloud, your rules.", icon: "cloud" },
              { title: "Custom n8n Nodes", desc: "Need a node that doesn't exist? Our engineers build native n8n integrations from scratch.", icon: "code" },
              { title: "LLM Orchestration", desc: "LangChain & Gemini integration within n8n workflows for complex reasoning.", icon: "cpu" },
              { title: "ERP Automation", desc: "Automating SAP, Odoo, and NetSuite workflows with custom-tailored logic.", icon: "layers" }
            ].map((item, idx) => (
              <GlassCard key={idx} className="flex flex-col items-start p-10 hover:shadow-xl transition-all cursor-default group">
                 <IconContainer 
                   variant={idx % 2 === 0 ? 'sage' : 'terracotta'} 
                   className="mb-6 group-hover:shadow-xl group-hover:scale-110"
                 >
                    {idx === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19L9 19M17.5 5L9 5M17.5 12L9 12M5 19L5 5"/></svg>}
                    {idx === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>}
                    {idx === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>}
                    {idx === 3 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"/></svg>}
                 </IconContainer>
                 <h3 className="text-xl font-display font-bold mb-4" style={{ color: '#2D3319' }}>{item.title}</h3>
                 <p className="text-sm leading-relaxed" style={{ color: '#5A6B4A' }}>{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Industry Vertical Content */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge>Vertical Solutions</Badge>
            <h2 className="text-5xl font-display font-bold mt-6 mb-8 tracking-tight" style={{ color: '#2D3319' }}>Everything, <br />Automated.</h2>
            <div className="space-y-6">
               <div className="group border-b pb-6 hover:border-opacity-60 transition-colors" style={{ borderColor: '#8B9D83' }}>
                  <h4 className="text-xl font-display font-bold mb-2" style={{ color: '#2D3319' }}>SaaS Ops & Customer Success</h4>
                  <p className="text-sm" style={{ color: '#5A6B4A' }}>Automated churn prediction, onboarding flows, and Intercom-to-Slack routing using AI sentiment analysis.</p>
               </div>
               <div className="group border-b pb-6 hover:border-opacity-60 transition-colors" style={{ borderColor: '#8B9D83' }}>
                  <h4 className="text-xl font-display font-bold mb-2" style={{ color: '#2D3319' }}>Fintech & Accounting</h4>
                  <p className="text-sm" style={{ color: '#5A6B4A' }}>Real-time invoice reconciliation, multi-gateway payment monitoring, and automated fraud scoring engines.</p>
               </div>
               <div className="group border-b pb-6 hover:border-opacity-60 transition-colors" style={{ borderColor: '#8B9D83' }}>
                  <h4 className="text-xl font-display font-bold mb-2" style={{ color: '#2D3319' }}>E-commerce Logistics</h4>
                  <p className="text-sm" style={{ color: '#5A6B4A' }}>Inventory syncing across Shopify, Amazon, and Walmart, with automated 3PL carrier selection logic.</p>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-10 rounded-[4rem] blur-3xl -z-10" style={{ background: 'rgba(139, 157, 131, 0.15)' }}></div>
             <GlassCard className="p-0 overflow-hidden border-none shadow-2xl">
                <img src="https://picsum.photos/seed/automation/1200/1000" className="w-full h-[600px] object-cover grayscale opacity-80" alt="Tech Background" />
                <div className="absolute inset-0 flex items-end p-12" style={{ background: 'linear-gradient(to top, rgba(74, 93, 74, 0.9) 0%, transparent 100%)' }}>
                   <div className="text-white">
                      <div className="text-3xl font-display font-bold mb-2">The Aryantra Standard</div>
                      <p className="opacity-90">"Automating the impossible, every single day."</p>
                   </div>
                </div>
             </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center flex flex-col items-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #4A5D4A 0%, #8B9D83 50%, #D4845C 100%)' }}>
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.1" />
                 <circle cx="20" cy="30" r="15" fill="white" opacity="0.1" />
                 <circle cx="80" cy="70" r="20" fill="white" opacity="0.1" />
              </svg>
           </div>
           <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-10 max-w-4xl tracking-tight relative z-10">
             Outgrow manual work. <br /> <span className="opacity-80">Build your digital workforce.</span>
           </h2>
           <button 
             onClick={() => onNavigate('contact')}
             className="px-12 py-6 bg-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all shadow-xl relative z-10"
             style={{ color: '#4A5D4A' }}
           >
             Book a strategy call
           </button>
        </div>
      </section>
    </div>
  );
};
