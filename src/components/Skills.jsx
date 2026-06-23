import React, { useEffect, useRef, useState } from 'react';
import { skills, softSkills } from '../data/portfolioData';

function SkillBar({ name, level, color }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-primary/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

const iconMap = {
  code: '💻',
  monitor: '🖥️',
  database: '🗄️',
  file: '📁',
};

const softIconMap = {
  users: '👥',
  lightbulb: '💡',
  clock: '⏰',
  eye: '👁️',
  refresh: '🔄',
  zap: '⚡',
  message: '💬',
  trending: '📈',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">What I Do</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map(category => (
            <div
              key={category.category}
              className="bg-secondary rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}>
                  {iconMap[category.icon]}
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">{category.category}</h3>
              </div>
              {category.items.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={category.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-secondary rounded-2xl p-8 border border-white/5">
          <h3 className="font-heading text-xl font-semibold text-white mb-6 text-center">
            Soft Skills & Attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map(skill => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/40 border border-white/5 hover:border-accent/20 hover:bg-accent/5 transition-all text-center group cursor-default"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">
                  {softIconMap[skill.icon]}
                </span>
                <span className="text-sm text-gray-300 font-medium leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">Technologies & Tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'Windows OS', 'Microsoft Office', 'Hardware', 'Networking'].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
