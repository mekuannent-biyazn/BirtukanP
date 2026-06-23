import React from 'react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">My Journey</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-teal to-transparent" />

            {experience.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-5 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-teal border-2 border-primary pulse-glow z-10" />

                <div className="bg-primary/60 rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all card-hover ml-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-accent font-medium mt-1">{exp.company}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                        {exp.type}
                      </span>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs flex-shrink-0">✓</span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Looking for work card */}
            <div className="relative">
              <div className="absolute -left-5 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-teal to-cyan-400 border-2 border-primary z-10 animate-pulse" />
              <div className="bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-6 border border-accent/20 ml-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">Open to Opportunities</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Actively seeking full-time roles in web development, IT support, or software engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
