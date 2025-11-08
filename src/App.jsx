import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-500">
        Built with love for runners and railways. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
