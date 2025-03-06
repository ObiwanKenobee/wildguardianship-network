
import { Button } from "@/components/ui/button";
import { useWeb3 } from "@/context/Web3Context";
import { Wallet, LogOut, Loader2 } from "lucide-react";

export function WalletConnect() {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWeb3();

  if (isConnecting) {
    return (
      <Button disabled className="h-9 px-4">
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        Connecting...
      </Button>
    );
  }

  if (isConnected && account) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden md:inline text-sm text-conservation-green-dark font-medium">
          {account.substring(0, 6)}...{account.substring(account.length - 4)}
        </span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={disconnectWallet}
          className="border-conservation-green text-conservation-green hover:text-conservation-green-dark"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={connectWallet}
      className="bg-conservation-green hover:bg-conservation-green-dark transition-colors"
    >
      <Wallet className="h-4 w-4 mr-2" />
      Connect Wallet
    </Button>
  );
}
