import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function SentimentBar({ title, sentiment }) {
  return (
    <div className="text-xl text-slate-100">
      <BarChart
        width={500}
        height={300}
        data={[
          {
            name: "sentiment",
            positive: `${sentiment}`,
            negative: `${100 - sentiment}`,
          },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="positive"
          fill="#bbf7d0"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="negative"
          fill="#fca5a5"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
}
