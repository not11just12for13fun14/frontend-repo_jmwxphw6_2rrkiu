import React from 'react';
import { Waypoints, RefreshCw, Smartphone, BrainCircuit } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Under the Hood</h2>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">
          Designed for Unity with a Character Controller, pooled obstacles, and procedural segments preloaded ahead.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Step
          icon={Waypoints}
          title="Lane System"
          desc="Three-lane track with smooth interpolation when switching left or right, plus jump and slide arcs."
        />
        <Step
          icon={RefreshCw}
          title="Procedural Segments"
          desc="Repeating tiles with randomized trains, barriers, ramps, and coin trails — always 3–5 ahead."
        />
        <Step
          icon={Smartphone}
          title="Touch & Swipe"
          desc="Mobile-first swipes for lane changes, jumps, and slides. Keyboard arrows supported on desktop."
        />
        <Step
          icon={BrainCircuit}
          title="Systems"
          desc="Score + multiplier, missions, shop upgrades, leaderboard, and one-tap revive flow."
        />
      </div>
    </section>
  );
}

function Step({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}
