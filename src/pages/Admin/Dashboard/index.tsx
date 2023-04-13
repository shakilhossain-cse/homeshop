import { useQuery } from "@tanstack/react-query";
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
import { getDashboardData } from "../../../services/dashboardService";


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
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};


function Dashboard() {
  const { data, isLoading } = useQuery<any>(
    ["dashboard-data"],
    getDashboardData
  );

  return (
    <div>
      <div className="">
        {!isLoading && <Line options={options} data={data} />}
      </div>
    </div>
  );
}

export default Dashboard;
// <div className="grid grid-cols-12 gap-4 mt-10">
//   <div className="col-span-4 p-4 bg-gray-300">Hello</div>
//   <div className="col-span-4 p-4 bg-gray-300">Hello</div>
//   <div className="col-span-4 p-4 bg-gray-300">Hello</div>
// </div>
