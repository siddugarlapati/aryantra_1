
import React from 'react';
import { SectionTitle, GlassCard, IconContainer } from '../components/UI';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="space-y-8">
          <SectionTitle 
            title="Engineering Excellence for the Automation Age" 
          />
          <p className="text-xl leading-relaxed font-light" style={{ color: '#5A6B4A' }}>
            Founded on the principle that automation is the fundamental lever for human progress, Aryantra was built to bridge the gap between "experimental AI" and "production-ready systems."
          </p>
          <p className="leading-relaxed" style={{ color: '#5A6B4A' }}>
            We are a team of systems architects, machine learning engineers, and process optimization experts who believe that the best code is the code you never have to worry about. Our approach is purely engineering-first: we prioritize stability, security, and scalability above all else.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-zinc-200/50 rounded-[40px] -rotate-3 blur-sm"></div>
          <img 
            src="https://picsum.photos/seed/aryantra-about/800/1000" 
            alt="Aryantra Team" 
            className="relative rounded-[40px] shadow-2xl grayscale"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        {[
          {
            title: "Mission",
            text: "To eliminate the friction of modern business operations through intelligent, autonomous infrastructure."
          },
          {
            title: "Mindset",
            text: "Engineering-first. We don't settle for 'good enough' hacks; we build robust systems that stand the test of time."
          },
          {
            title: "Impact",
            text: "We measure success by the actual hours saved and the tangible growth our clients achieve through our systems."
          }
        ].map((item, i) => (
          <GlassCard key={i} className="group hover:scale-105 transition-all">
            <IconContainer 
              variant={i === 0 ? 'sage' : i === 1 ? 'terracotta' : 'forest'} 
              className="mb-6 group-hover:shadow-xl"
            >
              {i === 0 && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
              {i === 1 && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
              {i === 2 && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>}
            </IconContainer>
            <h3 className="text-xl font-display font-bold mb-4" style={{ color: '#2D3319' }}>{item.title}</h3>
            <p className="leading-relaxed" style={{ color: '#5A6B4A' }}>{item.text}</p>
          </GlassCard>
        ))}
      </div>

      {/* Philosophy Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-display font-bold mb-8" style={{ color: '#2D3319' }}>Real-World Scalability</h3>
        <p className="leading-relaxed mb-12" style={{ color: '#5A6B4A' }}>
          Too many AI agencies focus on the shiny new wrapper. We focus on the engine. Whether you're a 10-person startup or a 10,000-person enterprise, your infrastructure should be your biggest competitive advantage, not your biggest liability.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-transparent to-transparent" style={{ background: 'linear-gradient(to right, transparent, #8B9D83, transparent)' }}></div>
      </div>
    </div>
  );
};
