import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-teal flex items-center justify-center font-heading font-bold text-white text-lg">
              B
            </div>
            <div>
              <div className="font-heading font-semibold text-white">Birtukan Yemataw</div>
              <div className="text-xs text-gray-500">Computer Science Graduate</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['#home', '#about', '#skills', '#experience', '#projects', '#contact'].map(href => (
              <a key={href} href={href} className="hover:text-accent transition-colors capitalize">
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Social / Contact */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg bg-secondary border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
              aria-label="Email"
            >
              ✉️
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="w-9 h-9 rounded-lg bg-secondary border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/30 transition-all"
              aria-label="Phone"
            >
              📱
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          © {year} Birtukan Yemataw Workie · Addis Ababa, Ethiopia · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
