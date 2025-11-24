export interface ComparisonData {
  category: string;
  question: string;
  models: {
    name: string;
    response: string;
    rating: number;
    color: string;
  }[];
}

export interface MetricData {
  metric: string;
  value: number;
  fullMark: number;
}

export interface SensorData {
  parameter: string;
  value: string;
  unit: string;
  status: 'Normal' | 'Warning' | 'Critical';
  description: string;
}
