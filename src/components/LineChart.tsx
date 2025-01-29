import React from "react";

export const LineChart: React.FC = () => {
  return (
    <div className="w-[400px] h-[300px] bg-white max-w-2xl p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
      <div className="h-64 flex items-end gap-2">
        {[40, 60, 25, 85, 30, 70, 50].map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
};
