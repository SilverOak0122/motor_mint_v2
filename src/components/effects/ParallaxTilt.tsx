import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ParallaxTiltProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowOnHover?: boolean;
  perspective?: number;
}

export function ParallaxTilt({
  children,
  className = "",
  tiltIntensity = 15,
  glowOnHover = true,
  perspective = 1000,
}: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    x.set(normalizedX * 0.5);
    y.set(normalizedY * 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {children}

        {/* Neon Underglow Effect */}
        {glowOnHover && (
          <motion.div
            className="absolute -inset-1 -z-10 rounded-xl opacity-0 blur-xl"
            animate={{
              opacity: isHovering ? 0.6 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: `linear-gradient(135deg, 
                hsl(186, 100%, 57%) 0%, 
                hsl(274, 100%, 65%) 50%,
                hsl(186, 100%, 57%) 100%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
