import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const randomNumbers = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 1000)
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: "bottom" as const,
    // },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: randomNumbers,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
function Dashboard() {
  return (
    <div>
      <div className="">
        <Line options={options} data={data} />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-4 p-4 bg-gray-300">Hello</div>
        <div className="col-span-4 p-4 bg-gray-300">Hello</div>
        <div className="col-span-4 p-4 bg-gray-300">Hello</div>
      </div>
    </div>
  );
}

export default Dashboard;
