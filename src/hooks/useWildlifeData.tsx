
import { useState, useEffect } from 'react';
import { 
  WildlifeData, 
  AlertData, 
  ConservationMetric,
  BlockchainTransaction,
  mockWildlifeData, 
  mockAlerts, 
  mockConservationMetrics,
  mockBlockchainTransactions,
  getUpdatedWildlifeData,
  getNewAlerts
} from '@/lib/mockData';

export function useWildlifeData() {
  const [wildlifeData, setWildlifeData] = useState<WildlifeData[]>(mockWildlifeData);
  const [alerts, setAlerts] = useState<AlertData[]>(mockAlerts);
  const [metrics, setMetrics] = useState<ConservationMetric[]>(mockConservationMetrics);
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>(mockBlockchainTransactions);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate data fetching
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setWildlifeData(mockWildlifeData);
        setAlerts(mockAlerts);
        setMetrics(mockConservationMetrics);
        setTransactions(mockBlockchainTransactions);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch wildlife data');
        setLoading(false);
        console.error('Error fetching wildlife data:', err);
      }
    };

    fetchInitialData();
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const updateInterval = setInterval(() => {
      if (!loading) {
        // Update wildlife data
        setWildlifeData(getUpdatedWildlifeData());
        
        // Update alerts occasionally
        if (Math.random() > 0.7) {
          setAlerts(getNewAlerts());
        }
        
        // Update metrics occasionally with small random changes
        if (Math.random() > 0.8) {
          setMetrics(prevMetrics => 
            prevMetrics.map(metric => ({
              ...metric,
              value: Math.max(0, metric.value + (Math.random() > 0.5 ? 1 : -1) * Math.floor(metric.value * 0.01)),
              change: metric.change + (Math.random() - 0.5) * 0.8
            }))
          );
        }
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(updateInterval);
  }, [loading]);

  // Function to mark an alert as resolved
  const resolveAlert = (alertId: string) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === alertId ? { ...alert, resolved: true } : alert
      )
    );
  };

  return { 
    wildlifeData, 
    alerts, 
    metrics, 
    transactions,
    loading, 
    error,
    resolveAlert
  };
}
