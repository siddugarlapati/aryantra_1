
import React from 'react';
import { SectionTitle, GlassCard, Badge, PrimaryButton } from '../components/UI';
import { AutomationProduct } from '../types';

const products: AutomationProduct[] = [
  {
    id: 'ai-lead-engine',
    name: 'AI Lead qualification Engine',
    description: 'Autonomous system that processes incoming leads, researches their company profiles using AI, and ranks them for your sales team.',
    features: ['Real-time CRM sync', 'Automated LinkedIn scraping', 'Sentiment analysis', 'Slack notifications'],
    techStack: ['Python', 'OpenAI API', 'Zapier/Make', 'Airtable'],
    pricing: { tier: 'Standard', price: '$1,200', billing: 'onetime setup' }
  },
  {
    id: 'cloud-monitor',
    name: 'Auto-Healing Cloud Monitor',
    description: 'Mission-critical infrastructure monitoring that automatically identifies server errors and executes pre-defined fix scripts.',
    features: ['Zero-downtime deployments', 'Auto-scaling triggers', 'Anomaly detection', 'Health check dashboards'],
    techStack: ['AWS/GCP', 'Terraform', 'Prometheus', 'Grafana'],
    pricing: { tier: 'Enterprise', price: '$2,500', billing: 'setup + monthly' }
  },
  {
    id: 'fin-bridge',
    name: 'Automated Finance Bridge',
    description: 'Syncs Stripe, Shopify, and manual invoices directly into QuickBooks or Xero with perfect reconciliation.',
    features: ['Multi-currency support', 'Tax calculation engine', 'Audit trail generation', 'Daily reports'],
    techStack: ['Node.js', 'Stripe API', 'OAuth 2.0', 'PostgreSQL'],
    pricing: { tier: 'SME', price: '$850', billing: 'onetime setup' }
  },
  {
    id: 'customer-care-ai',
    name: 'Level-1 AI Support Agent',
    description: 'A 24/7 autonomous support agent that can handle complex multi-step customer troubleshooting based on your documentation.',
    features: ['Knowledge base training', 'Voice & Text support', 'Live agent handoff', 'Translation API'],
    techStack: ['Pinecone', 'LangChain', 'React', 'Gemini API'],
    pricing: { tier: 'Professional', price: '$1,800', billing: 'setup + tokens' }
  }
];

export const Marketplace: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in slide-in-from-bottom-8 duration-500">
      <SectionTitle 
        title="Automation Marketplace" 
        subtitle="Pre-engineered, battle-tested automation modules ready to be deployed into your infrastructure."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <GlassCard key={product.id} className="flex flex-col border-2 hover:shadow-2xl transition-all group" style={{ borderColor: '#8B9D83' }}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-display font-bold transition-colors" style={{ color: '#2D3319' }}>
                {product.name}
              </h3>
              <div className="text-right">
                <div className="text-xl font-bold text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #D4845C 0%, #B86F4D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{product.pricing.price}</div>
                <div className="text-[10px] uppercase font-bold" style={{ color: '#8B9D83' }}>{product.pricing.billing}</div>
              </div>
            </div>

            <p className="mb-6 leading-relaxed flex-grow" style={{ color: '#5A6B4A' }}>
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B9D83' }}>Key Features</div>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm" style={{ color: '#5A6B4A' }}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="#8B9D83" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {product.techStack.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-[10px] font-bold rounded uppercase" style={{ background: 'rgba(139, 157, 131, 0.15)', color: '#4A5D4A' }}>
                  {tech}
                </span>
              ))}
            </div>

            <PrimaryButton className="w-full py-4">
              <span>Purchase & Deployment</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </PrimaryButton>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
