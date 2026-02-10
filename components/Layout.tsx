
import React from 'react';
import { Page, NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Marketplace', id: 'marketplace' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ color: '#2D3319' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <nav className="glass-panel px-6 py-3 rounded-full flex items-center space-x-8 shadow-sm">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #8B9D83 0%, #4A5D4A 100%)' }}>
              A
            </div>
            <span className="font-display font-bold text-xl tracking-tight" style={{ color: '#2D3319' }}>ARYANTRA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? '' : 'hover:opacity-100'
                }`}
                style={{ color: currentPage === item.id ? '#2D3319' : '#8B9D83' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('contact')}
            className="text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #D4845C 0%, #B86F4D 100%)' }}
          >
            Book Strategy Call
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="pt-16 pb-12 mt-20" style={{ background: 'rgba(245, 241, 232, 0.6)', borderTop: '1px solid rgba(139, 157, 131, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg, #8B9D83 0%, #4A5D4A 100%)' }}>A</div>
              <span className="font-display font-bold text-xl tracking-tight" style={{ color: '#2D3319' }}>ARYANTRA</span>
            </div>
            <p className="max-w-sm mb-6 leading-relaxed" style={{ color: '#5A6B4A' }}>
              Engineering-first AI and Business Automation systems for the world's most ambitious teams. Built for scale, reliability, and technical excellence.
            </p>
            <div className="text-sm" style={{ color: '#8B9D83' }}>
              &copy; {new Date().getFullYear()} Aryantra Co. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: '#2D3319' }}>Services</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#5A6B4A' }}>
              <li><button onClick={() => onNavigate('services')} className="hover:opacity-70 transition-opacity">AI Automation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:opacity-70 transition-opacity">Business Process Automation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:opacity-70 transition-opacity">System Integrations</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:opacity-70 transition-opacity">Production Systems</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: '#2D3319' }}>Company</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#5A6B4A' }}>
              <li><button onClick={() => onNavigate('about')} className="hover:opacity-70 transition-opacity">About Us</button></li>
              <li><button onClick={() => onNavigate('marketplace')} className="hover:opacity-70 transition-opacity">Marketplace</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:opacity-70 transition-opacity">Contact</button></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
