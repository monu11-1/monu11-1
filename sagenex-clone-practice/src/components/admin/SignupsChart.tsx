"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { signupTrend } from "@/data/admin";
import { ChartFrame } from "@/components/ui/ChartFrame";

export function SignupsChart() {
  return (
    <ChartFrame className="h-64">
      {({ width, height }) => (
        <BarChart
          width={width}
          height={height}
          data={signupTrend}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "#667085", fontSize: 12 }} />
          <YAxis tick={{ fill: "#667085", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "#e5e7eb",
              fontSize: 12,
            }}
          />
          <Bar
            dataKey="signups"
            name="Signups"
            fill="#d31d3e"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      )}
    </ChartFrame>
  );
}
