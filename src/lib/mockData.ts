
// Types for our wildlife data
export type AnimalStatus = 'healthy' | 'concerning' | 'critical' | 'unknown';

export interface WildlifeData {
  id: string;
  name: string;
  species: string;
  status: AnimalStatus;
  lastUpdated: string;
  location: {
    lat: number;
    lng: number;
  };
  trackingId: string;
  conservationStatus: string;
  image: string;
}

export interface AlertData {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  timestamp: string;
  resolved: boolean;
}

export interface ConservationMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  unit: string;
  icon?: string;
}

// Mock wildlife data for our dashboard
export const mockWildlifeData: WildlifeData[] = [
  {
    id: '1',
    name: 'Elsa',
    species: 'African Elephant',
    status: 'healthy',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    location: {
      lat: -2.6548,
      lng: 37.2613
    },
    trackingId: 'ELE-001-2023',
    conservationStatus: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Raja',
    species: 'Bengal Tiger',
    status: 'concerning',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    location: {
      lat: 20.7504,
      lng: 82.7505
    },
    trackingId: 'TIG-023-2023',
    conservationStatus: 'Endangered',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Congo',
    species: 'Mountain Gorilla',
    status: 'healthy',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    location: {
      lat: -1.4707,
      lng: 29.4450
    },
    trackingId: 'GOR-008-2023',
    conservationStatus: 'Critically Endangered',
    image: 'https://images.unsplash.com/photo-1548041607-0c6a58707902?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Aurora',
    species: 'Snow Leopard',
    status: 'critical',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    location: {
      lat: 30.9331,
      lng: 75.5589
    },
    trackingId: 'LEO-015-2023',
    conservationStatus: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1607606116242-357a0bd7c31b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Bao',
    species: 'Giant Panda',
    status: 'healthy',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
    location: {
      lat: 30.7617,
      lng: 104.0619
    },
    trackingId: 'PAN-007-2023',
    conservationStatus: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?q=80&w=1000&auto=format&fit=crop'
  }
];

// Mock alert data
export const mockAlerts: AlertData[] = [
  {
    id: 'alert-1',
    severity: 'critical',
    message: 'Possible poaching activity detected near tracking device ELE-001-2023',
    location: {
      lat: -2.6550,
      lng: 37.2620,
      name: 'Amboseli National Park'
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 mins ago
    resolved: false
  },
  {
    id: 'alert-2',
    severity: 'high',
    message: 'Unusual movement pattern detected for TIG-023-2023',
    location: {
      lat: 20.7510,
      lng: 82.7515,
      name: 'Kanha National Park'
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 mins ago
    resolved: false
  },
  {
    id: 'alert-3',
    severity: 'medium',
    message: 'Tracking device low battery for GOR-008-2023',
    location: {
      lat: -1.4715,
      lng: 29.4460,
      name: 'Virunga National Park'
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    resolved: true
  }
];

// Mock conservation metrics
export const mockConservationMetrics: ConservationMetric[] = [
  {
    id: 'metric-1',
    name: 'Protected Animals',
    value: 1245,
    change: 5.2,
    unit: 'animals'
  },
  {
    id: 'metric-2',
    name: 'Active Sanctuaries',
    value: 87,
    change: 2.8,
    unit: 'locations'
  },
  {
    id: 'metric-3',
    name: 'Monthly Donations',
    value: 324900,
    change: 10.5,
    unit: 'USD'
  },
  {
    id: 'metric-4',
    name: 'Poaching Attempts Prevented',
    value: 23,
    change: -12.4,
    unit: 'incidents'
  }
];

// Simulated blockchain transaction data 
export interface BlockchainTransaction {
  id: string;
  type: 'donation' | 'permit' | 'identity' | 'alert';
  hash: string;
  from: string;
  to: string;
  amount?: string;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  description: string;
}

export const mockBlockchainTransactions: BlockchainTransaction[] = [
  {
    id: 'tx-1',
    type: 'identity',
    hash: '0x3a1b2c3d4e5f...',
    from: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    to: '0x1234567890abcdef1234567890abcdef12345678',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    status: 'confirmed',
    description: 'New DWI created for Elsa (African Elephant)'
  },
  {
    id: 'tx-2',
    type: 'donation',
    hash: '0x7a8b9c0d1e2f...',
    from: '0xabc6bf26964af9d7eed9e03e53415d37aa12345',
    to: '0x1234567890abcdef1234567890abcdef12345678',
    amount: '0.5 ETH',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    status: 'confirmed',
    description: 'Conservation funding for Virunga National Park'
  },
  {
    id: 'tx-3',
    type: 'permit',
    hash: '0xf1e2d3c4b5a6...',
    from: '0x1234567890abcdef1234567890abcdef12345678',
    to: '0x9876543210fedcba9876543210fedcba98765432',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    status: 'confirmed',
    description: 'Transport permit issued for wildlife rehabilitation'
  },
  {
    id: 'tx-4',
    type: 'alert',
    hash: '0x6f7e8d9c0b1a...',
    from: '0x2468013579abcdef2468013579abcdef24680135',
    to: '0x1234567890abcdef1234567890abcdef12345678',
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    status: 'pending',
    description: 'Poaching alert verification in progress'
  }
];

// Function to simulate getting new data
export function getUpdatedWildlifeData(): WildlifeData[] {
  return mockWildlifeData.map(animal => {
    // Randomly update some animals' statuses and locations
    if (Math.random() > 0.7) {
      const statusOptions: AnimalStatus[] = ['healthy', 'concerning', 'critical', 'unknown'];
      const newStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
      
      // Small movement in location
      const latDelta = (Math.random() - 0.5) * 0.01;
      const lngDelta = (Math.random() - 0.5) * 0.01;
      
      return {
        ...animal,
        status: newStatus,
        lastUpdated: new Date().toISOString(),
        location: {
          lat: animal.location.lat + latDelta,
          lng: animal.location.lng + lngDelta
        }
      };
    }
    return animal;
  });
}

// Function to simulate new alerts
export function getNewAlerts(): AlertData[] {
  // Return existing alerts plus possibly a new one
  if (Math.random() > 0.8) {
    const animal = mockWildlifeData[Math.floor(Math.random() * mockWildlifeData.length)];
    const severityOptions: AlertData['severity'][] = ['low', 'medium', 'high', 'critical'];
    const severity = severityOptions[Math.floor(Math.random() * severityOptions.length)];
    
    const newAlert: AlertData = {
      id: `alert-${Date.now()}`,
      severity,
      message: `${severity === 'critical' ? 'Urgent: ' : ''}Unusual activity detected for ${animal.trackingId}`,
      location: {
        lat: animal.location.lat + (Math.random() - 0.5) * 0.005,
        lng: animal.location.lng + (Math.random() - 0.5) * 0.005,
        name: 'Wildlife Reserve'
      },
      timestamp: new Date().toISOString(),
      resolved: false
    };
    
    return [newAlert, ...mockAlerts.slice(0, 5)];
  }
  
  return mockAlerts;
}
