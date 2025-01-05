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
    <div className="chart">
      <AreaChart
        width={400}
        height={200}
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
