import React, { useState } from "react"
import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { 
    Chart as ChartJS, 
    BarElement,
    CategoryScale, 
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend 
)

export const BarChart = (props) => {
    const price = props.price;
    const category1 = props.category1;
    const category2 = props.category2;
    const category3 = props.category3;
    const category4 = props.category4;
    const labels = ['Custom', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Chart',
        data: [price, category1, category2, category3, category4],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  const options = {
    type: 'bar',
    plugins: {
      datalabels: {
        color: "black",
        labels: {
          title: {
            font: {
              weight: "bold"
            }
          }
        },
        anchor: "end",
        align: "-90"
      },
      legend: {
        position: "top",
        labels: {
          boxHeight: 10,
          boxWidth: 5
        }
      }
    }
  };
    return (
        <React.Fragment>
            <Bar data={data} options={options}></Bar>
        </React.Fragment>
    )
}