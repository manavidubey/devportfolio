import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => {
        if (section && section.nodeType === 1) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return null;
};

export default ScrollAnimation; 