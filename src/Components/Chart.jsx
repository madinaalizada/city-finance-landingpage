import React, {useState} from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as Charts} from 'chart.js';
import './Chart.css';

const Chart = () => {
  Charts.defaults.global.legend.display = false;
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        borderRadius: 10,
        datasets: [
          {
            label: "First set",
            display: false,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [42000, 20000, 40000, 20000, 67000, 67000, 20000, 18000, 30000, 71000, 98000, 69000],
            backgroundColor: "#F5F6F8",
            borderRadius: 5,
            borderColor: "#F5F6F8",
            hoverBackgroundColor: "#233B82"
          }
        ]
      };
      const [dt, setDt] = useState({
        month: data.labels[0],
        value: data.datasets[0].data[0]
      });
    
      const options = {
        responsive: true,
        onHover: (event, elements) => {
          if (elements[0] !== undefined) {
            const chart = elements[0]._chart;
            const element = chart.getElementAtEvent(event)[0];
            const dataset = chart.data.datasets[element._datasetIndex];
            const xLabel = chart.data.labels[element._index];
            const value = dataset.data[element._index];
            console.log(dataset.label + " at " + xLabel + ": " + value);
            setDt({ month: xLabel, value: value });
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: true,
                zeroLineColor: "#777D8B"
              },
              categoryPercentage: 0.7,
              barPercentage: 0.9,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true,
                zeroLineColor: "transparent",
                color: "#F5F6F8"
              },
              ticks: {
                beginAtZero: false,
                min: 10000,
                max: 100000,
                stepSize: 10000,
                callback: function (value, index, values) {
                  return Number((value / 1000).toString()) + "K";
                }
              }
            }
          ]
        }
      };
    
  return (
    <div className='chart-container'>
      <p className='chart-title'>Dövriyyə</p>
      <p>
      <span id='chart-value'>{dt.value} ₼ </span><span id='chart-month'>/ {dt.month}</span>
      </p>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Chart
