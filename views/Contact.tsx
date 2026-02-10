
import React, { useState } from 'react';
import { SectionTitle, GlassCard, Badge, ModernInput, ModernTextarea, PrimaryButton } from '../components/UI';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
        
        {/* Contact Info Col */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <Badge>Inquiry</Badge>
            <h2 className="text-5xl font-display font-bold mt-6 leading-tight" style={{ color: '#2D3319' }}>Let's build <br />the engine.</h2>
            <p className="text-lg mt-6 font-light leading-relaxed" style={{ color: '#5A6B4A' }}>
              Whether you need a custom n8n node or a full enterprise AI infrastructure, our team is ready to architect.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center group-hover:text-white transition-all" style={{ color: '#4A5D4A', background: 'rgba(255, 254, 249, 0.8)' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#8B9D83' }}>Email Our Lead</div>
                <div className="text-lg font-medium" style={{ color: '#2D3319' }}>build@aryantra.co</div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center group-hover:text-white transition-all" style={{ color: '#4A5D4A', background: 'rgba(255, 254, 249, 0.8)' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l5 5-5 5M4 4v7a4 4 0 004 4h12"></path></svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#8B9D83' }}>Technical HQ</div>
                <div className="text-lg font-medium" style={{ color: '#2D3319' }}>Silicon Valley • Remote First</div>
              </div>
            </div>
          </div>

          <div className="p-10 glass-panel rounded-[2.5rem] text-white border-none shadow-xl" style={{ background: 'linear-gradient(135deg, #4A5D4A 0%, #8B9D83 100%)' }}>
             <div className="text-2xl font-display font-bold mb-4">Urgent Integration?</div>
             <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Our premium support team responds to enterprise production outages in &lt;15 minutes.</p>
             <button className="text-xs font-bold uppercase tracking-widest border-b pb-1 hover:text-white transition-all" style={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}>Access High-Priority Channel &rarr;</button>
          </div>
        </div>

        {/* Form Col */}
        <div className="lg:col-span-3">
          <GlassCard className="!p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-bl-full -z-10 opacity-50"></div>
            
            {!submitted ? (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-4" style={{ color: '#8B9D83' }}>Your Name</label>
                    <ModernInput required placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-4" style={{ color: '#8B9D83' }}>Corporate Email</label>
                    <ModernInput required type="email" placeholder="john@enterprise.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-4" style={{ color: '#8B9D83' }}>Automation Focus</label>
                  <div className="relative">
                    <select className="w-full pill-input px-6 py-4 appearance-none cursor-pointer outline-none" style={{ color: '#5A6B4A' }}>
                      <option>Full n8n Ecosystem Deployment</option>
                      <option>AI Agent Integration (RAG)</option>
                      <option>Custom Node Development</option>
                      <option>Legacy System Modernization</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#8B9D83' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-4" style={{ color: '#8B9D83' }}>Project Scope</label>
                  <ModernTextarea rows={5} placeholder="Describe the problem you want to solve..." />
                </div>

                <PrimaryButton type="submit" className="w-full">
                  <span>Submit Inquiry</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </PrimaryButton>
                <p className="text-center text-[10px] uppercase tracking-widest" style={{ color: '#8B9D83' }}>Typical response time: 2-4 Business Hours</p>
              </form>
            ) : (
              <div className="py-24 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-inner" style={{ background: 'rgba(139, 157, 131, 0.2)' }}>
                  <svg width="40" height="40" fill="none" stroke="#4A5D4A" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17 4 12"></path></svg>
                </div>
                <h3 className="text-4xl font-display font-bold mb-4" style={{ color: '#2D3319' }}>Transmission Received.</h3>
                <p className="max-w-sm mx-auto mb-10 leading-relaxed font-light" style={{ color: '#5A6B4A' }}>
                  A senior automation architect is reviewing your brief. We'll be in touch to schedule a technical deep dive.
                </p>
                <button onClick={() => setSubmitted(false)} className="font-bold border-b-2 transition-all" style={{ color: '#2D3319', borderColor: '#E8DCC4' }}>
                  Send another brief
                </button>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
