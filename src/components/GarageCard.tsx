import { Car } from "@/data/cars";
import HealthGauge from "./HealthGauge";
import { Button } from "./ui/button";
import { ArrowRightLeft, Eye, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface GarageCardProps {
  car: Car;
  index?: number;
}

const GarageCard = ({ car, index = 0 }: GarageCardProps) => {
  return (
    <article 
      className="group relative glass rounded-2xl overflow-hidden card-hover opacity-0 animate-scale-in"
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
    >
      {/* Holographic Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* DriveChain Badge */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 glass rounded-full px-3 py-1.5 border border-primary/30">
        <Shield className="w-3 h-3 text-primary" />
        <span className="text-xs font-medium text-primary">DriveChain Verified</span>
      </div>

      {/* Car Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Health Gauge Overlay */}
        <div className="absolute bottom-4 right-4">
          <HealthGauge score={car.healthScore} size="sm" showLabel={false} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {car.brand} · {car.year} · {car.color}
          </p>
          <h3 className="font-display text-xl font-bold group-hover:gradient-text transition-all">
            {car.name}
          </h3>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Mileage</p>
            <p className="font-semibold text-sm">{car.mileage.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Owners</p>
            <p className="font-semibold text-sm">{car.ownersCount}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Value</p>
            <p className="font-semibold text-sm text-primary">{car.priceMOTO} MOTO</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="glass" className="w-full gap-2">
              <Eye className="w-4 h-4" />
              View Identity
            </Button>
          </Link>
          <Button variant="outline" className="gap-2">
            <ArrowRightLeft className="w-4 h-4" />
            Transfer
          </Button>
        </div>
      </div>

      {/* Collectible Card Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 group-hover:animate-border-glow transition-all duration-500 pointer-events-none" />
    </article>
  );
};

export default GarageCard;
