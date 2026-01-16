import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxTilt } from "./effects";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <ParallaxTilt tiltIntensity={10} glowOnHover={true}>
        <div className="group glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300">
          {/* Icon */}
          <motion.div 
            className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center mb-5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon className="w-7 h-7 text-primary-foreground" />
          </motion.div>

          {/* Content */}
          <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Decorative Line */}
          <motion.div 
            className="mt-5 h-0.5 w-12 bg-gradient-neon rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            style={{ originX: 0 }}
          />
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

export default FeatureCard;
