import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:scale-110 transition-transform"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}
