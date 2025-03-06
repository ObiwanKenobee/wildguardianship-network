
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletConnect } from "@/components/Web3/WalletConnect";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-4">
          <Globe className="h-6 w-6 text-conservation-green" />
          <Link to="/" className="font-semibold text-xl text-conservation-green-dark">
            WildGuardian
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-6 font-medium">
          <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/animals" className="text-foreground/80 hover:text-foreground transition-colors">
            Animals
          </Link>
          <Link to="/blockchain" className="text-foreground/80 hover:text-foreground transition-colors">
            Blockchain
          </Link>
          <Link to="/alerts" className="text-foreground/80 hover:text-foreground transition-colors">
            Alerts
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden flex-1 justify-end">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Auth/Wallet Section */}
        <div className="hidden md:flex items-center gap-2">
          <WalletConnect />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 pb-6 border-b bg-background shadow-sm">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/dashboard" 
              className="px-2 py-1 rounded hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/animals" 
              className="px-2 py-1 rounded hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Animals
            </Link>
            <Link 
              to="/blockchain" 
              className="px-2 py-1 rounded hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blockchain
            </Link>
            <Link 
              to="/alerts" 
              className="px-2 py-1 rounded hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Alerts
            </Link>
            <div className="pt-2">
              <WalletConnect />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
