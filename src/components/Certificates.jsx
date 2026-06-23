import React from 'react';
import { certificates } from '../data/portfolioData';

const iconMap = {
  brain: '🧠',
  code2: '💻',
  briefcase: '💼',
  award: '🏅',
};

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            Certificates & <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all card-hover text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {iconMap[cert.icon]}
              </div>

              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-semibold mb-3`}>
                Certificate
              </div>

              <h3 className="font-heading font-semibold text-white text-sm leading-tight mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-500 text-xs">{cert.issuer}</p>

              {/* Decorative bottom bar */}
              <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center bg-secondary/50 rounded-2xl p-8 border border-white/5 max-w-2xl mx-auto">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-gray-300 text-lg italic leading-relaxed">
            "Committed to continuous learning and professional development in the field of technology."
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
}
