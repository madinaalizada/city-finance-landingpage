import React, {useState} from 'react';
import { Bar } from 'react-chartjs-2';
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
            data: [42000, 20000, 40000, 20000, 13700, 26900, 23000, 18000, 30000, 46100, 10800, 28682],
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
        onClick: (event, elements) => {
          if (elements[0] !== undefined) {
            const chart = elements[0]._chart;
            const element = chart.getElementAtEvent(event)[0];
            const dataset = chart.data.datasets[element._datasetIndex];
            const xLabel = chart.data.labels[element._index];
            const value = dataset.data[element._index];
            console.log(setDt);
            setDt({ month: xLabel, value: value });
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: true,
                zeroLineColor: "white",
                color: "white"
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
                drawBorder: false,
                drawTicks: false,
                zeroLineColor: "",
                color: "rgba(245, 246, 248, 1)"
              },
              ticks: {
                beginAtZero: false,
                min: 10000,
                max: 50000,
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
      <Bar data={data} options={options} height={72}  onElementsClick={elem => {
    const dataa = data.datasets[elem[0]._datasetIndex].data;
    console.log("Result", dataa[elem[0]._index]);
    console.log("Test", dataa[elem._index]);
  }}/>
    </div>
  )
}

export default Chart
