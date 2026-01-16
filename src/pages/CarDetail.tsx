import { useParams, Link } from "react-router-dom";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HealthGauge from "@/components/HealthGauge";
import Timeline from "@/components/Timeline";
import { 
  ArrowLeft, 
  Shield, 
  Zap, 
  Gauge, 
  Battery, 
  Cog,
  Calendar,
  Users,
  AlertTriangle,
  CheckCircle,
  Brain,
  Wallet
} from "lucide-react";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <main className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/marketplace">
            <Button variant="outline">Return to Marketplace</Button>
          </Link>
        </div>
      </main>
    );
  }

  const maintenanceEvents = car.maintenanceHistory.map((m) => ({
    date: m.date,
    title: m.type,
    description: m.description,
    verified: m.verified,
    type: 'success' as const,
  }));

  const ownershipEvents = car.ownershipHistory.map((o) => ({
    date: o.date,
    title: 'Ownership Transfer',
    description: `Transferred to ${o.owner}`,
    verified: true,
    type: 'neutral' as const,
  }));

  const specs = [
    { label: 'Horsepower', value: `${car.horsepower} HP`, icon: Gauge },
    { label: 'Drivetrain', value: car.drivetrain, icon: Cog },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} mi`, icon: Zap },
    { label: 'Color', value: car.color, icon: Battery },
    { label: 'Year', value: car.year, icon: Calendar },
    { label: 'Owners', value: car.ownersCount, icon: Users },
  ];

  if (car.range) {
    specs.push({ label: 'Range', value: `${car.range} mi`, icon: Battery });
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link to="/marketplace" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image & Basic Info */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden glass opacity-0 animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <img
                src={car.image}
                alt={`${car.year} ${car.brand} ${car.name}`}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-secondary/80 text-secondary-foreground border-0">
                  {car.type}
                </Badge>
                {!car.isFraudulent && (
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </Badge>
                )}
              </div>
            </div>

            {/* Price & Buy Section */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {car.brand} · {car.year}
                  </p>
                  <h1 className="font-display text-3xl font-bold">{car.name}</h1>
                </div>
                <HealthGauge score={car.healthScore} size="md" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border/50">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price (USD)</p>
                  <p className="font-display text-2xl font-bold">${car.priceUSD.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price (MOTO)</p>
                  <p className="font-display text-2xl font-bold text-primary">{car.priceMOTO.toLocaleString()} MOTO</p>
                </div>
              </div>

              {/* Crypto Payment Options */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">Pay with</p>
                <div className="flex gap-2">
                  {['ETH', 'USDC', 'MOTO', 'BTC'].map((coin) => (
                    <div key={coin} className="glass rounded-lg px-4 py-2 text-sm font-medium hover:border-primary/50 transition-colors cursor-pointer">
                      {coin}
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="hero" className="w-full gap-2">
                <Wallet className="w-5 h-5" />
                Buy Now
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secured by smart contract escrow
              </p>
            </div>

            {/* Specs Grid */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h3 className="font-display text-lg font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="glass rounded-lg p-4 text-center">
                    <spec.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                    <p className="font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - DriveChain Identity */}
          <div className="space-y-6">
            {/* DriveChain Header */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">DriveChain Identity</h2>
                  <p className="text-sm text-muted-foreground">Blockchain-verified vehicle data</p>
                </div>
              </div>

              {/* Fraud Status */}
              <div className={`flex items-center gap-3 p-4 rounded-xl ${car.isFraudulent ? 'bg-neon-red/10 border border-neon-red/30' : 'bg-neon-green/10 border border-neon-green/30'}`}>
                {car.isFraudulent ? (
                  <>
                    <AlertTriangle className="w-5 h-5 text-neon-red" />
                    <div>
                      <p className="font-medium text-neon-red">Fraud Alert</p>
                      <p className="text-sm text-muted-foreground">Suspicious data detected</p>
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 text-neon-green" />
                    <div>
                      <p className="font-medium text-neon-green">Verified Authentic</p>
                      <p className="text-sm text-muted-foreground">All data verified on-chain</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* AI Predictions */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-lg font-semibold">AI Predictions</h3>
              </div>
              <div className="space-y-4">
                {car.aiPredictions.map((prediction, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{prediction.type}</span>
                      <span className="text-sm text-muted-foreground">{prediction.timeframe}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{prediction.description}</p>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${prediction.probability}%` }}
                      />
                    </div>
                    <p className="text-xs text-primary mt-1 text-right">{prediction.probability}% confidence</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance History */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Timeline events={maintenanceEvents} title="Maintenance History" />
            </div>

            {/* Ownership History */}
            <div className="glass rounded-2xl p-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Timeline events={ownershipEvents} title="Ownership History" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetail;
