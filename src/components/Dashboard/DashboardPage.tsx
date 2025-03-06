
import { useWildlifeData } from "@/hooks/useWildlifeData";
import { WildlifeMap } from "./WildlifeMap";
import { AlertSystem } from "./AlertSystem";
import { ConservationMetrics } from "./ConservationMetrics";
import { Navbar } from "@/components/Navbar";
import { BlockchainTransaction } from "@/lib/mockData";
import { DataCard } from "@/components/Common/DataCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  FileCheck, 
  AlertTriangle, 
  Dna 
} from "lucide-react";

export function DashboardPage() {
  const { 
    wildlifeData, 
    alerts, 
    metrics, 
    transactions,
    loading, 
    error,
    resolveAlert 
  } = useWildlifeData();

  // Function to render transaction icon
  const getTransactionIcon = (type: BlockchainTransaction["type"]) => {
    switch (type) {
      case "donation":
        return <Wallet className="h-4 w-4 text-conservation-green" />;
      case "permit":
        return <FileCheck className="h-4 w-4 text-conservation-tan" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-conservation-alert" />;
      case "identity":
        return <Dna className="h-4 w-4 text-conservation-brown" />;
      default:
        return <Wallet className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6 text-conservation-green-dark">Wildlife Conservation Dashboard</h1>
        
        {/* Conservation Metrics */}
        <section className="mb-8">
          <ConservationMetrics metrics={metrics} loading={loading} />
        </section>
        
        {/* Main Dashboard Content */}
        <div className="grid gap-6 md:grid-cols-7">
          {/* Map Area - Takes 5/7 of the grid on desktop */}
          <div className="md:col-span-5">
            <WildlifeMap 
              animals={wildlifeData} 
              alerts={alerts}
              loading={loading} 
            />
          </div>
          
          {/* Alert System - Takes 2/7 of the grid on desktop */}
          <div className="md:col-span-2">
            <AlertSystem 
              alerts={alerts} 
              loading={loading}
              onResolveAlert={resolveAlert}
            />
          </div>
        </div>
        
        {/* Wildlife & Blockchain Section */}
        <div className="mt-8">
          <Tabs defaultValue="wildlife" className="w-full">
            <TabsList>
              <TabsTrigger value="wildlife">Wildlife Data</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain Transactions</TabsTrigger>
            </TabsList>
            <TabsContent value="wildlife">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {loading ? (
                  Array(3).fill(0).map((_, index) => (
                    <div key={index} className="h-[240px] rounded-lg bg-muted animate-pulse"></div>
                  ))
                ) : (
                  wildlifeData.slice(0, 6).map(animal => (
                    <DataCard
                      key={animal.id}
                      title={animal.name}
                      description={animal.species}
                      content={
                        <div className="space-y-3">
                          <div className="aspect-video bg-muted rounded-md overflow-hidden">
                            <img 
                              src={animal.image} 
                              alt={animal.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Status:</span>
                            <Badge className={
                              animal.status === 'healthy' 
                                ? 'bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800'
                                : animal.status === 'concerning'
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800'
                                : animal.status === 'critical'
                                ? 'bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800'
                            }>
                              {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Conservation:</span>
                            <span className="text-muted-foreground">{animal.conservationStatus}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Tracking ID:</span>
                            <span className="font-mono text-xs bg-conservation-beige px-2 py-0.5 rounded">
                              {animal.trackingId}
                            </span>
                          </div>
                        </div>
                      }
                    />
                  ))
                )}
              </div>
            </TabsContent>
            <TabsContent value="blockchain">
              <div className="border rounded-lg mt-4">
                <div className="p-4 border-b bg-muted/50">
                  <h3 className="font-medium">Recent Blockchain Transactions</h3>
                </div>
                <div className="divide-y">
                  {loading ? (
                    Array(3).fill(0).map((_, index) => (
                      <div key={index} className="p-4 animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    ))
                  ) : (
                    transactions.map(tx => (
                      <div key={tx.id} className="p-4 hover:bg-muted/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          {getTransactionIcon(tx.type)}
                          <span className="font-medium capitalize">{tx.type} Transaction</span>
                          <Badge 
                            variant="outline"
                            className={
                              tx.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800 ml-auto'
                                : tx.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800 ml-auto'
                                : 'bg-red-100 text-red-800 ml-auto'
                            }
                          >
                            {tx.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tx.description}</p>
                        <div className="mt-2 flex items-center gap-3 text-xs">
                          <div className="font-mono bg-muted px-2 py-0.5 rounded truncate max-w-[180px]">
                            {tx.hash}
                          </div>
                          <span className="text-muted-foreground">
                            {new Date(tx.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
