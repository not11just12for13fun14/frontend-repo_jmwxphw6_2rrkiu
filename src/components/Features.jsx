import React from 'react';
import { Zap, Shield, Coins, Camera, Joystick, Layers, Rocket, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Joystick,
    title: 'Smooth Controls',
    desc: 'Swipe or use arrows to switch lanes, jump, and slide with buttery transitions and animation blending.'
  },
  {
    icon: Layers,
    title: 'Procedural Tracks',
    desc: 'Endless subway tunnels with randomized trains, barriers, ramps, and coin trails.'
  },
  {
    icon: Coins,
    title: 'Collect & Upgrade',
    desc: 'Coins, magnet, jetpack, 2x score, and hoverboard shield — each with juicy visuals and timers.'
  },
  {
    icon: Shield,
    title: 'Chase System',
    desc: 'A determined cop NPC closes in when you stumble and ends the run on a crash.'
  },
  {
    icon: Camera,
    title: 'Cinematic Camera',
    desc: 'Third-person, slightly downward angle with smooth follow and dynamic shake on close calls.'
  },
  {
    icon: Zap,
    title: 'Mobile Optimized',
    desc: 'Built for iOS and Android with efficient colliders, pooling, and lightweight materials.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold md:text-4xl">Core Gameplay</h2>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">Cartoon 3D</span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-xl bg-indigo-600/10 p-3 text-indigo-600">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" id="showcase">
        <Card title="Trains & Tunnels" subtitle="Weaving through danger" color="from-amber-400 to-rose-500" />
        <Card title="Jetpack Rush" subtitle="Collect mid-air coins" color="from-indigo-500 to-cyan-400" />
        <Card title="Hoverboard" subtitle="One-hit shield" color="from-emerald-500 to-lime-400" />
      </div>
    </section>
  );
}

function Card({ title, subtitle, color }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`h-28 bg-gradient-to-r ${color}`} />
      <div className="p-6">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="mt-1 text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
