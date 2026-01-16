import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
}

interface Smoke {
  id: number;
  x: number;
  y: number;
}

export function NeonCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [smokes, setSmokes] = useState<Smoke[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setIsVisible(true);
    const newTrail: Trail = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setTrails((prev) => [...prev.slice(-12), newTrail]);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    // Create drift smoke particles on click
    const smokeParticles: Smoke[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
    }));
    setSmokes((prev) => [...prev, ...smokeParticles]);

    // Clean up smoke after animation
    setTimeout(() => {
      setSmokes((prev) => prev.filter((s) => !smokeParticles.find((p) => p.id === s.id)));
    }, 1000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setTrails([]);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleClick, handleMouseLeave]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(-8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Neon Trail */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0.3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              width: 12,
              height: 12,
              background: `radial-gradient(circle, 
                hsl(186, 100%, 57%) 0%, 
                hsl(274, 100%, 65%) 50%, 
                transparent 100%)`,
              boxShadow: `
                0 0 10px hsl(186, 100%, 57%),
                0 0 20px hsl(274, 100%, 65%),
                0 0 30px hsl(186, 100%, 57%)
              `,
              filter: `blur(${(trails.length - index) * 0.3}px)`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Drift Smoke Effect */}
      <AnimatePresence>
        {smokes.map((smoke, i) => (
          <motion.div
            key={smoke.id}
            initial={{ 
              scale: 0.5, 
              opacity: 0.6,
              x: smoke.x - 20,
              y: smoke.y - 20,
            }}
            animate={{ 
              scale: 2.5,
              opacity: 0,
              x: smoke.x - 20 + (Math.random() - 0.5) * 100,
              y: smoke.y - 40 + Math.random() * -80,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              width: 40,
              height: 40,
              background: `radial-gradient(circle, 
                rgba(45, 227, 255, 0.3) 0%, 
                rgba(139, 92, 246, 0.2) 40%,
                transparent 70%)`,
              filter: "blur(8px)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
