import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CoinChart({ graphData }) {
  return (
    <div className="m-4 p-4 rounded-md bg-slate-200 border-2">
      <AreaChart
        width={700}
        height={400}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="8 8" />
        <XAxis dataKey="0" />
        <YAxis interval="5" />
        <Tooltip />
        <Area
          legendType="circle"
          type="monotone"
          dataKey="1"
          stroke="#FDBA74"
          strokeWidth="3"
          fill="#FED7AA"
        />
      </AreaChart>
    </div>
  );
}
