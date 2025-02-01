import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface BarChartProps {
  data: DataPoint[];
  title: string;
}

export function BarChart({ data, title }: BarChartProps): React.ReactElement {
  return (
    <div className="bg-white max-w-2xl p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart width={300} height={100} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
