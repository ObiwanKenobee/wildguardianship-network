
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Web3Provider } from "@/context/Web3Context";
import { ArrowRight, Dna, Globe, Shield, Wallet } from "lucide-react";

const Index = () => {
  return (
    <Web3Provider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 conservation-gradient">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Protecting Wildlife Through Blockchain
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              WildGuardian unifies global conservation efforts with decentralized technology to combat poaching and protect endangered species.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-conservation-green-dark hover:bg-conservation-beige">
                <Link to="/dashboard">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/blockchain">
                  <Wallet className="mr-2 h-5 w-5" />
                  View Blockchain
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-conservation-beige/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-conservation-green-dark">Key Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-conservation-green/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-conservation-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Poaching Alerts</h3>
                <p className="text-muted-foreground">
                  IoT-connected devices monitor wildlife and instantly alert rangers to potential threats.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-conservation-green/10 rounded-full flex items-center justify-center mb-4">
                  <Dna className="h-6 w-6 text-conservation-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Decentralized Wildlife ID</h3>
                <p className="text-muted-foreground">
                  Blockchain-based identity system for each animal, ensuring transparent and tamper-proof records.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-conservation-green/10 rounded-full flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-conservation-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Conservation Contracts</h3>
                <p className="text-muted-foreground">
                  Automate funding distribution based on verified conservation goals and outcomes.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-conservation-green/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-conservation-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Sanctuary Network</h3>
                <p className="text-muted-foreground">
                  Connect conservationists worldwide to share data, strategies, and resources.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-conservation-brown/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-conservation-brown">Join the Wildlife Protection Revolution</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Connect your wallet to explore the full capabilities of our decentralized wildlife protection network.
            </p>
            <Button asChild size="lg" className="bg-conservation-brown hover:bg-conservation-brown/90">
              <Link to="/dashboard">
                Get Started
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-conservation-green-dark text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Globe className="h-6 w-6 mr-2" />
                <span className="text-xl font-semibold">WildGuardian</span>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-white/70">
                  © 2023 WildGuardian Network. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Web3Provider>
  );
};

export default Index;
