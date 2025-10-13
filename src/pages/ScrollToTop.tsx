import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smooth scroll-to-top on route change.
 * Also scrolls to specific #hash anchors when present.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (hash) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // Smooth scroll-to-top with easing
      const startY = window.scrollY;
      const duration = 600; // ms
      const startTime = performance.now();

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY * (1 - eased));

        if (elapsed < duration) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    scrollToTarget();
  }, [pathname, hash]);

  return null;
}
