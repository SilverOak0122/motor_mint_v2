import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonUnderglowProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "gradient";
  intensity?: "low" | "medium" | "high";
}

const glowColors = {
  cyan: {
    primary: "hsl(186, 100%, 57%)",
    secondary: "hsl(186, 100%, 45%)",
  },
  violet: {
    primary: "hsl(274, 100%, 65%)",
    secondary: "hsl(274, 100%, 50%)",
  },
  gradient: {
    primary: "hsl(186, 100%, 57%)",
    secondary: "hsl(274, 100%, 65%)",
  },
};

const intensityValues = {
  low: { blur: 15, spread: 8, opacity: 0.4 },
  medium: { blur: 25, spread: 12, opacity: 0.6 },
  high: { blur: 40, spread: 20, opacity: 0.8 },
};

export function NeonUnderglow({
  children,
  className = "",
  glowColor = "gradient",
  intensity = "medium",
}: NeonUnderglowProps) {
  const [isHovering, setIsHovering] = useState(false);
  const colors = glowColors[glowColor];
  const { blur, spread, opacity } = intensityValues[intensity];

  const glowStyle = glowColor === "gradient"
    ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
    : colors.primary;

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Underglow */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 rounded-full -z-10"
        animate={{
          opacity: isHovering ? opacity : 0.2,
          scale: isHovering ? 1.2 : 1,
          filter: isHovering ? `blur(${blur}px)` : `blur(${blur * 0.5}px)`,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          background: glowStyle,
          boxShadow: isHovering
            ? `0 0 ${spread * 2}px ${colors.primary}, 0 0 ${spread * 4}px ${colors.secondary}`
            : "none",
        }}
      />

      {/* Side Glows */}
      <motion.div
        className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3/4 rounded-full -z-10"
        animate={{
          opacity: isHovering ? opacity * 0.5 : 0,
          filter: `blur(${blur * 0.8}px)`,
        }}
        transition={{ duration: 0.4 }}
        style={{ background: colors.primary }}
      />

      <motion.div
        className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3/4 rounded-full -z-10"
        animate={{
          opacity: isHovering ? opacity * 0.5 : 0,
          filter: `blur(${blur * 0.8}px)`,
        }}
        transition={{ duration: 0.4 }}
        style={{ background: colors.secondary }}
      />

      {children}
    </motion.div>
  );
}
