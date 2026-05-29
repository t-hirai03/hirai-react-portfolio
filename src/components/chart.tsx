import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type ChartProps = {
  title: string;
  labels: string[];
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

function Chart({ title, labels, data, backgroundColor, borderColor }: ChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1 },
        pointLabels: { font: { size: 13 } },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
}

export default Chart;
