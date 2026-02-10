
import React from 'react';

// Glass Card Component with natural styling
export const GlassCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div 
    className={`glass-panel rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}
    style={{ 
      background: 'rgba(255, 254, 249, 0.7)',
      borderColor: 'rgba(139, 157, 131, 0.2)'
    }}
  >
    {children}
  </div>
);

// Section Title Component
export const SectionTitle: React.FC<{ title: string, subtitle?: string, centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 
      className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.1]" 
      style={{ color: '#2D3319' }}
    >
      {title}
    </h2>
    {subtitle && (
      <p 
        className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 font-light leading-relaxed" 
        style={{ color: '#5A6B4A' }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// Badge Component with sage green styling
export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span 
    className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm" 
    style={{ 
      background: 'rgba(139, 157, 131, 0.15)', 
      color: '#4A5D4A', 
      border: '1px solid rgba(139, 157, 131, 0.25)' 
    }}
  >
    {children}
  </span>
);

// Modern Input with natural colors
export const ModernInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    {...props} 
    className={`w-full pill-input px-6 py-4 outline-none transition-all ${props.className || ''}`}
    style={{ 
      color: '#2D3319',
      background: 'rgba(255, 254, 249, 0.8)',
      border: '1.5px solid rgba(139, 157, 131, 0.2)'
    }}
  />
);

// Modern Textarea with natural colors
export const ModernTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea 
    {...props} 
    className={`w-full rounded-[2rem] px-6 py-5 outline-none transition-all ${props.className || ''}`}
    style={{ 
      background: 'rgba(255, 254, 249, 0.8)', 
      border: '1.5px solid rgba(139, 157, 131, 0.2)', 
      color: '#2D3319' 
    }}
  />
);

// Button Component - Primary (Terracotta)
export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }> = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center justify-center space-x-3 text-white ${className}`}
    style={{ background: 'linear-gradient(135deg, #D4845C 0%, #B86F4D 100%)' }}
  >
    {children}
  </button>
);

// Button Component - Secondary (Glass with sage border)
export const SecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }> = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`px-10 py-5 glass-panel rounded-full font-bold hover:scale-105 transition-all ${className}`}
    style={{ 
      color: '#4A5D4A', 
      borderColor: '#8B9D83',
      background: 'rgba(255, 254, 249, 0.6)'
    }}
  >
    {children}
  </button>
);

// Icon Container Component
export const IconContainer: React.FC<{ 
  children: React.ReactNode, 
  variant?: 'sage' | 'terracotta' | 'forest',
  className?: string 
}> = ({ children, variant = 'sage', className = '' }) => {
  const gradients = {
    sage: 'linear-gradient(135deg, #8B9D83 0%, #4A5D4A 100%)',
    terracotta: 'linear-gradient(135deg, #D4845C 0%, #B86F4D 100%)',
    forest: 'linear-gradient(135deg, #4A5D4A 0%, #8B9D83 100%)'
  };

  return (
    <div 
      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all ${className}`}
      style={{ background: gradients[variant] }}
    >
      {children}
    </div>
  );
};
