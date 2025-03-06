
import { useEffect, useRef } from 'react';
import { WildlifeData, AlertData } from '@/lib/mockData';
import { DataCard } from "@/components/Common/DataCard";

interface WildlifeMapProps {
  animals: WildlifeData[];
  alerts: AlertData[];
  loading: boolean;
}

export function WildlifeMap({ animals, alerts, loading }: WildlifeMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Simulated map implementation - in a real app, would use Mapbox, Google Maps, or Leaflet
  useEffect(() => {
    if (loading || !mapRef.current) return;
    
    const mapContainer = mapRef.current;
    
    // Clear any existing content
    mapContainer.innerHTML = '';
    
    // Create a simple HTML/CSS-based map simulation
    const mapElement = document.createElement('div');
    mapElement.className = 'relative w-full h-full bg-conservation-beige rounded-lg';
    
    // Simple grid lines
    for (let i = 0; i < 10; i++) {
      const horizontalLine = document.createElement('div');
      horizontalLine.className = 'absolute w-full h-px bg-black/10';
      horizontalLine.style.top = `${i * 10}%`;
      mapElement.appendChild(horizontalLine);
      
      const verticalLine = document.createElement('div');
      verticalLine.className = 'absolute h-full w-px bg-black/10';
      verticalLine.style.left = `${i * 10}%`;
      mapElement.appendChild(verticalLine);
    }
    
    // Add animals
    animals.forEach(animal => {
      // Convert lat/lng to simple x/y coordinates for our demo
      // This is just a visual simulation, not geographically accurate
      const x = ((animal.location.lng + 180) / 360) * 100;
      const y = ((90 - animal.location.lat) / 180) * 100;
      
      const marker = document.createElement('div');
      marker.className = 'absolute w-4 h-4 -ml-2 -mt-2 rounded-full cursor-pointer';
      marker.style.left = `${x}%`;
      marker.style.top = `${y}%`;
      
      // Color based on status
      if (animal.status === 'healthy') {
        marker.className += ' bg-green-500';
      } else if (animal.status === 'concerning') {
        marker.className += ' bg-yellow-500';
      } else if (animal.status === 'critical') {
        marker.className += ' bg-red-500';
      } else {
        marker.className += ' bg-gray-500';
      }
      
      // Tooltip on hover
      marker.title = `${animal.name} (${animal.species})`;
      
      marker.addEventListener('click', () => {
        alert(`${animal.name} (${animal.species})\nStatus: ${animal.status}\nLocation: ${animal.location.lat.toFixed(4)}, ${animal.location.lng.toFixed(4)}`);
      });
      
      mapElement.appendChild(marker);
    });
    
    // Add alerts
    alerts.filter(alert => !alert.resolved).forEach(alert => {
      const x = ((alert.location.lng + 180) / 360) * 100;
      const y = ((90 - alert.location.lat) / 180) * 100;
      
      const alertMarker = document.createElement('div');
      alertMarker.className = 'absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 animate-pulse-alert cursor-pointer';
      alertMarker.style.left = `${x}%`;
      alertMarker.style.top = `${y}%`;
      
      // Color based on severity
      if (alert.severity === 'critical') {
        alertMarker.className += ' border-red-600 bg-red-200';
      } else if (alert.severity === 'high') {
        alertMarker.className += ' border-orange-500 bg-orange-200';
      } else if (alert.severity === 'medium') {
        alertMarker.className += ' border-yellow-500 bg-yellow-200';
      } else {
        alertMarker.className += ' border-blue-500 bg-blue-200';
      }
      
      // Tooltip on hover
      alertMarker.title = alert.message;
      
      alertMarker.addEventListener('click', () => {
        alert(`Alert: ${alert.message}\nLocation: ${alert.location.name}\nStatus: ${alert.resolved ? 'Resolved' : 'Active'}`);
      });
      
      mapElement.appendChild(alertMarker);
    });
    
    // Add the map to the container
    mapContainer.appendChild(mapElement);
    
    return () => {
      mapContainer.innerHTML = '';
    };
  }, [animals, alerts, loading]);
  
  return (
    <DataCard
      title="Wildlife Tracking Map"
      description="Live location of monitored animals and active alerts"
      content={
        <div className={`map-container ${loading ? 'animate-pulse' : ''}`} ref={mapRef}>
          {loading && (
            <div className="flex items-center justify-center h-full">
              <span className="text-lg text-muted-foreground">Loading map data...</span>
            </div>
          )}
        </div>
      }
    />
  );
}
