import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* top gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Gamepad2 className="h-4 w-4" />
          <span>Mobile 3D Endless Runner</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          Subway Sprint: Dash, Dodge, Collect!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          A fast, cartoon-style runner with smooth swipes, procedural tracks, powerups, and a cheeky cop on your tail.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-white shadow-lg transition hover:bg-indigo-600"
          >
            <Rocket className="h-5 w-5" />
            Explore Features
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            See the World
          </a>
        </div>
      </div>
    </section>
  );
}
