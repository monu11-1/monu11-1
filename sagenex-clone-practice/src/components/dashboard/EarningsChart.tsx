"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { earningsSeries } from "@/data/dashboard";

export function EarningsChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={earningsSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fill: "#667085", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#667085", fontSize: 12 }}
            tickFormatter={(value) => `₹${Number(value) / 1000}k`}
          />
          <Tooltip
            formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, undefined]}
            contentStyle={{
              borderRadius: 12,
              borderColor: "#e5e7eb",
              fontSize: 12,
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="simple"
            name="Simple (demo)"
            stroke="#d31d3e"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="compound"
            name="Compound (demo)"
            stroke="#00a86b"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
