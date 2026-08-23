import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal — Intersection Observer hook for scroll-triggered animations
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal"> ... </div>
 *
 * Options:
 *   threshold — visibility threshold (0-1), default 0.1
 *   rootMargin — margin around root, default '0px 0px -60px 0px'
 *   once — only trigger once, default true
 */
export default function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove('revealed');
        }
      });
    },
    [once]
  );

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Immediately reveal all elements
      if (ref.current) {
        ref.current.classList.add('revealed');
      }
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin, handleIntersect]);

  return ref;
}

/**
 * useScrollRevealGroup — observe multiple children of a container
 *
 * Usage:
 *   const containerRef = useScrollRevealGroup();
 *   <div ref={containerRef}>
 *     <div className="reveal stagger-1">Child 1</div>
 *     <div className="reveal stagger-2">Child 2</div>
 *   </div>
 */
export function useScrollRevealGroup({
  selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale',
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, threshold, rootMargin]);

  return containerRef;
}
