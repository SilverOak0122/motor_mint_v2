import { cars } from "@/data/cars";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Eye, Shield, AlertTriangle, CheckCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DriveChain = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold opacity-0 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              DriveChain Explorer
            </h1>
          </div>
          <p className="text-muted-foreground text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Explore blockchain-verified vehicle identities. Every car's history, health, and authenticity on-chain.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Vehicles', value: cars.length, color: 'text-primary' },
            { label: 'Verified', value: cars.filter(c => !c.isFraudulent).length, color: 'text-neon-green' },
            { label: 'Avg Health Score', value: `${Math.round(cars.reduce((acc, c) => acc + c.healthScore, 0) / cars.length)}%`, color: 'text-primary' },
            { label: 'Total Owners', value: cars.reduce((acc, c) => acc + c.ownersCount, 0), color: 'text-secondary' },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass rounded-xl p-4 text-center opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="glass rounded-2xl p-4 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by Vehicle ID, brand, or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>
        </div>

        {/* Table */}
        <div className="glass rounded-2xl overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Vehicle ID</TableHead>
                <TableHead className="text-muted-foreground">Vehicle</TableHead>
                <TableHead className="text-muted-foreground text-center">Health Score</TableHead>
                <TableHead className="text-muted-foreground">Last Maintenance</TableHead>
                <TableHead className="text-muted-foreground text-center">Owners</TableHead>
                <TableHead className="text-muted-foreground text-center">Status</TableHead>
                <TableHead className="text-muted-foreground text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCars.map((car, index) => (
                <TableRow 
                  key={car.id} 
                  className="border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-mono text-sm text-muted-foreground">
                    {car.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{car.name}</p>
                        <p className="text-xs text-muted-foreground">{car.brand} · {car.year}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: car.healthScore >= 90 ? 'hsl(var(--neon-green))' : 
                                           car.healthScore >= 70 ? 'hsl(var(--neon-blue))' : 
                                           'hsl(var(--neon-red))'
                        }}
                      />
                      <span className="font-semibold">{car.healthScore}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {car.lastMaintenance}
                  </TableCell>
                  <TableCell className="text-center">
                    {car.ownersCount}
                  </TableCell>
                  <TableCell className="text-center">
                    {car.isFraudulent ? (
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Suspicious
                      </Badge>
                    ) : (
                      <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/car/${car.id}`}>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default DriveChain;
