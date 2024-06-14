// LineChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chartInstance: Chart<"line", number[], string> | null = null;

  useEffect(() => {
    const colors = [
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      ];
      var ctx;
      if(chartRef.current){

        ctx = chartRef.current.getContext("2d");
      }
    


    
    if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }
    if(ctx){
      chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Facebook", "Twitter", "Instagram", "TikTok", "Youtube"],
        datasets: [
          {
            label: "Social Media Followers",
            backgroundColor: colors,
            borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
            borderWidth: 2,
            hoverBackgroundColor: colors,
            hoverBorderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
            /*pointBackgroundColor: "blue",*/
            
            data: [75, 59, 80, 81, 56, 55],
            
          },
        ],
      },
      options: {
        /*animation:{
            animateRotate:true,
            animateScale:true,
        },*/
        indexAxis: 'x',
        scales: {
        x: {
            beginAtZero: true
        }
        },
        plugins: {
            legend: {
              labels: {
                color: "black", // Change the color of the main label in the legend
                boxWidth: 0,
                boxHeight: 0,
              },
              /*display: false,*/
            },
            /*subtitle: {
                display: false,
                text: 'Custom Chart Subtitle'
            },
            decimation:{
                enabled:false,
                samples:5,
                threshold:5,
            }*/
          },
      },
    });

  }
    return () => {
        if (chartInstance) {
          chartInstance.destroy(); // Ensure chart instance is destroyed when component unmounts
        }
    };
  }, []);


  
  return <div className="LineChartDiv">
        <canvas ref={chartRef} />
  </div>
};

export default LineChart;