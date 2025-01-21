import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", Present: 400, Absent: 800 },
  { day: "Tue", Present: 200, Absent: 300 },
  { day: "Wed", Present: 600, Absent: 400 },
  { day: "Thu", Present: 300, Absent: 500 },
  { day: "Fri", Present: 500, Absent: 400 },
  { day: "Sat", Present: 400, Absent: 300 },
  { day: "Sun", Present: 400, Absent: 600 },
];

const DataBarChart = () => {
  return (
    <ResponsiveContainer height={250} width="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          padding={{ left: 0, right: -5 }}
          tick={{ fill: "#A0A0A0", fontSize: "12" }}
          interval={0}
          angle={-5}
          stroke="none"
        />
        <YAxis stroke="none" tick={{ fill: "#A0A0A0", fontSize: "12" }} />
        <Tooltip />
        <Bar dataKey="Present" fill="#3947CB" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Absent" fill="#ECEDFA" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DataBarChart;
