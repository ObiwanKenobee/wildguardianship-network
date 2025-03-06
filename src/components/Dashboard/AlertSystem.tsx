
import { AlertData } from "@/lib/mockData";
import { DataCard } from "@/components/Common/DataCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface AlertSystemProps {
  alerts: AlertData[];
  loading: boolean;
  onResolveAlert: (alertId: string) => void;
}

export function AlertSystem({ alerts, loading, onResolveAlert }: AlertSystemProps) {
  // Get alert severity icon
  const getAlertIcon = (severity: AlertData["severity"]) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "high":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "low":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  // Format relative time
  const getRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  // Get severity text for badge
  const getSeverityText = (severity: AlertData["severity"]) => {
    switch (severity) {
      case "critical":
        return "Critical";
      case "high":
        return "High";
      case "medium":
        return "Medium";
      case "low":
        return "Low";
      default:
        return "Unknown";
    }
  };

  // Get active alerts count
  const activeAlertsCount = alerts.filter(alert => !alert.resolved).length;

  return (
    <DataCard
      title={
        <div className="flex items-center justify-between">
          <span>Alert System</span>
          {activeAlertsCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {activeAlertsCount} active
            </Badge>
          )}
        </div>
      }
      description="Real-time wildlife protection alerts"
      content={
        <ScrollArea className="h-[300px] pr-3">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex animate-pulse">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="ml-4 space-y-2 flex-1">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : alerts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p>No active alerts at this time</p>
            </div>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded-lg border ${
                    alert.resolved 
                      ? 'bg-muted/50 border-border' 
                      : 'bg-white border-conservation-tan'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="mt-0.5">{getAlertIcon(alert.severity)}</div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={alert.severity === 'critical' ? 'destructive' : 'outline'}
                            className={`${
                              alert.severity === 'high' 
                                ? 'bg-orange-100 text-orange-800 hover:bg-orange-100' 
                                : alert.severity === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                                : alert.severity === 'low'
                                ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                                : ''
                            }`}
                          >
                            {getSeverityText(alert.severity)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {getRelativeTime(alert.timestamp)}
                          </span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm">{alert.message}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Location: {alert.location.name}
                      </div>
                      
                      {!alert.resolved && (
                        <div className="mt-3 flex justify-end">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => onResolveAlert(alert.id)}
                            className="text-xs"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Mark as resolved
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      }
    />
  );
}
