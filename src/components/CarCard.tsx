import { Link } from "react-router-dom";
import { Car } from "@/data/cars";
import { Badge } from "./ui/badge";
import { Zap, Gauge, Battery, Shield } from "lucide-react";
import { ParallaxTilt, NeonUnderglow } from "./effects";

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard = ({ car, index = 0 }: CarCardProps) => {
  const typeIcons = {
    EV: <Zap className="w-3 h-3" />,
    Sport: <Gauge className="w-3 h-3" />,
    Luxury: <Shield className="w-3 h-3" />,
    SUV: <Battery className="w-3 h-3" />,
  };

  return (
    <Link to={`/car/${car.id}`}>
      <ParallaxTilt tiltIntensity={8} glowOnHover={true}>
        <NeonUnderglow glowColor="gradient" intensity="medium">
          <article 
            className={`group glass rounded-2xl overflow-hidden opacity-0 animate-scale-in`}
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={car.image}
                alt={`${car.year} ${car.brand} ${car.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Health Score Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 glass rounded-full px-3 py-1.5">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: car.healthScore >= 90 ? 'hsl(var(--neon-green))' : 
                                     car.healthScore >= 70 ? 'hsl(var(--neon-blue))' : 
                                     'hsl(var(--neon-red))'
                  }}
                />
                <span className="text-xs font-medium">{car.healthScore}%</span>
              </div>

              {/* Type Badge */}
              <Badge 
                className="absolute top-4 left-4 gap-1 bg-secondary/80 text-secondary-foreground border-0"
              >
                {typeIcons[car.type]}
                {car.type}
              </Badge>

              {/* Hover Specs Overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="text-muted-foreground">Power</p>
                    <p className="font-semibold text-primary">{car.horsepower} HP</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Mileage</p>
                    <p className="font-semibold">{car.mileage.toLocaleString()} mi</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{car.range ? 'Range' : 'Drive'}</p>
                    <p className="font-semibold">{car.range ? `${car.range} mi` : car.drivetrain}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {car.brand} · {car.year}
                  </p>
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {car.name}
                  </h3>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end justify-between pt-3 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Price</p>
                  <p className="font-display text-xl font-bold">
                    ${car.priceUSD.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">MOTO</p>
                  <p className="font-semibold text-primary">
                    {car.priceMOTO.toLocaleString()} <span className="text-xs">MOTO</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Neon Border Effect */}
            <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
          </article>
        </NeonUnderglow>
      </ParallaxTilt>
    </Link>
  );
};

export default CarCard;
