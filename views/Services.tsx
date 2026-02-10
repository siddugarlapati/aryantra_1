
import React from 'react';
import { SectionTitle, GlassCard, Badge, IconContainer } from '../components/UI';

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-in fade-in duration-700">
      <SectionTitle 
        title="Enterprise Engineering Services" 
        subtitle="We specialize in complex, high-reliability automation using the world's most flexible automation engine: n8n."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GlassCard className="flex flex-col" style={{ background: 'rgba(255, 254, 249, 0.8)' }}>
          <Badge>01 / CORE STACK</Badge>
          <h3 className="text-3xl font-display font-bold mt-6 mb-6" style={{ color: '#2D3319' }}>n8n Managed Services</h3>
          <p className="leading-relaxed mb-8 font-light" style={{ color: '#5A6B4A' }}>
            We don't just build workflows; we manage the infrastructure. From cluster setup on AWS/GCP to node optimization and database tuning for n8n.
          </p>
          <ul className="space-y-4 text-sm border-t pt-8" style={{ color: '#5A6B4A', borderColor: '#8B9D83' }}>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> Self-hosted private cloud deployment</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> Custom Python & JS node development</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> Fault-tolerant queue management (Redis)</li>
          </ul>
        </GlassCard>

        <GlassCard className="flex flex-col border-none shadow-2xl text-white" style={{ background: 'linear-gradient(135deg, #4A5D4A 0%, #8B9D83 100%)' }}>
          <Badge>02 / AI ORCHESTRATION</Badge>
          <h3 className="text-3xl font-display font-bold text-white mt-6 mb-6">Cognitive Automation</h3>
          <p className="leading-relaxed mb-8 font-light" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Integrating Large Language Models (LLMs) into production workflows. We build RAG pipelines and AI agents that actually work in enterprise settings.
          </p>
          <ul className="space-y-4 text-sm border-t pt-8" style={{ color: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></span> Custom Gemini & OpenAI agent clusters</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></span> Vector database syncing (Pinecone/Weaviate)</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></span> Document intelligence & data extraction</li>
          </ul>
        </GlassCard>

        <GlassCard className="flex flex-col" style={{ background: 'rgba(255, 254, 249, 0.8)' }}>
          <Badge>03 / SYSTEM INTEGRATION</Badge>
          <h3 className="text-3xl font-display font-bold mt-6 mb-6" style={{ color: '#2D3319' }}>The "Everything" Sync</h3>
          <p className="leading-relaxed mb-8 font-light" style={{ color: '#5A6B4A' }}>
            Bridging the gap between legacy systems and modern APIs. We specialize in hard-to-automate systems where simple connectors fail.
          </p>
          <ul className="space-y-4 text-sm border-t pt-8" style={{ color: '#5A6B4A', borderColor: '#8B9D83' }}>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> ERP-to-SaaS real-time sync engines</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> Bi-directional CRM & Marketing data lakes</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#8B9D83' }}></span> Custom Webhook listeners & API middleware</li>
          </ul>
        </GlassCard>

        <GlassCard className="flex flex-col border-2 hover:shadow-xl transition-all" style={{ background: 'rgba(255, 254, 249, 0.8)', borderColor: '#D4845C' }}>
          <Badge>04 / CONSULTING</Badge>
          <h3 className="text-3xl font-display font-bold mt-6 mb-6" style={{ color: '#2D3319' }}>Automation Roadmap</h3>
          <p className="leading-relaxed mb-8 font-light" style={{ color: '#5A6B4A' }}>
            Strategic audits of your current technical operations to identify high-ROI automation targets. We find the friction you didn't know you had.
          </p>
          <ul className="space-y-4 text-sm border-t pt-8" style={{ color: '#5A6B4A', borderColor: '#D4845C' }}>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#D4845C' }}></span> 360° Operational Friction Audit</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#D4845C' }}></span> Cost-Benefit Analysis for n8n vs SaaS</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: '#D4845C' }}></span> Automation Governance & Best Practices</li>
          </ul>
        </GlassCard>
      </div>

      <div className="mt-32 p-16 glass-panel rounded-[3rem] text-center" style={{ borderColor: 'rgba(139, 157, 131, 0.3)' }}>
          <h3 className="text-3xl font-display font-bold mb-6" style={{ color: '#2D3319' }}>Scale without Headcount.</h3>
          <p className="max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#5A6B4A' }}>
            Our systems don't just "save time"—they redefine what your team is capable of achieving. By automating 80% of routine technical labor, we free your engineers and operators to focus on high-impact strategy.
          </p>
          <div className="flex justify-center gap-10">
             <div className="text-center">
                <div className="text-4xl font-display font-bold mb-1" style={{ color: '#2D3319' }}>90%</div>
                <div className="text-xs uppercase font-bold tracking-widest" style={{ color: '#8B9D83' }}>Efficiency Lift</div>
             </div>
             <div className="text-center border-x px-10" style={{ borderColor: '#8B9D83' }}>
                <div className="text-4xl font-display font-bold mb-1" style={{ color: '#2D3319' }}>100k+</div>
                <div className="text-xs uppercase font-bold tracking-widest" style={{ color: '#8B9D83' }}>Executions / Day</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-display font-bold mb-1" style={{ color: '#2D3319' }}>0ms</div>
                <div className="text-xs uppercase font-bold tracking-widest" style={{ color: '#8B9D83' }}>Human Latency</div>
             </div>
          </div>
      </div>
    </div>
  );
};
