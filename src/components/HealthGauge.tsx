import { cn } from "@/lib/utils";

interface HealthGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const HealthGauge = ({ score, size = "md", showLabel = true }: HealthGaugeProps) => {
  const sizes = {
    sm: { container: "w-16 h-16", text: "text-sm", stroke: 4 },
    md: { container: "w-24 h-24", text: "text-xl", stroke: 6 },
    lg: { container: "w-32 h-32", text: "text-2xl", stroke: 8 },
  };

  const { container, text, stroke } = sizes[size];
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 90) return "hsl(var(--neon-green))";
    if (score >= 70) return "hsl(var(--neon-blue))";
    if (score >= 50) return "hsl(160, 100%, 50%)";
    return "hsl(var(--neon-red))";
  };

  const color = getColor(score);

  return (
    <div className={cn("relative", container)}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={stroke}
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 8px ${color})`,
          }}
        />
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className={cn("font-display font-bold", text)}
          style={{ color }}
        >
          {score}
        </span>
        {showLabel && (
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Health
          </span>
        )}
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-20 blur-xl"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default HealthGauge;
