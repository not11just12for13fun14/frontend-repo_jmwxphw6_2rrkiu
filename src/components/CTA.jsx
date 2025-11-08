import React from 'react';
import { Download, Store } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">Ready to Dash?</h3>
            <p className="mt-2 max-w-2xl text-slate-600">
              Optimized for Android and iOS. Plug into your favorite engine workflows and start sprinting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white shadow transition hover:bg-indigo-700">
              <Download className="h-5 w-5" />
              Download Design Doc
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-white px-5 py-3 text-indigo-700 transition hover:bg-indigo-50">
              <Store className="h-5 w-5" />
              Visit Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
