"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { allocationSlices } from "@/data/dashboard";
import { ChartFrame } from "@/components/ui/ChartFrame";

export function AllocationChart() {
  return (
    <div className="flex h-72 flex-col gap-4 sm:flex-row sm:items-center">
      <ChartFrame className="h-56 w-full sm:h-full sm:flex-1">
        {({ width, height }) => (
          <PieChart width={width} height={height}>
            <Pie
              data={allocationSlices}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={Math.min(width, height) * 0.28}
              outerRadius={Math.min(width, height) * 0.42}
              paddingAngle={3}
            >
              {allocationSlices.map((slice) => (
                <Cell key={slice.name} fill={slice.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, "Share"]}
              contentStyle={{
                borderRadius: 12,
                borderColor: "#e5e7eb",
                fontSize: 12,
              }}
            />
          </PieChart>
        )}
      </ChartFrame>
      <ul className="space-y-2 sm:w-44">
        {allocationSlices.map((slice) => (
          <li key={slice.name} className="flex items-center gap-2 text-sm">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: slice.color }}
            />
            <span className="flex-1 text-muted">{slice.name}</span>
            <span className="font-semibold text-foreground">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
