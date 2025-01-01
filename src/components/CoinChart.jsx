import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function CoinChart({ graphData }) {
  return (
    <div className="p-4 m-4 border-2 rounded-md border-slate-600 bg-slate-700">
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
