import React from 'react';
import { projects } from '../data/portfolioData';

const iconMap = {
  globe: '🌐',
  layout: '📐',
  cpu: '🖥️',
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">What I've Built</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all card-hover"
            >
              {/* Card Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {iconMap[project.icon]}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-primary/60 text-xs text-gray-300 border border-white/10 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Continuously building and learning new things</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 font-medium transition-all hover:scale-105"
          >
            Let's collaborate →
          </a>
        </div>
      </div>
    </section>
  );
}
