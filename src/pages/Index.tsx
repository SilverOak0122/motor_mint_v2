import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Link2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import heroCarImage from "@/assets/hero-car.jpg";
import { MotorMintLogo } from "@/components/MotorMintLogo";

const Index = () => {
  const featuredCars = cars.slice(0, 3);

  const features = [
    {
      icon: Coins,
      title: "Tokenized Ownership",
      description: "Every vehicle is represented as a unique NFT on the blockchain, enabling seamless transfers and fractional ownership.",
    },
    {
      icon: Shield,
      title: "DriveChain Identity",
      description: "AI-powered blockchain identity tracks maintenance, ownership history, and health scores for complete transparency.",
    },
    {
      icon: Link2,
      title: "Buy with Crypto",
      description: "Purchase vehicles using MOTO tokens or major cryptocurrencies through our secure escrow smart contracts.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img
            src={heroCarImage}
            alt="Futuristic electric sports car"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Now Live on Mainnet</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <span className="text-foreground">Drive the Future.</span>
              <br />
              <span className="gradient-text neon-text">On Chain.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              The world's first tokenized vehicle marketplace with AI-powered blockchain identity. 
              Buy, sell, and verify luxury vehicles with complete transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <Link to="/marketplace">
                <Button variant="hero" size="xl" className="gap-3">
                  Explore Cars
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/drivechain">
                <Button variant="glass" size="xl" className="gap-3">
                  <Shield className="w-5 h-5" />
                  View DriveChain
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">$2.4M+</p>
                <p className="text-sm text-muted-foreground">Trading Volume</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">1,247</p>
                <p className="text-sm text-muted-foreground">Verified Cars</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-muted-foreground">Fraud Prevention</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Future of Vehicle Ownership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining blockchain technology with AI analytics to create the most transparent 
              and secure vehicle marketplace in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Featured Vehicles
              </h2>
              <p className="text-muted-foreground">
                Hand-picked luxury vehicles verified on the blockchain.
              </p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Drive the Future</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of collectors and enthusiasts trading verified vehicles on the blockchain.
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="xl" className="gap-3">
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MotorMintLogo size="sm" animated={false} />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MotorMint. Powered by DriveChain Technology.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
