
import { ConservationMetric } from "@/lib/mockData";
import { DataCard } from "@/components/Common/DataCard";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ConservationMetricsProps {
  metrics: ConservationMetric[];
  loading: boolean;
}

export function ConservationMetrics({ metrics, loading }: ConservationMetricsProps) {
  // Format the metric value for display
  const formatMetricValue = (value: number, unit: string) => {
    if (unit === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    }

    // For large numbers, format with k suffix
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k ${unit}`;
    }

    return `${value} ${unit}`;
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <DataCard
          key={metric.id}
          title={metric.name}
          content={
            <div className="flex flex-col space-y-2">
              <span className="text-2xl font-bold">
                {formatMetricValue(metric.value, metric.unit)}
              </span>
              <div className="flex items-center text-sm">
                {metric.change > 0 ? (
                  <>
                    <ArrowUpIcon className="w-4 h-4 mr-1 text-green-500" />
                    <span className="text-green-500">{metric.change.toFixed(1)}%</span>
                  </>
                ) : (
                  <>
                    <ArrowDownIcon className="w-4 h-4 mr-1 text-red-500" />
                    <span className="text-red-500">{Math.abs(metric.change).toFixed(1)}%</span>
                  </>
                )}
                <span className="ml-1 text-muted-foreground">from last month</span>
              </div>
            </div>
          }
          className={loading ? "animate-pulse" : ""}
        />
      ))}

      {/* Chart Card */}
      <div className="col-span-full mt-4">
        <DataCard
          title="Conservation Metrics Trend"
          description="Monthly tracking of key conservation indicators"
          content={
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={metrics}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value: number, name: string, props: any) => {
                      const unit = props.payload.unit;
                      return [formatMetricValue(value, unit), name];
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#40916C" 
                    name="Current Value"
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          }
          className={loading ? "animate-pulse" : ""}
        />
      </div>
    </div>
  );
}
