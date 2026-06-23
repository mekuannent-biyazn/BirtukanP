import React from 'react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Academic Background</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-primary/60 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-all card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="text-accent font-semibold mt-1">{edu.institution}</div>
                    <div className="text-gray-500 text-sm mt-1">📍 {edu.location}</div>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                  {edu.period}
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary rounded-xl p-4 text-center border border-accent/10">
                  <div className="font-heading text-3xl font-bold text-accent">{edu.cgpa}</div>
                  <div className="text-xs text-gray-500 mt-1">Cumulative GPA</div>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center border border-teal/10">
                  <div className="font-heading text-3xl font-bold text-teal">{edu.exitExam}</div>
                  <div className="text-xs text-gray-500 mt-1">Exit Examination</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white text-xs flex-shrink-0 font-bold">
                      {i + 1}
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
