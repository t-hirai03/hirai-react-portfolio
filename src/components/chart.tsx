import React from "react";
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

type Props = {
  titleLabel: string;
  Label01: string;
  data01: number;
  Label02: string;
  data02: number;
  Label03: string;
  data03: number;
  Label04: string;
  data04: number;
  Label05: string;
  data05: number;
  Label06: string;
  data06: number;
  graphBackgroundColor: string;
  graphBorderColor: string;
};

export const chart: React.FC<Props> = (props) => {
  const data = {
    labels: [
      props.Label01,
      props.Label02,
      props.Label03,
      props.Label04,
      props.Label05,
      props.Label06,
    ],
    datasets: [
      {
        label: props.titleLabel,
        data: [
          props.data01,
          props.data02,
          props.data03,
          props.data04,
          props.data05,
          props.data06,
        ],
        backgroundColor: props.graphBackgroundColor,
        borderColor: props.graphBorderColor,
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
        ticks: {
          stepSize: 1,
        },
        pointLabels: {
          font: {
            size: 13,
          },
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
};

export default chart;
