
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
    {
      title: "Echoes of Destiny",
      totalPages: 368
    },
    {
      title: "Whispers in the Wind",
      totalPages: 312
    },
    {
      title: "Starsong Symphony",
      totalPages: 432
    },
    {
      title: "Whispers of Eternity",
      totalPages: 288
    },
    {
      title: "Midnight Symphony",
      totalPages: 344
    },
    {
      title: "Silent Whispers",
      totalPages: 320
    },
  ];
  
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BarChart
        width={1400}
        height={700}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
