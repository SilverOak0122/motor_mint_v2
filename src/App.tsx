import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { config } from './lib/wagmi';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import CarDetail from "./pages/CarDetail";
import DriveChain from "./pages/DriveChain";
import Garage from "./pages/Garage";
import NotFound from "./pages/NotFound";
import { NeonCursor } from "./components/effects";

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: 'hsl(187, 100%, 57%)',
          accentColorForeground: 'hsl(220, 13%, 8%)',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
      >
        <TooltipProvider>
          <NeonCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/car/:id" element={<CarDetail />} />
              <Route path="/drivechain" element={<DriveChain />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
