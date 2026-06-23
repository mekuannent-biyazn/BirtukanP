import React from 'react';
import { personalInfo, languages } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info Card */}
          <div className="space-y-6">
            <div className="bg-primary/60 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-colors">
              <h3 className="font-heading text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-accent">👩‍💻</span> Professional Summary
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Personal details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Full Name', value: personalInfo.name, icon: '👤' },
                { label: 'Email', value: personalInfo.email, icon: '📧', link: `mailto:${personalInfo.email}` },
                { label: 'Phone', value: personalInfo.phone, icon: '📱', link: `tel:${personalInfo.phone}` },
                { label: 'Location', value: personalInfo.location, icon: '📍' },
                { label: 'Degree', value: personalInfo.degree, icon: '🎓' },
                { label: 'University', value: personalInfo.university, icon: '🏫' },
              ].map(item => (
                <div key={item.label} className="bg-primary/40 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-500 mb-1">{item.icon} {item.label}</div>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-accent hover:underline break-all font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-200 font-medium">{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Languages */}
          <div className="space-y-6">
            {/* Academic Stats */}
            <div className="bg-primary/60 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-colors">
              <h3 className="font-heading text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-gold">🏆</span> Academic Achievement
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <div className="font-heading text-4xl font-bold text-accent">3.59</div>
                  <div className="text-xs text-gray-400 mt-1">CGPA</div>
                </div>
                <div className="text-center bg-teal/10 rounded-xl p-4 border border-teal/20">
                  <div className="font-heading text-4xl font-bold text-teal">58%</div>
                  <div className="text-xs text-gray-400 mt-1">Exit Exam ✓</div>
                </div>
                <div className="text-center bg-gold/10 rounded-xl p-4 border border-gold/20">
                  <div className="font-heading text-4xl font-bold text-gold">4</div>
                  <div className="text-xs text-gray-400 mt-1">Certificates</div>
                </div>
                <div className="text-center bg-pink-500/10 rounded-xl p-4 border border-pink-500/20">
                  <div className="font-heading text-4xl font-bold text-pink-400">2026</div>
                  <div className="text-xs text-gray-400 mt-1">Graduate</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-primary/60 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-colors">
              <h3 className="font-heading text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-teal">🌐</span> Languages
              </h3>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-200 font-medium">{lang.name}</span>
                      <span className="text-gray-400">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-primary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-teal transition-all duration-1000"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
