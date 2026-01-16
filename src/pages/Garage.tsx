import { cars } from "@/data/cars";
import GarageCard from "@/components/GarageCard";
import { Button } from "@/components/ui/button";
import { Car, Plus, Wallet } from "lucide-react";

const Garage = () => {
  // Simulating user owns first 2 cars
  const ownedCars = cars.slice(0, 2);

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold opacity-0 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                My Garage
              </h1>
            </div>
            <p className="text-muted-foreground text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Your personal collection of tokenized vehicles. View identities and manage ownership.
            </p>
          </div>

          <div className="flex gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Button variant="glass" className="gap-2">
              <Wallet className="w-4 h-4" />
              0x7a2F...9c4D
            </Button>
            <Button variant="neon" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Vehicle
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Vehicles', value: ownedCars.length },
            { label: 'Portfolio Value', value: `$${ownedCars.reduce((acc, c) => acc + c.priceUSD, 0).toLocaleString()}` },
            { label: 'MOTO Value', value: `${ownedCars.reduce((acc, c) => acc + c.priceMOTO, 0).toLocaleString()}` },
            { label: 'Avg Health', value: `${Math.round(ownedCars.reduce((acc, c) => acc + c.healthScore, 0) / ownedCars.length)}%` },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass rounded-xl p-4 text-center opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Garage Grid */}
        {ownedCars.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownedCars.map((car, index) => (
              <GarageCard key={car.id} car={car} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass rounded-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
              <Car className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">No Vehicles Yet</h3>
            <p className="text-muted-foreground mb-6">
              Start your collection by purchasing a tokenized vehicle from the marketplace.
            </p>
            <Button variant="neon" className="gap-2">
              Browse Marketplace
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Garage;
