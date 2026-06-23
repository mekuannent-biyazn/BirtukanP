import React, { useState } from 'react';
import { personalInfo, reference } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Build mailto link
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl font-bold text-white mt-2">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-teal rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'from-accent to-indigo-500' },
              { icon: '📱', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'from-teal to-cyan-500' },
              { icon: '📍', label: 'Location', value: personalInfo.location, color: 'from-gold to-amber-500' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 p-5 bg-primary/60 rounded-2xl border border-white/5 hover:border-accent/20 transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-200 hover:text-accent transition-colors font-medium text-sm break-all">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-gray-200 font-medium text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Reference */}
            <div className="p-5 bg-primary/60 rounded-2xl border border-white/5 hover:border-teal/20 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">👨‍🏫</span>
                <h3 className="font-heading font-semibold text-white text-sm">Reference</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-accent font-semibold">{reference.name}</div>
                <div className="text-gray-400">{reference.role}</div>
                <div className="text-gray-500">{reference.institution}</div>
                <a href={`tel:${reference.phone}`} className="block text-gray-300 hover:text-teal transition-colors">
                  📱 {reference.phone}
                </a>
                <a href={`mailto:${reference.email}`} className="block text-gray-300 hover:text-teal transition-colors break-all">
                  📧 {reference.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-primary/60 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-colors space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block" htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block" htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration"
                  className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Birtukan, I'd like to talk about..."
                  className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-accent to-indigo-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30"
              >
                Send Message 🚀
              </button>

              {status && (
                <p className="text-center text-teal text-sm">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
