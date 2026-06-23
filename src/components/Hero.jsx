import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  'Computer Science Graduate',
  'Web Developer',
  'IT Specialist',
  'Hardware & Software Expert',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1.5s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">
              Birtukan
            </span>
            <br />
            <span className="text-white">Yemataw</span>
          </h1>

          <div className="h-12 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-xl sm:text-2xl text-gray-300 font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            {personalInfo.bio}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10">
            {[
              { label: 'CGPA', value: '3.59', color: 'text-accent' },
              { label: 'Exit Exam', value: '58%', color: 'text-teal' },
              { label: 'Certificates', value: '4+', color: 'text-gold' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className={`font-heading text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent to-indigo-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 font-semibold transition-all hover:scale-105"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Avatar Side */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-teal to-gold p-1 pulse-glow">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                {/* Avatar placeholder with initials */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-teal/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-heading text-7xl font-bold text-gradient leading-none">B</div>
                    <div className="text-gray-400 text-sm mt-2 font-medium">CS Graduate</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-secondary border border-accent/30 rounded-xl px-3 py-2 text-xs font-semibold text-accent shadow-lg">
              CGPA 3.59 ⭐
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary border border-teal/30 rounded-xl px-3 py-2 text-xs font-semibold text-teal shadow-lg">
              Available 🟢
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <span>Scroll Down</span>
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
