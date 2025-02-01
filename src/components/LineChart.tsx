import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
}

export function LineChart({ data, title }: LineChartProps): React.ReactElement {
  return (
    <div className="bg-white max-w-2xl p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
