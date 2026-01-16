import { motion } from "framer-motion";

interface LoadingWheelsProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { wheel: 40, spoke: 12, rim: 16 },
  md: { wheel: 60, spoke: 18, rim: 24 },
  lg: { wheel: 80, spoke: 24, rim: 32 },
};

function NeonWheel({ size, delay = 0 }: { size: number; delay?: number }) {
  const spokeCount = 6;
  const rimRadius = size * 0.4;
  const hubRadius = size * 0.15;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <defs>
        <linearGradient id={`wheelGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DE3FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <filter id={`wheelGlow-${delay}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#wheelGlow-${delay})`}>
        {/* Outer Rim */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={rimRadius}
          stroke={`url(#wheelGradient-${delay})`}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Inner Rim */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={rimRadius * 0.8}
          stroke={`url(#wheelGradient-${delay})`}
          strokeWidth="1.5"
          fill="none"
          opacity={0.5}
        />

        {/* Hub */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={hubRadius}
          fill={`url(#wheelGradient-${delay})`}
        />

        {/* Spokes */}
        {Array.from({ length: spokeCount }).map((_, i) => {
          const angle = (i * 360) / spokeCount;
          const rad = (angle * Math.PI) / 180;
          const x1 = size / 2 + Math.cos(rad) * hubRadius;
          const y1 = size / 2 + Math.sin(rad) * hubRadius;
          const x2 = size / 2 + Math.cos(rad) * rimRadius * 0.9;
          const y2 = size / 2 + Math.sin(rad) * rimRadius * 0.9;

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#wheelGradient-${delay})`}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            />
          );
        })}

        {/* Rim Highlight */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={rimRadius}
          stroke="#2DE3FF"
          strokeWidth="1"
          fill="none"
          strokeDasharray={`${rimRadius * 0.5} ${rimRadius * 2}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
      </g>
    </motion.svg>
  );
}

export function LoadingWheels({ size = "md", showText = true }: LoadingWheelsProps) {
  const wheelSize = sizes[size].wheel;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Two Wheels Side by Side */}
      <div className="flex items-center gap-8">
        <NeonWheel size={wheelSize} delay={0} />
        <NeonWheel size={wheelSize} delay={0.1} />
      </div>

      {/* Electric Particle Trail */}
      <div className="relative h-2 w-32">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #2DE3FF 50%, #A855F7 100%)",
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Loading Text */}
      {showText && (
        <motion.div
          className="flex items-center gap-1 font-display text-sm tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-primary">LOADING</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
            className="text-primary"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
            className="text-secondary"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
            className="text-primary"
          >
            .
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}

export function FullScreenLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 227, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 227, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <LoadingWheels size="lg" />
    </motion.div>
  );
}
