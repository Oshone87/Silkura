import { useEffect, useRef } from 'react';

/**
 * Custom hook that observes elements with the 'animate-on-scroll' class
 * and adds 'is-visible' when they enter the viewport.
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const container = ref.current;
    if (container) {
      const elements = container.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
