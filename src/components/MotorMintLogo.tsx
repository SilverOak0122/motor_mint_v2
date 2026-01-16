import { motion } from "framer-motion";

interface MotorMintLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  animated?: boolean;
}

const sizes = {
  sm: { width: 140, height: 50 },
  md: { width: 200, height: 70 },
  lg: { width: 280, height: 90 },
  xl: { width: 360, height: 110 },
};

export function MotorMintLogo({
  className = "",
  size = "md",
  showText = true,
  animated = true,
}: MotorMintLogoProps) {
  const { width, height } = sizes[size];
  const viewWidth = showText ? 320 : 140;

  return (
    <motion.svg
      width={showText ? width : width * 0.45}
      height={height}
      viewBox={`0 0 ${viewWidth} 100`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animated ? { opacity: 0 } : false}
      animate={animated ? { opacity: 1 } : false}
      transition={{ duration: 0.8 }}
    >
      <defs>
        {/* Cyan to Purple Gradient */}
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DE3FF" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stronger Glow */}
        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sports Car Silhouette */}
      <g filter="url(#neonGlow)">
        <motion.path
          d="M15 55 
             L25 55 
             L30 45 
             L45 40 
             L55 35 
             L75 32 
             L95 35 
             L105 40 
             L110 45 
             L115 55 
             L125 55"
          stroke="url(#neonGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Car Body Detail Lines */}
        <motion.path
          d="M35 45 L55 38 L90 38 L105 45"
          stroke="url(#neonGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Front Wheel */}
        <motion.circle
          cx="35"
          cy="58"
          r="8"
          stroke="url(#neonGradient)"
          strokeWidth="2"
          fill="none"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="35"
          cy="58"
          r="4"
          fill="url(#neonGradient)"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />

        {/* Rear Wheel */}
        <motion.circle
          cx="105"
          cy="58"
          r="8"
          stroke="url(#neonGradient)"
          strokeWidth="2"
          fill="none"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
        <motion.circle
          cx="105"
          cy="58"
          r="4"
          fill="url(#neonGradient)"
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        />

        {/* Headlight */}
        <motion.ellipse
          cx="18"
          cy="52"
          rx="3"
          ry="2"
          fill="#2DE3FF"
          filter="url(#strongGlow)"
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Taillight */}
        <motion.ellipse
          cx="122"
          cy="52"
          rx="2"
          ry="1.5"
          fill="#A855F7"
          filter="url(#strongGlow)"
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.7 }}
        />
      </g>

      {/* MOTORMINT Text */}
      {showText && (
        <motion.text
          x="145"
          y="55"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="24"
          fill="url(#neonGradient)"
          filter="url(#neonGlow)"
          initial={animated ? { opacity: 0, x: 155 } : { opacity: 1, x: 145 }}
          animate={{ opacity: 1, x: 145 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          MOTORMINT
        </motion.text>
      )}
    </motion.svg>
  );
}
