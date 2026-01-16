import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Car, LayoutGrid, Shield, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import WalletButton from "./WalletButton";
import { MotorMintLogo } from "./MotorMintLogo";

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/marketplace", label: "Marketplace", icon: LayoutGrid },
    { to: "/drivechain", label: "DriveChain", icon: Shield },
    { to: "/garage", label: "Garage", icon: Car },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <MotorMintLogo size="sm" showText={false} animated={false} className="h-10" />
            <span className="font-display text-xl font-bold gradient-text hidden sm:block">MotorMint</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link key={link.to} to={link.to}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "relative group px-4",
                      isActive && "text-primary"
                    )}
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.label}
                    <span className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-neon rounded-full transition-all duration-300",
                      isActive ? "w-8" : "w-0 group-hover:w-6"
                    )} />
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Wallet Connect */}
          <WalletButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
